import { DECREASE_COUNT, INCREASE_COUNT, SET_COUNT } from "./actionTypes"

const initialState = {
    count: 0,
    name: 'ram',
    occupation: "driver"
}

// action = { payload:'', type:''}
export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNT:
            return {
                ...state,
                count: count + 1
            }
        case DECREASE_COUNT:
            return {
                ...state,
                count: count - 1
            }
        case SET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state
    }
}