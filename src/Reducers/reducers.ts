interface state {
    readonly status: string;
    readonly data: object | null
}

interface forAction {
    type: string;
    payload?: any
}

const initialState = {
    status: '',
    data: null
  };

const reducer = (state: state = initialState, action: forAction) => {
switch (action.type) {
    case 'REQUESTED':
        return {
            status: 'REQUESTED',
            data: null
        };
    case 'REQUESTED_SUCCEEDED':
        return {
            status: 'REQUESTED_SUCCEEDED',
            data: action.payload
        };
    case 'REQUESTED_FAILED':
        return {
            status: 'REQUESTED_FAILED',
            data: null
            };
      default:
        return state;
    }
  };

export default reducer;
