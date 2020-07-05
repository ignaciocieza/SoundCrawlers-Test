import indexTypeActions from './indexTypeActions';

export const setIsChecked = (value) => ({
    type: indexTypeActions.SET_IS_CHECKED,
    payload: value
});