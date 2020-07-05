import { makeStyles } from '@material-ui/core/styles';
import { maxHeight } from '../../../constants';

const useStyles = makeStyles((theme) => ({
    rootItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        height: '40%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    iconImg: {
        width: '50%',
        objectFit: 'contain',
        [maxHeight]: {
            width: '33%'
        }
    },
    number: {
        fontFamily: 'Roboto',
        fontSize: '1em',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.5em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2em',
        },
        [maxHeight]: {
            fontSize: '1.2em'
        }
    }
}));

export default useStyles;