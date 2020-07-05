import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsChecked } from '../../../api/actions/indexActions';
import useStyles from './buttonFooter.styles';
import { colors } from '../../../constants';

export default function ButtonFooter({ button, buttonStyle, event, icon, icon2x, icon3x, index }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div className={classes.rootItem} style={{ gridColumn: index + 1 }}>
            <div className={classes.icon}>
                <img
                    src={icon}
                    srcSet={`${icon2x} 2x, ${icon3x} 3x`}
                    className={classes.iconImg}
                    alt="no imagen"
                />
            </div>
            {
                event ? (
                    <span className={classes.number} style={{ color: colors[buttonStyle] }} onClick={() => dispatch(setIsChecked())}> {button}  </span>
                ) : (
                        <span className={classes.number} style={{ color: colors[buttonStyle] }}> {button}  </span>
                    )
            }
        </div>
    );
};