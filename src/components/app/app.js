import React, {Component} from 'react';
import Header from '../header';
import Row from '../row';
import './app.css';

import CurrencyService from '../../services/currencyService';

const rates = {
    RUB: 1
};
const currencyService = new CurrencyService();
const res = currencyService.getCurrenciec();
const getRates = async (data) => {
    rates.USD = await data['USD'].Value.toFixed(2);
    rates.EUR = await data['EUR'].Value.toFixed(2);
    rates.GBP = await data['GBP'].Value.toFixed(2);
}
res.then(getRates)


export default class App extends Component {
    state = {
        firstСurrency : 'RUB',
        firstInputFieldValue: '',
        secondСurrency : 'USD',
        secondInputFieldValue: ''
    }

    onSelectCurrency = async (currency, numberField) => {
        await this.setState(() => {
            if (numberField === 'first') {
                return {
                    firstСurrency : currency
                }
            } else {
                return {
                    secondСurrency : currency
                }
            }
        })
        await this.changeInput('first', this.state.firstInputFieldValue);
    }

    changeInput = (inputField, value) => {
        if (value === '') {
            this.setState(() => {
                return {
                    firstInputFieldValue: '',
                    secondInputFieldValue: ''
                }
            })
        }else if (inputField === 'first') {
            const result = (value * rates[this.state.firstСurrency] / rates[this.state.secondСurrency]).toFixed(2);
            this.setState(() => {
                return {
                    firstInputFieldValue: value,
                    secondInputFieldValue: result
                }
            })
        } else {
            const result = (value * rates[this.state.secondСurrency] / rates[this.state.firstСurrency]).toFixed(2);
            this.setState(() => {
                return {
                    firstInputFieldValue: result,
                    secondInputFieldValue: value
                }
            })
        }
    }

    render () {

        return (
            <div className='app'>
                <Header/>
                <Row
                    onSelectCurrency={this.onSelectCurrency}
                    onChangeInput={this.changeInput}
                    currency={this.state.firstСurrency}
                    numberField={'first'}
                    inputValue={this.state.firstInputFieldValue}/>
                <Row
                    onSelectCurrency={this.onSelectCurrency}
                    onChangeInput={this.changeInput}
                    currency={this.state.secondСurrency}
                    numberField={'second'}
                    inputValue={this.state.secondInputFieldValue}/>
            </div>
        )
    }
}