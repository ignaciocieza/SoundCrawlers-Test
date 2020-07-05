import { makeStyles } from '@material-ui/core/styles';

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
    },
    number: {
        fontFamily: 'Roboto',
        fontSize: '1em',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
    }
}));

export default useStyles;