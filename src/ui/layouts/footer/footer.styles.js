import { makeStyles } from '@material-ui/core/styles';
import { maxHeight } from '../../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '20vh',
        display: 'grid',
        [theme.breakpoints.up('lg')]: {
            gridTemplateRows: '20vh',
        },
        [maxHeight]: {
            gridTemplateRows: '20vh',
            alignItems: 'flex-start',
        }
    },
}));

export default useStyles;