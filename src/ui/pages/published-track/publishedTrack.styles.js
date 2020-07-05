import { makeStyles } from '@material-ui/core/styles';
import { gridTemplate, colors } from '../../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '70vh',
        backgroundColor: colors.mainDefault,
        position:"relative",
    },
    container:{
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
    },
    rootYoutube: {
        height: '50%',
    },
    youtubeVideo: {
        width: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
    },
    rootDetail: {
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
    },
    rootDetailTitle: {
        height: '40%',
    },
    trackTitle: {
        fontFamily: 'Roboto',
        fontSize: '0.9em',
        fontWeight: 'bold',
        fontStretch: 'condensed',
        fontStyle: 'normal',
        lineHeight: 'normal',
        color: colors.primaryDefault,
        textTransform: 'uppercase',
        letterSpacing: ' 0.1em',
        marginLeft: '5%',
    },
    rootDetailUser: {
        height: '60%',
        display: 'grid',
        gridTemplateColumns: gridTemplate.colums,
    },
    detailUserItemOne: {
        gridColumn: 1,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    stickerUserImage: {
        width: '60%',
        objectFit: 'contain',
    },
    detailUserItemTwo: {
        height: '70%',
        gridColumn: '2 /span 5',
        display: 'grid',
        gridTemplateRows: 'auto auto auto',
    },
    jeffMiles: {
        gridRow: 1,
        fontFamily: 'Roboto',
        fontSize: '1em',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: colors.onSurfaceHighEmphasis,
    },
    london1minAgo: {
        gridRow: 2,
        fontFamily: 'Roboto',
        fontSize: '1em',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: colors.onSurfaceMidEmphasis,
    },
    genre: {
        gridRow: 3,
        fontFamily: 'Roboto',
        fontSize: '0.9em',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textDecoration: 'underline',
        color: colors.onSurfaceHighEmphasis,
    },
    paper: {
        padding: theme.spacing(2),
        marginBottom: '1%',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default useStyles;