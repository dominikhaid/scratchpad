
interface actionType {
  type:string
}

type initialStateType = {
  count: number
};

export const initialState = {
  count: 0,
};

export function reducer(state:initialStateType, action:actionType):initialStateType {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}
