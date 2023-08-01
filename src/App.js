import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import Currency from './components/Currency';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>  
                        <div className='col-3'>
                            <Budget />
                        </div>
                           
                        <div className='col-3'>
                            <Remaining />
                        </div>

                        <div className='col-3'>
                            <ExpenseTotal />
                        </div>
                        
                        <div className='col-3'>
                            <Currency />
                        </div>
                        <h2 className='mt-3'>Allocation</h2>
                        <ExpenseList />
                        <h2 className='mt-3'>Change Allocation</h2>
                        <AllocationForm />
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
