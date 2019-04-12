// First time it run, it passs the initial state with the defult value which is defined here
const initState = {
    posts: []
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;