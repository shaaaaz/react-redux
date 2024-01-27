const Reducer = (state = { likes: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { likes: state.likes + 1 }
        case "DECREMENT":
            return { likes: state.likes - 1 }
        default:
            return state
    }
}

export default Reducer