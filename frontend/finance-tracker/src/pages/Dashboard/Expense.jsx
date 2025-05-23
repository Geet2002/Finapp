import React from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'

const Expense = () => {
  useUserAuth();

  const [expenseData, setExpenseData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openDeleteAlert, setopenDeleteAlert] = useState({
      show: false,
      data: null,
    });
    const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);
  return (
    <DashboardLayout activeMenu = "Expense">
      <div className='my-5 mx-auto'></div>
    </DashboardLayout>
  )
}

export default Expense