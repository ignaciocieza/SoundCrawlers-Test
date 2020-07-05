import { makeStyles } from '@material-ui/core/styles';
import { gridTemplate, colors, maxHeight } from '../../../constants';

const useStyles = makeStyles((theme) => ({
    bar: {
        height: '10vh',
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
        gridTemplateColumns: gridTemplate.colums,
        boxShadow: colors.shadows,
        backgroundColor: colors.mainDefault,
        [maxHeight]: {
            height: '15vh',
            gridTemplateRows: '15vh'
        }
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
        [theme.breakpoints.up('sm')]: {
            width: '55%',
            height: '67%',
        },
        [maxHeight]: {
            width: '33%',
            height: '78%'
        }
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
    iconSearch: {
        width: '47%',
        objectFit: 'contain',
        [maxHeight]: {
            width: '33%',
        }
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
        [maxHeight]: {
            width: '33%',
        }
    },
}));

export default useStyles;