const initialState = { data: [] };
const SAVE_FORM_DATA = "SAVE_FORM_DATA";

export default (state = initialState, action) => {

    if (action.type === SAVE_FORM_DATA) {
        return {
            ...state,
            data: [...state.data, action.payload]
        }
    }

    return state;
};
