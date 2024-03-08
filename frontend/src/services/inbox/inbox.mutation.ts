import { gql } from "@apollo/client";
import { serviceAuthInstanceMutation } from "../apollo-client";
import { getMessageRefetch } from "./inbox.refetch";

function inboxMutation(payload: any) {
    console.log("payload....",payload)
  return serviceAuthInstanceMutation({
    type: "mutation",
    mutate: gql`
      mutation ($id:Int!,$status:Int!) {
        changeStatus(statusChange: {
            id:$id,
            status:$status
        })
      }
    `,
    variables: {
      ...payload,
    },
    // refetchQueries:[
    //   {
    //     query:getMessageRefetch
    //   }
    // ]
  });
}

export { inboxMutation };
