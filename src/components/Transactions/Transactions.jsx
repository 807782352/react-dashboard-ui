import React from 'react'
import './Transactions.css'
import { transactions } from '../../data/data'
import { iconsImgs } from '../../utils/images'

export default function Transactions() {
  return (
    <div className='grid-one-item grid-common grid-c2'>
        <div className="grid-c-title">
            <h3 className='grid-c-title-text'>All Transactions</h3>
            <button className='grid-c-title-icon'>
                <img src={iconsImgs.plus} alt="plus" />
            </button>
        </div>

        <div className="grid-c2-content">
            <div className="grid-items">
                {
                    transactions.map(({id, name, image, date, amount}) => {
                        return (
                            <div className="grid-item" key={id}>
                                <div className="grid-item-l">
                                    <div className="avator img-fit-cover">
                                        <img src={image} alt="avator" />
                                    </div>
                                    <p className='text'>
                                        {name}
                                        <span>{date}</span>
                                    </p>
                                    
                                </div>
                                <div className="grid-item-r">
                                    <span className='text-scarlet'>
                                        ${amount}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
