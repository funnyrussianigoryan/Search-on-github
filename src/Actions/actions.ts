export const request = () => {
    return { type: 'REQUESTED' }
  };
  
export const requestSuccess = (data: object) => {
    return { type: 'REQUESTED_SUCCEEDED', payload: data }
  };
  
export const requestError = () => {
    return { type: 'REQUESTED_FAILED' }
  };
  
export const fetched = (search: string) => {
    return { type: 'FETCHED', payload: search }
  };

export const nextPage = () => {
  return { type: 'NEXT_PAGE'}
}

export const previousPage = () => {
  return { type: 'PREVIOUS_PAGE'}
}