const defaultProfiles = [
]

const initialState = {
  info_form001: defaultProfiles
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
