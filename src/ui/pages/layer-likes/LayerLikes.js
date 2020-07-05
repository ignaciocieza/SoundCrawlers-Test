import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserLikes from '../../widgets/user-likes/UserLikes';
import { setIsChecked } from '../../../api/actions/indexActions';
import Slide from '@material-ui/core/Slide';
import ListSubheader from '@material-ui/core/ListSubheader';
import iconLikePressed from '../../../assets/icon-like-pressed.png';
import iconLikePressed2x from '../../../assets/icon-like-pressed@2x.png';
import iconLikePressed3x from '../../../assets/icon-like-pressed@3x.png';
import iconClose from '../../../assets/close_24px.png';
import iconClose2x from '../../../assets/close_24px@2x.png';
import iconClose3x from '../../../assets/close_24px@3x.png';
import { userLikesData } from '../../../api/data';
import useStyles from './layerLikes.styles';

export default function LayerLikes() {
    const { isChecked } = useSelector(state => state);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Slide direction="up" in={isChecked} mountOnEnter unmountOnExit timeout={{ enter: 1000, exit: 1000 }}>
            <div className={classes.root}>
                <ListSubheader className={classes.titleContainer}>
                    <img
                        src={iconLikePressed}
                        srcSet={`${iconLikePressed2x} 2x, ${iconLikePressed3x} 3x`}
                        className={classes.iconLikePressed}
                        alt="no imagen"
                    />
                    <span className={classes.title}>Likes</span>
                    <img
                        src={iconClose}
                        srcSet={`${iconClose2x} 2x, ${iconClose3x} 3x`}
                        className={classes.close}
                        alt="no imagen"
                        onClick={() => {
                            dispatch(setIsChecked(false))
                        }}
                    />
                </ListSubheader>
                {userLikesData.map(item => <UserLikes key={item.key} {...item} />)}
            </div >
        </Slide>
    );
}