import React from 'react';
import logo from '../../../assets/logo.png';
import iconSearch from '../../../assets/icon-search.png';
import iconSearch2x from '../../../assets/icon-search@2x.png';
import iconSearch3x from '../../../assets/icon-search@3x.png';
import userImage from '../../../assets/user-image.png';
import userImage2x from '../../../assets/user-image@2x.png';
import userImage3x from '../../../assets/user-image@3x.png';
import useStyles from './header.styles';

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.bar}>
            <div className={classes.oval}>
                <img src={logo} alt="no imagen" className={classes.logoSoundcrawlers} />
            </div>
            <div className={classes.containerItemTwo}>
                <img
                    src={iconSearch}
                    srcSet={`${iconSearch2x} 2x, ${iconSearch3x} 3x`}
                    className={classes.iconSearch}
                    alt="no imagen"
                />
            </div>
            <div className={classes.containerItemThree}>
                <img
                    src={userImage}
                    srcSet={`${userImage2x} 2x,${ userImage3x} 3x`}
                    className={classes.stickerUserImage}
                    alt="no imagen"
                />
            </div>
        </div>
    );
}