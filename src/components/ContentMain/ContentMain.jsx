import React from 'react'
import './ContentMain.css'
import Cards from '../Cards/Cards'
import Transactions from '../Transactions/Transactions'
import Report from '../Report/Report'

export default function ContentMain() {
  return (
    <div className='main-content-holder'>
        <div className="content-grid-one">
            <Cards />
            <Transactions />
            <Report />
        </div>
    </div>
  )
}
