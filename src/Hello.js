import React, { Fragment } from 'react';
import './Hello.css';

function HellWorld(props) {
    return (
        <Fragment>
            <hr />
            <h1 className='h1-green'>{props.msg}</h1>
        </Fragment>
    )
}

export default HellWorld;