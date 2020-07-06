import { makeStyles } from '@material-ui/core/styles';
import { maxHeight } from '../../../constants';

const useStyles = makeStyles((theme) => ({
    rootItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [maxHeight]: {
            height: ' 100%',
            justifyContent: 'space-evenly',
        }
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
        [theme.breakpoints.up('lg')]: {
            width: '17%',
        },
        [maxHeight]: {
            width: '24%'
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
            fontSize: '1em'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.7em',
            cursor: 'pointer',
        },
    }
}));

export default useStyles;