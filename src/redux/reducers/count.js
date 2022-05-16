const countReducer = (state = {}, action) => {
  switch (action.type) {
    case 'DECREMENT':
      if (action.count !== undefined) {
        return state = action.count;
      } else {
        return state;
      }
      case 'INCREMENT':
        if (action.count !== undefined) {
          return state = action.count;
        } else {
          return state;
        }
        case 'RESET':
          if (action.count !== undefined) {
            return state = action.count;
          } else {
            return state;
          }
    default:
      return state;
  }
}

export default countReducer;