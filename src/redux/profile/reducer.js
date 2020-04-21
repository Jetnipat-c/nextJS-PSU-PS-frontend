const initialState = {
  sid: []
}

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PROFILE':
      return {
        ...state,
        sid: [...state.sid, action.payload]
      }
    default:
      return state
  }
}
