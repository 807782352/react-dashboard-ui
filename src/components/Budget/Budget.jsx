import React from 'react'
import { iconsImgs } from '../../utils/images'
import './Budget.css'
import { budget } from '../../data/data'

export default function Budget() {
  return (
    <div>
      <div className="grid-two-item grid-common grid-c4">
        <div className="grid-c-title">
          <div className="grid-c-title-text">Budget</div>
          <button className='grid-c-title-icon'>
            <img src={iconsImgs.plus} alt="plus" />
          </button>
        </div>
        <div className="grid-c-top text-silver-v1">
          <h2 className="lg-value">Cash</h2>
          <span className="lg-value">$ 100, 000</span>
        </div>
        <div className="grid-c4-content bg-jet">
          <div className='grid-items'>
            {
              budget.map(({ id, title, type, amount }) => {
                return (
                  <div className="grid-item" key={id}>
                    <div className="grid-item-l" >
                      <div className="icon">
                        <img src={iconsImgs.check} alt="check" />
                      </div>
                      <p className='text text-silver-v1'>
                        {title}
                        <span>{type}</span>
                      </p>
                    </div>
                    <div className="grid-item-r">
                      <span className='text-silver-v1'>$ {amount}</span>
                    </div>
                  </div>

                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
