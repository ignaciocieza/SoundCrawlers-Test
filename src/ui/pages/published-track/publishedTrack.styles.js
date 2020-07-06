import { makeStyles } from '@material-ui/core/styles';
import { gridTemplate, colors, maxHeight } from '../../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '70vh',
        backgroundColor: colors.mainDefault,
        position: "relative",
        [maxHeight]: {
            height: '65vh',
        },
        [theme.breakpoints.up('lg')]: {
            height: '65vh',
        },
    },
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    rootYoutube: {
        height: '50%',
        [theme.breakpoints.up('sm')]: {
            height: '60%',
        }
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
        [theme.breakpoints.up('sm')]: {
            height: '40%',
        }
    },
    rootDetailTitle: {
        height: '40%',
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        }
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
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.4em',
            marginTop: '3%'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2em',
        },
        [maxHeight]: {
            fontSize: '0.9em',
            marginTop: '1%'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.4em',
            marginTop: '1%'
        },
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
        [maxHeight]: {
            width: '33%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '30%',
        },
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
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.4em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2em',
        },
        [maxHeight]: {
            fontSize: '1em'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.4em',
        },
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
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.4em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2em',
        },
        [maxHeight]: {
            fontSize: '1em'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.4em',
        },
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
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.3em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.9em',
        },
        [maxHeight]: {
            fontSize: '0.9em'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.3em',
        },
    },
}));

export default useStyles;