import React from 'react'
import { iconsImgs } from '../../utils/images'
import './Subscriptions.css'
import { subscriptions } from '../../data/data'

export default function Subscriptions() {
  return (
    <div className='subgrid-two-item grid-common grid-c5' >
      <div className="grid-c-title">
        <h3 className='grid-c-title-text'>Subscriptions</h3>
        <button className='grid-c-title-icon'>
            <img src={iconsImgs.plus} alt="plus" />
        </button>
      </div>
      <div className="grid-c5-content">
        <div className="grid-items">
          {
            subscriptions.map(({id, title, due_date, amount}) => {
              return (
                <div className='grid-item' key={id}>
                  <div className="grid-item-l">
                    <div className="icon">
                      <img src={iconsImgs.alert} alt="alert" />
                    </div>
                    <div className="text text-silver-v1">
                      {title}
                      <span>due {due_date}</span>
                    </div>
                    
                  </div>

                  <div className="grid-item-r">
                    <span className='text-silver-v1'>
                      $ {amount}
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
