import { THEME_ACTIVE } from "./constant";

const initialState = {
    messages: [],
    themeMessage: THEME_ACTIVE.DEFAULT
};

export const ACTION_TYPES = {
    MESSAGE_LIST_SET_THEME_ACTIVE: 'MESSAGE_LIST_SET_THEME_ACTIVE'
}

export function messageListReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.MESSAGE_LIST_SET_THEME_ACTIVE:
            return {
                ...state,
                themeMessage: action.themeMessage
            }
        default:
            return state;
    }
}

/**
 * Choose theme active message
 * @param themeMessage: Theme active
 */
export const handleChooseThemeMessage = (themeMessage: any) => ({
    type: ACTION_TYPES.MESSAGE_LIST_SET_THEME_ACTIVE,
    themeMessage: themeMessage
})