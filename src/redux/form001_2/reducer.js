const defaultForm001_2 = [

]

const initialState = {
    info_form001_2: defaultForm001_2
}

export const Form001_2Reducer = (state = initialState, action) => {
    switch (action.type){
        case 'SAVE_FORM001_2':
            return {
                ...state,
                info_form001_2: [...state.info_form001_2, action.payload]
            }
        default:
            return state
    }
}