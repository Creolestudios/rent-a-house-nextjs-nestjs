import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';
import { getAllLanguage } from './language.refetch';

function getAllLanguageQuery() {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: getAllLanguage,
  });
}

export { getAllLanguageQuery };
