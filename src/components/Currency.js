import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);

    const changeCurrency = (event) => {
        // setCurrency(event.target.value);
        console.log(currency);
    }

    return (
        <div className='alert alert-success' onChange={changeCurrency}>
            <select className="form-select">
                <option selected>({currency} Pound )</option>
                <option value="$">($ Dollar)</option>
                <option value="€">(€ Euro)</option>
                <option value="₹">(₹ Rupee)</option>
            </select>
        </div>
    );
};

export default Currency;