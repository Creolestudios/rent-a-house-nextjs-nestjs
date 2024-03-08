import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';
import { getAllLanguage } from './language.refetch';

function createLanguageMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($createLanguageInput: CreatelanguageInput!) {
        createLanguage(createLanguageInput: $createLanguageInput) {
          message
          avalible_pages
        }
      }
    `,
    variables: {
      ...payload,
    },
    refetchQueries: [
      {
        query: getAllLanguage,
      },
    ],
  });
}

function removeLanguageMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($id: Int!) {
        removeLanguage(id: $id)
      }
    `,
    variables: {
      ...payload,
    },
    refetchQueries: [
      {
        query: getAllLanguage,
      },
    ],
  });
}

export { createLanguageMutation, removeLanguageMutation };
