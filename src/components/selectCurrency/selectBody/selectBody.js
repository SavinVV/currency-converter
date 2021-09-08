import React from 'react';
import SelectItem from '../selectItem';

import './selectBody.css';

const SelectBody = ({listCurrecies, onSelectCurrency, numberField}) => {

    const listSelectItems = [];
    listCurrecies.forEach(currency => {
        listSelectItems.push(
            <SelectItem
                key={currency}
                currency={currency}
                srcImg={`img/${currency}.jpg`}
                onSelectCurrency={() => onSelectCurrency(currency, numberField)}/>
        )   
    });

    return (
        <div className='select__body'>
            {listSelectItems}
        </div>
    )
}

export default SelectBody;