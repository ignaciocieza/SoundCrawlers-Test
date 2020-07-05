import React from 'react';
import ButtonFooter from '../../widgets/button-footer/ButtonFooter';
import {footerIcons} from '../../../api/data';
import useStyles from './footer.styles';


export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>{
            footerIcons.map((item, index) => (
                <ButtonFooter key={item.key} {...item} index={index}/>
            ))}
        </div>
    );
}
