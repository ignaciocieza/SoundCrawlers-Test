import indexTypeActions from '../actions/indexTypeActions';

const INITIAL_STATE = {
    isChecked: false
};

const indexReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case indexTypeActions.SET_IS_CHECKED:
            return ({
                ...state,
                isChecked: !state.isChecked
            });
        default:
            return state;
    }
};

export default indexReducer;