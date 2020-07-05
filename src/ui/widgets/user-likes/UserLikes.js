import React from 'react';
import useStyles from './userLikes.styles';

export default function UserLikes({ userImg, userImg2x, userImg3x, userName, userCity, buttonStyle }) {
    const classes = useStyles();
    
    return (
            <div  className={classes.container}>
                <img
                    src={userImg}
                    srcSet={`${userImg2x} 2x, ${userImg3x} 3x`}
                    className={classes.userImg}
                    alt="no imagen"
                />
                <div className={classes.titleContainer}>
                    <span className={classes.title}>{userName}</span>
                    <span className={classes.subTitle}>{userCity}</span>
                </div>
                <button
                    className={buttonStyle === 'Follow' ? classes.buttonFollow : classes.buttonFollowing}
                >
                    {buttonStyle}
                </button>
            </div >
    )
}