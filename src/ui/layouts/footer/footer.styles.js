import { makeStyles } from '@material-ui/core/styles';
import {gridTemplate,colors} from '../../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '20vh',
        display: 'grid',
        gridTemplateColumns: gridTemplate.colums,
        backgroundColor: colors.mainDefault
    },
}));

export default useStyles;