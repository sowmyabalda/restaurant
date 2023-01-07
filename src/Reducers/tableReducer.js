const initialState = {
    table_number: null
}

export default function tablereducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case "SETTABLENUM":
            return {...state, table_number:payload}
        case "RESETTABLENUM":
            return {...state, table_number: null}
        default:
            return state
    }
}