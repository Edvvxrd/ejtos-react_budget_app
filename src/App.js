import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}        
                        <div className='col-3'>
                            <Budget />
                        </div>
                        
                        {/* Add Remaining component here under */}        
                        <div className='col-3'>
                            <Remaining />
                        </div>
                        
                        {/* Add ExpenseTotal component here under */}        
                        <div className='col-3'>
                        <ExpenseTotal />
                        </div>
                        
                        <div className='col-3'>
                            <select>
                                <option selected></option>
                            </select>
                        </div>
                        {/* Add ExpenseList component here under */}         
                        <ExpenseList />
                        {/* Add ExpenseItem component here under */}        
                        <ExpenseItem />
                        {/* Add AllocationForm component here under */}        
                        <AllocationForm />
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
