import { makeStyles } from '@material-ui/core/styles';
import { gridTemplate, colors, maxHeight } from '../../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: colors.mainD1,
        height: '66vh',
        overflowY: 'auto',
        position: 'absolute',
        width: ' 100%',
        [theme.breakpoints.up('lg')]: {
            height: '64vh',
        },
    },
    titleContainer: {
        height: '10vh',
        paddingLeft: 0,
        paddingRight: 0,
        display: 'grid',
        gridTemplateColumns: gridTemplate.colums,
        alignItems: 'center',
        justifyItems: 'center',
        backgroundColor: colors.mainD1,
        [maxHeight]: {
            height: '15vh',
        },
        [theme.breakpoints.up('lg')]: {
            height: '15vh',
        },
    },
    iconLikePressed: {
        gridColumn: 1,
        width: '40%',
        maxHeight: '100%',
        objectFit: 'contain',
        backgroundColor: colors.mainD1,
        [maxHeight]: {
            width: '33%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '25%',
        },
    },
    title: {
        justifySelf: 'flex-start',
        gridColumn: 2,
        fontFamily: 'Roboto',
        fontSize: '1.3em',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        backgroundColor: colors.mainD1,
        color: colors.onSurfaceHighEmphasis,
        [theme.breakpoints.up('sm')]: {
            fontSize: '2em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5em',
        },
        [maxHeight]:{
            fontSize:'1.5em'
        }
    },
    close: {
        gridColumn: 5,
        maxHeight: '100%',
        width: '40%',
        objectFit: 'contain',
        backgroundColor: colors.mainD1,
        [maxHeight]: {
            width: '33%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '25%',
            cursor:'pointer',
        },
    }
}))

export default useStyles;