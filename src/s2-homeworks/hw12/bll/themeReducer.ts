const initState = {
    themeId: 1,
}
export type ThemeStateType = {themeId: number}
type ActionType = ChangeThemeIdActionType

export const themeReducer = (state = initState, action: ActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any
