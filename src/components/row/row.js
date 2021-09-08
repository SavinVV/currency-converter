import React from 'react';
import SelectCurrency from '../selectCurrency';
import InputCurrency from '../inputCurrency';

import './row.css'

const Row = (props) => {

    return (
        <div className='row'>
            <SelectCurrency
                onSelectCurrency={props.onSelectCurrency}
                currency={props.currency}
                numberField={props.numberField}/>
            <InputCurrency
                onChangeInput={props.onChangeInput}
                numberField={props.numberField}
                inputValue={props.inputValue}/>
        </div>
    )
}

export default Row;