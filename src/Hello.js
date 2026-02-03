import React, { Fragment, useState } from 'react';
import './Hello.css';

function HellWorld(props) {
    const [isTrue, setIsTrue] = useState(false)

    const toggleTrue = () => {
        if (isTrue) {
            setIsTrue(false)
            return
        }
        setIsTrue(true)
    }
}

export default HellWorld;