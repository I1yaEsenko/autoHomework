export type StateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

type ActionType = ChangeThemeIdType

export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {...state, themeId:action.themeId}
        }
        default:
            return state
    }
}

type ChangeThemeIdType = {
    type: 'SET_THEME_ID',
    themeId: number
}
export const changeThemeId = (themeId: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', themeId }) // fix any
