export const settablenum = (value) => async dispatch  => {
    dispatch({
       type: "SETTABLENUM",
       payload: value
    })
}

export const resettablenum = () => async dispatch  => {
    dispatch({
       type: "RESETTABLENUM"
    })
}

export const setfilter = (value) => async dispatch => {
    dispatch({
        type: "SETFILTER",
        payload: value
    })
}

export const resetfilter = () => async dispatch => {
    dispatch({
        type: "RESETFILTER",
    })
}

export const addorder = (id,name,prize,url,table_number) => async dispatch => {
    dispatch({
        type: "ADDORDER",
        payload: {
            id: id,
            name: name,
            prize: prize,
            url: url,
            table_number: table_number
        }
    })
}

