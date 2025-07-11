import moment from 'moment'
import React from 'react'
import TransactionInfoCard from '../cards/TransactionInfoCard'
import { LuDownload } from 'react-icons/lu'

const ExpenseList = ({transactions, onDelete, onDownload}) => {
  return (
    <div className='card'>
        <div className='flex justify-between items-center'>
            <h5 className='text-lg'>All Expenses</h5>

            <button className='card-btn' onClick={onDownload}>
                <LuDownload className='text-base' />Dowload
            </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
            {transactions?.map((expense) => (
                <TransactionInfoCard
                    key={expense._id}
                    title={expense.category}
                    icon={expense.icon}
                    date={moment(expense.date).format("DD MMM YYYY")}
                    amount={expense.amount}
                    type="expense"
                    onDelete={() => onDelete(expense._id)}    
                />
            ))}
        </div>
    </div>
  )
}

export default ExpenseList