import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';
import { getAllCMS } from './cms.refetch';

function createCMSPageMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($CreateCmsPageInput: CreateCmsPageInput!) {
        createCmsPage(CreateCmsPageInput: $CreateCmsPageInput) {
          message
        }
      }
    `,
    variables: {
      ...payload,
    },
    refetchQueries: [
      {
        query: getAllCMS,
      },
    ],
  });
}

function updateCMSMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($updateCms: UpdateCmsPageInput!) {
        UpdateCmsPage(updateCms: $updateCms)
      }
    `,
    variables: {
      ...payload,
    },
    // refetchQueries: [
    //   {
    //     query: getAllCMS,
    //   },
    // ],
    refetchQueries:[
      {
        query:gql`
        query ($pageName: String!) {
          FindOneCms(identifier: $pageName) {
            id
            identifier
            page_name
            meta_title
            meta_description
            language_id
            content
          }
        }
        `
        ,
        variables:{
          pageName:payload.updateCms.data[0].page_name
        }
      }
    ]
  });
}

function removeCMSMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($id: Int!) {
        removeCmsPage(id: $id)
      }
    `,
    variables: {
      ...payload,
    },
    refetchQueries: [
      {
        query: getAllCMS,
      },
    ],
  });
}

export { createCMSPageMutation, updateCMSMutation, removeCMSMutation };
