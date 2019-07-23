import moment from 'moment';

export const initialState = {
    toDos: [
        {
            description: 'take out the trash',
            id: 123,
            isCompleted: false,
            dueDate: moment('04/12/2019').format('MM/DD/YYYY')
        },
        {
            description: 'Mow the lawn',
            id: 124,
            isCompleted: false,
            dueDate: moment('07/12/19').format('MM/DD/YYYY')
        },
        {
            description: 'drink from the cup of corporate america',
            id: 125,
            isCompleted: false,
            dueDate: moment('06/12/2019').format('MM/DD/YYYY')
        },
        {
            description: 'try not to cry',
            id: 126,
            isCompleted: false,
            dueDate: moment('03/12/2018').format('MM/DD/YYYY')
        },
        {
            description: 'cry a lot',
            id: 1265,
            isCompleted: false,
            dueDate: moment('01/12/2016').format('MM/DD/YYYY')
        },
        
    ]
};

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const newItem = {
                description: action.payload,
                id: Date.now(),
                isCompleted: false,
                dueDate: Date.now()
            }
            return{
                ...state,
                toDos: [...state.toDos, newItem]
            };
        case 'DELETE_TODO':
        console.log(action.payload);
            return{
                ...state,
                toDos: state.toDos.filter(item => item.id !== action.payload)
            };
        case 'TOGGLE_TODO':
            return{
                ...state,
                toDos: state.toDos.map(toDo => {
                    if(action.payload === toDo.id) {
                        return{
                            ...toDo,
                            isCompleted: !toDo.isCompleted
                        };
                    }
                    return toDo;
                })
            };
        case 'CLEAR_COMPLETED':
            return{
                ...state,
                toDos: state.toDos.filter(toDo => !toDo.isCompleted)
            };
        default:
            return state;
    }
}