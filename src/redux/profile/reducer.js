const defaultProfiles = [

]

const initialState = {
  userinfo: defaultProfiles
}

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PROFILE':
      return {
        ...state,
        userinfo: [...state.userinfo, action.payload]
      }
    default:
      return state
  }
}
