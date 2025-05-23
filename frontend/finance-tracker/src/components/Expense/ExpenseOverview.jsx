import React, { useEffect, useState } from 'react'
import { prepareExpenseLineChartData } from '../../utils/helper';
import { LuPlus } from 'react-icons/lu';
import CustonLineChart from '../Charts/CustonLineChart';

const ExpenseOverview = ({transactions, onExpenseIncome}) => {
  const [chartData, setChartData] = useState([])
  
  useEffect(() => {
    const result = prepareExpenseLineChartData(transactions)
    setChartData(result);

        return () => {};
    }, [transactions]);
    return (
    <div className='card'>
        <div className='flex justify-between items-center'>
            <div className=''>
                <h5 className='text-lg'>Expense Overview</h5>
                <p className='text-xs text-gray-400 mt-0.5'>
                    Track your expense trends over time and gain insights into your spending habits.
                </p>
            </div>

            <button className='add-btn' onClick={onExpenseIncome}>
                <LuPlus className='text-lg' />
                Add Expense
            </button>
        </div>

        <div className='mt-10'>
            <CustonLineChart data = {chartData} />
        </div>
    </div>
  )
}

export default ExpenseOverview