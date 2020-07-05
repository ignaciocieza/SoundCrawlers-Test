import React from 'react';
import LayerLikes from '../layer-likes/LayerLikes';
import youTubeVideoImg from '../../../assets/Youtube-Video.png';
import youTubeVideo2XImg from '../../../assets/Youtube-Video@2x.png';
import youTubeVideo3xImg from '../../../assets/Youtube-Video@3x.png';
import userImage from '../../../assets/user-image.png';
import userImage2x from '../../../assets/user-image@2x.png';
import userImage3x from '../../../assets/user-image@3x.png';
import useStyles from './publishedTrack.styles';

export default function PublishedTrack() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LayerLikes />
            <div className={classes.container}>
                <div className={classes.rootYoutube}>
                    <img
                        src={youTubeVideoImg}
                        srcSet={`${youTubeVideo2XImg} 2x, ${youTubeVideo3xImg} 3x`}
                        className={classes.youtubeVideo}
                        alt="no imagen"
                    />
                </div>
                <div className={classes.rootDetail}>
                    <div className={classes.rootDetailTitle}>
                        <span className={classes.trackTitle}>Röyksopp - Andromeda (Lost Tapes)</span>
                    </div>
                    <div className={classes.rootDetailUser}>
                        <div className={classes.detailUserItemOne}>
                            <img
                                src={userImage}
                                srcSet={`${userImage2x} 2x, ${userImage3x} 3x`}
                                className={classes.stickerUserImage}
                                alt="no imagen"
                            />
                        </div>
                        <div className={classes.detailUserItemTwo}>
                            <span className={classes.jeffMiles}>Jeff Miles</span>
                            <span className={classes.london1minAgo}>London · 1 min ago</span>
                            <span className={classes.genre}>Electronica</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}