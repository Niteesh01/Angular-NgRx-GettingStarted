export function reducer(state, action){
  switch(action.type) {

    case 'MASK_USER_NAME':
      return {
        ...state,
        showUserName: action.payload
      };
    default:
      return state
  }
}
