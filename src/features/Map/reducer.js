const initialState = {
    tiles : [],
    scoreMin:10,
    gain : 10,
}

const mapReducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'ADD_TILES' :
            return {
                ...action.payload

            }
        default :
            return state

    }
}

export  default mapReducer