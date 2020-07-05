import { makeStyles } from '@material-ui/core/styles';
import { gridTemplate, colors } from '../../../constants';

const useStyles = makeStyles((theme) => ({
    back: {
        backgroundColor: colors.mainD1,
        height: '70vh',
    },
    root: {
        backgroundColor: colors.mainD1,
        height: '66vh',
        overflowY: 'auto',
        position: 'absolute',
        width: ' 100%',
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
    },
    iconLikePressed: {
        gridColumn: 1,
        width: '40%',
        maxHeight: '100%',
        objectFit: 'contain',
        backgroundColor: colors.mainD1,
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
    },
    close: {
        gridColumn: 5,
        maxHeight: '100%',
        width: '40%',
        objectFit: 'contain',
        backgroundColor: colors.mainD1,
    }
}))

export default useStyles;