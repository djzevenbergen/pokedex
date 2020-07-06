const logListReducer = (state = {}, action) => {
  const { name, kind, location, level, description, id } = action;
  switch (action.type) {
    case 'ADD_LOG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          kind: kind,
          location: location,
          level: level,
          description: description,
          id: id
        }
      });
    case 'DELETE_LOG':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default logListReducer;
