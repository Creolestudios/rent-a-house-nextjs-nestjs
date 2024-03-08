import { gql } from "@apollo/client";
import { serviceAuthInstanceMutation } from "../apollo-client";
import { userList } from "./userListing.refetch";



function userDeleteMutation(payload: any) {

    return serviceAuthInstanceMutation({
        type: "mutation",
        mutate: gql`
        mutation( $id:Int! ){
            deleteUser(UsersId:$id) 
          }
    `,
        variables: {
            id: payload.id,
        },
        refetchQueries: [
            {
                query: userList,
                variables: payload.userListPayload
            }
        ]
    });
}

export { userDeleteMutation };
