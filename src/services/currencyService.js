
export default class CurrencyService {
    constructor() {
        this._apiBase = 'https://www.cbr-xml-daily.ru/daily_json.js';
    }

    getCurrenciec = async () => {
        const response =  await fetch(this._apiBase);

        if (!response.ok) {
            throw new Error(`Could not fetch ${this._apiBase}` +
              `, received ${response.status}`);
        }

        const data = await response.json();
        const res = data.Valute;
        return res;
    }
}