import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [inputBudget, setInputBudget] = useState(budget);

    const updateBudget = (event) => {
        if(event.target.value > 20000) {
            alert(`Budget should not exceed more than ${currency}20,000`);
            return;
        } else if ( event.target.value < totalExpenses ) {
            alert(`You cannot reduce the budget value lower than the spending.`);
            return;
        }
        setInputBudget(event.target.value);
    };

    return (
        <div className='alert alert-secondary input-group align-items-center'>
            Budget:
            <div className='input-group-prepend'>
                <label className='input-group-text'>{currency}</label>
            </div>
            <input 
                type='number' 
                className='form-control'
                step='10'
                max='20000'
                value={ inputBudget } 
                onChange={ updateBudget }>
            </input>
        </div>
    );
};
export default Budget;