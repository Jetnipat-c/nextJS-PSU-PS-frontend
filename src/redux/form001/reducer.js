const defaultForm001 = [
]

const initialState = {
  info_form001: defaultForm001
}

export const Form001Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_FORM001':
      return {
        ...state,
        info_form001: [...state.info_form001, action.payload]
      }
    default:
      return state
  }
}
