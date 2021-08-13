const initialState = {
    books:[]
}

export const BookReducer = (state = initialState, action) => {
    if(action.type === 'ALL_BOOKS'){
        return{
            ...state,
            books:action.books
        }
    }
    return state;
}