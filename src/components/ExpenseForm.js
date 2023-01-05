import React from 'react'
import { MdSend } from 'react-icons/md'
const ExpenseForm = ({charge, amount, handleAmount, handleCharge, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor='charge'>Charge</label>
          <input type='text' className='form-control' id='charge' name='charge' value={charge} placeholder='e.g rent' onChange={handleCharge}/>
        </div>
        <div className="form-group">
          <label htmlFor='amount'>Amount</label>
          <input type='number' className='form-control' id='amount' name='amount' value={amount} placeholder='e.g 100' onChange={handleAmount}/>
        </div>
      </div>
      <button type="submit" className='btn' >Submit<MdSend className='btn-icon'/></button>
    </form>
  )
}

export default ExpenseForm