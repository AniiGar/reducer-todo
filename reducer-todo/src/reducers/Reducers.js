export const initialState = [
    {
        item: 'Laundry',
        completed: false,
        id: 110
    },
    {
        item: 'Groceries',
        completed: false,
        id: 111
    },
    {
        item: 'Dishes',
        completed: false,
        id: 112
    },
    {
        item: 'Walk Dog',
        completed: false,
        id: 113
    }
]

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return[ ...state, action.payload ]
        case 'TOGGLE':
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    console.log('Toggling:', todo)
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            })
        case 'CLEAR':
            return state.filter(todo => todo.completed === false)
        default:
            return state;
    }
}