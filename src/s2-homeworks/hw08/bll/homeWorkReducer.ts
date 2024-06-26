import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newArr = [...state].sort((a, b) => {
                if (a.name < b.name)  return -1;
                if (a.name > b.name) return 1;
                return 0;
            })

            return action.payload === 'up' ? newArr : newArr.reverse() ;
             // need to fix
        }
        case 'check': {

            return state.filter((elem) => elem.age >= action.payload ) // need to fix
        }
        default:
            return state
    }
}
