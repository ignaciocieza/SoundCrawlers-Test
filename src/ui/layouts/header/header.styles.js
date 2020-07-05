import { makeStyles } from '@material-ui/core/styles';
import { gridTemplate, colors } from '../../../constants';

const useStyles = makeStyles((theme) => ({
    bar: {
        height: '10vh',
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
        gridTemplateColumns: gridTemplate.colums,
        boxShadow: colors.shadows,
        backgroundColor: colors.mainDefault,

    },
    oval: {
        width: '56%',
        height: '60%',
        backgroundColor: '#ffffff',
        gridColumn: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
    },
    logoSoundcrawlers: {
        width: '70%',
        borderRadius: '50%',
    },
    containerItemTwo: {
        width: '100%',
        gridColumn: '4',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    iconSearch:{
        width:'47%',
        objectFit: 'contain',
    },
    containerItemThree: {
        width: '100%',
        gridColumn: '5',
        display: 'flex',
        justifyContent: 'center',
    },
    stickerUserImage: {
        width: '60%',
        objectFit: 'contain',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default useStyles;