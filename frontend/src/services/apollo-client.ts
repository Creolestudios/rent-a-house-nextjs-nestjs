import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { apiBaseUrl } from '../config/constants';
const apolloHttpLink: any = createUploadLink({
  uri: apiBaseUrl,
});
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

interface IAuthQueryProps {
  type: string;
  mutate: any;
  variables?: Record<string, string | number | any>;
  refetchQueries?: any;
  fetchPolicy?: any,
}

const refetchAuthQuery = (refetch: any) => {
  let query: any = [];
  refetch.forEach((item: any) => {
    const data = {
      ...item,
      context: {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      },
    };
    query.push(data);
  });
  return query;
};

export const serviceInstanceMutation = (
  type: string,
  mutate: any,
  variables?: Record<string, string | number | any>
) => {
  let errorObject;
  if (type === 'mutation') {
    return client
      .mutate({
        mutation: mutate,
        variables: variables,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        errorObject = { error: error.networkError.result?.errors[0].message };
        return errorObject.error;
      });
  } else {
    return client
      .query({
        query: mutate,
        variables: variables,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        errorObject = { error: error.networkError.result?.errors[0].message };
        return errorObject;
      });
  }
};

export const serviceAuthInstanceMutation = ({
  type,
  mutate,
  variables,
  refetchQueries,
  fetchPolicy,
}: IAuthQueryProps) => {
  let errorObject: { error: string } | PromiseLike<{ error: string }>;
  if (type === 'mutation') {
    return client
      .mutate({
        mutation: mutate,
        variables: variables,
        context: {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        },
        refetchQueries:
          refetchQueries !== undefined && refetchAuthQuery(refetchQueries),
        onQueryUpdated() {
          return true;
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error.networkError.result?.errors[0].message === 'Unauthorized') {
          sessionStorage.clear();
          errorObject = {
            error: error.networkError.result?.errors[0].message,
          };
          return errorObject;
        } else {
          errorObject = {
            error: error.networkError.result?.errors[0].message,
          };
          return errorObject;
        }
      });
  } else if (type === 'subscribe') {
    const subscriptionOptions = {
      query: mutate,
      variables: variables,
      context: {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      },
    };
    return client.subscribe(subscriptionOptions).subscribe({
      next: (response) => {
        // Handle the data emitted by the Observable
        console.log('Received data:', response);
      },
      error: (error) => {
        // Handle any errors
        console.error('Error:', error);
      },
      complete: () => {
        // Handle completion of the Observable (optional)
        console.log('Subscription complete');
      },
    });
  } else {
    return client
      .query({
        query: mutate,
        variables: variables,
        context: {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        },
        fetchPolicy:fetchPolicy && fetchPolicy 
       
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error.networkError.result?.errors[0].message === 'Unauthorized') {
          sessionStorage.clear();
          errorObject = {
            error: error.networkError.result?.errors[0].message,
          };
          return errorObject;
        } else {
          errorObject = {
            error: error.networkError.result?.errors[0].message,
          };
          return errorObject;
        }
      });
  }
};

let indexOfColon = apiBaseUrl.indexOf(':');
let URLWithoutPrefix = apiBaseUrl.substring(indexOfColon + 1);

const wsLink =
  typeof window !== 'undefined'
    ? new GraphQLWsLink(
        createClient({
          url: `ws:${URLWithoutPrefix}`,
        })
      )
    : null;

const httpLink = apolloHttpLink;

const link =
  typeof window !== 'undefined' && wsLink != null
    ? split(
        ({ query }) => {
          const def = getMainDefinition(query);
          return (
            def.kind === 'OperationDefinition' &&
            def.operation === 'subscription'
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
