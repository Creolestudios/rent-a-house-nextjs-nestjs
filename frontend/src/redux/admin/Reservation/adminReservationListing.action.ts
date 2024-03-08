export const reservationActions={

        RESERVATION_LIST_REQUEST:'RESERVATION_LIST_REQUEST',
        RESERVATION_LIST_SUCCESS:'RESERVATION_LIST_SUCCESS',
        RESERVATION_LIST_ERROR:'RESERVATION_LIST_ERROR',

       SINGLE_RESERVATION_LIST_REQUEST:' SINGLE_RESERVATION_LIST_REQUEST',
       SINGLE_RESERVATION_LIST_SUCCESS:' SINGLE_RESERVATION_LIST_SUCCESS',
       SINGLE_RESERVATION_LIST_ERROR:' SINGLE_RESERVATION_LIST_ERROR',


        getReservationList:(payload:any)=>({
            type:reservationActions.RESERVATION_LIST_REQUEST,
            payload:payload,
        }),

        getSingleReservation:(payload:any)=>({
            type:reservationActions.SINGLE_RESERVATION_LIST_REQUEST,
            payload:payload,
        })
}

export default reservationActions