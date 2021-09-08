import React, {Component} from 'react';
import SelectBody from './selectBody';

import './selectCurrency.css'

export default class SelectCurrency extends Component {

    state = {
        selectBodyVisible: false,
    }

    togleSelectBody = () => {
        this.setState({selectBodyVisible : !this.state.selectBodyVisible});
    }

    renderSelectBody = () => {
        if (this.state.selectBodyVisible) {
            const {currency} = this.props;
            const listCurrecies = [];
            
            ['RUB', 'USD', 'EUR', 'GBP'].forEach(item => {
                if (item !== currency) {
                    listCurrecies.push(item)
                }
            }) 

            return <SelectBody
                        listCurrecies={listCurrecies}
                        onSelectCurrency={this.props.onSelectCurrency}
                        numberField={this.props.numberField}/> 
        }
    }

    render() {
        const {currency} = this.props;
        const srcImg = `img/${currency}.jpg`;
        return (
            <div className='select'
                onClick={this.togleSelectBody}>
                <div className='select__header'>
                    <span className='select__current'>{currency}</span>
                    <img src={srcImg} alt='icon'></img>
                </div>
                {this.renderSelectBody()}
            </div>
        )
    }
}