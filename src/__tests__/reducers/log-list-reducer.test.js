import logListReducer from '../../reducers/log-list-reducer';

describe('logListReducer', () => {

  const currentState = {
    1: {
      name: 'Butterfree',
      kind: 'bug',
      location: 'Mexico',
      level: 4,
      description: 'He cute',
      id: 1
    },
    2: {
      name: 'Pikachu',
      kind: 'electric',
      location: 'Silicon Valley',
      level: 40,
      description: 'Shocked me before I could catch it',
      id: 2
    }
  }


  let action;
  const logData = {
    name: 'Butterfree',
    kind: 'bug',
    location: 'Mexico',
    level: 4,
    description: 'He cute',
    id: 1
  };



  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(logListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new log data to masterLogList', () => {
    const { name, kind, location, level, description, id } = logData;
    action = {
      type: 'ADD_LOG',
      name: name,
      kind: kind,
      location: location,
      level: level,
      description: description,
      id: id
    };

    expect(logListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        kind: kind,
        location: location,
        level: level,
        description: description,
        id: id
      }
    });
  });

  test('Should successfully delete a log', () => {
    action = {
      type: 'DELETE_LOG',
      id: 1
    };
    expect(logListReducer(currentState, action)).toEqual({
      2: {
        name: 'Pikachu',
        kind: 'electric',
        location: 'Silicon Valley',
        level: 40,
        description: 'Shocked me before I could catch it',
        id: 2
      }
    });
  });
});