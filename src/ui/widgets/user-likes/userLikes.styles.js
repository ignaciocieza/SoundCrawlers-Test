import { makeStyles } from '@material-ui/core/styles';
import { gridTemplate, colors } from '../../../constants';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '10vh',
        display: 'grid',
        gridTemplateColumns: gridTemplate.colums,
        alignItems: 'center',
        justifyItems: 'center',
        borderBottom: '1px solid #91929475',
    },
    userImg: {
        gridColumn: 1,
        width: '50%',
        maxHeight: '100%',
        objectFit: 'contain',
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
    },
    buttonFollow: {
        width:'70%',
        height:'50%',
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
    },
    buttonFollowing: {
        width:'70%',
        height:'50%',
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
    }
}))

export default useStyles;