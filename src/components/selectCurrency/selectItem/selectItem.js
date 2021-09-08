import React from 'react';

import './selectItem.css';

const SelectItem = ({onSelectCurrency, currency, srcImg}) => {
    return (
        <div className='select__item'
            onClick={() => onSelectCurrency(currency)}>
            <span>{currency}</span>
            <img src={srcImg} alt='icon'></img>
        </div>
    )
}

export default SelectItem;