import { makeStyles } from '@material-ui/core/styles';
import { gridTemplate, colors, maxHeight } from '../../../constants';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '13vh',
        display: 'grid',
        gridTemplateColumns: gridTemplate.colums,
        alignItems: 'center',
        justifyItems: 'center',
        borderBottom: '1px solid #91929475',
        [maxHeight]: {
            height: '20vh',
        },
        [theme.breakpoints.up('lg')]: {
            height: '20vh',
        },
    },
    userImg: {
        gridColumn: 1,
        width: '50%',
        maxHeight: '100%',
        objectFit: 'contain',
        [maxHeight]: {
            width: '33%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '30%',
        },
    },
    titleContainer: {
        width: '100%',
        gridColumn: '2 /4',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        marginBottom: '3%',
        fontFamily: 'Roboto',
        fontSize: '1em',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: colors.onSurfaceHighEmphasis,
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
            fontSize: '1em'
        },
    },
    subTitle: {
        fontFamily: 'Roboto',
        fontSize: '1em',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: colors.onSurfaceMidEmphasis,
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
            fontSize: '1em'
        },
    },
    buttonFollow: {
        width: '70%',
        height: '41%',
        gridColumn: '4 /span 5',
        borderRadius: '1em',
        backgroundColor: colors.primaryDefault,
        fontFamily: 'Roboto',
        fontSize: '1em',
        fontWeight: 'bold',
        fontStretch: 'condensed',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.6px',
        color: colors.mainDefault,
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.4em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.9em',
        },
        [maxHeight]: {
            fontSize: '1em',
            width: '48%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '46%',
            height: '42%',
            fontSize: '1.4em',
        },
    },
    buttonFollowing: {
        width: '70%',
        height: '41%',
        gridColumn: '4 /span 5',
        backgroundColor: colors.mainD1,
        border: `2px solid ${colors.primaryDefault}`,
        borderRadius: '1em',
        fontFamily: 'Roboto',
        fontSize: '1em',
        fontWeight: 'bold',
        fontStretch: 'condensed',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.6px',
        color: colors.onSurfaceHighEmphasis,
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.4em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.9em',
        },
        [maxHeight]: {
            fontSize: '1em',
            width: '48%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '46%',
            height: '42%',
            fontSize: '1.4em',
        },
    }
}))

export default useStyles;