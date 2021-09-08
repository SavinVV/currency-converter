import React from 'react';

import './inputCurrency.css'

const InputCurrency = (props) => {
    
    const checkInputData = (e) => {
        const reg = /[0-9]*\.?[0-9]*/g;
        const value = e.target.value;
        if (!value.match(reg)) {
            e.target.value = '';
            return;
        }
        if (value.split('.').length > 2) {
            e.target.value = value.slice(0,-1);
        } else if (value === '.') {
            e.target.value = '0.'
        } else if (value.match(/^0+[0-9]/g)) {
            e.target.value = '0'
        } else {
            e.target.value = value.match(reg).join('');
        } 
    }

    return (
        <input
            value={props.inputValue}
            maxLength='10'
            onChange={(e) => {
                checkInputData(e);
                props.onChangeInput(props.numberField, e.target.value)
            }}
            
            ></input>
    )
}

export default InputCurrency;