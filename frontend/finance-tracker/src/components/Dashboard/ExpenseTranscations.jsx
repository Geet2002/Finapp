import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../cards/TransactionInfoCard'
import moment from 'moment'

const ExpenseTranscations = ({transactions, onSeeMore}) => {
  return (
    <div className='card'>
        <div className='flex items-center justify-between '>
            <h5 className='text-lg'>Expenses</h5>

            <button className='card-btn' onClick={onSeeMore}>
                See All <LuArrowRight className='text-base' />
            </button>
        </div>

        <div className='mt-6'>
            {transactions?.slice(0,5)?.map((expense) => (
                <TransactionInfoCard
                    key={expense._id}
                    icon={expense.icon}
                    title={expense.category}
                    amount={expense.amount}
                    date={moment(expense.date).format("Do MMM YYYY")}
                    type="expense"
                    hideDeleteBtn
                />
            ))}
        </div>
    </div>
  )
}

export default ExpenseTranscations