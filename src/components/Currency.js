import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }

    return (
        <div className='alert alert-success' onChange={changeCurrency}>
            <select className="form-select">
                <option value="£" selected>({currency} Pound )</option>
                <option value="$">($ Dollar)</option>
                <option value="€">(€ Euro)</option>
                <option value="₹">(₹ Rupee)</option>
            </select>
        </div>
    );
};

export default Currency;