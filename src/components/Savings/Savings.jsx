import React from 'react'
import { iconsImgs, personsImgs } from '../../utils/images'
import './Savings.css'
import { savings } from '../../data/data'

export default function Savings() {
  return (
    <div className='subgrid-two-item grid-common grid-c6'>
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Savings</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="plus" />
        </button>
      </div>

      <div className="grid-c6-content">
        <div className="grid-items">
          {
            savings.map(({ id, image, saving_amount, title, date_taken, amount_left }) => {
              const usage = amount_left / saving_amount * 100 + "%";
              return (
                <div className='grid-item' key={id}>
                  <div className="grid-item-top">
                    <div className="grid-item-top-l">
                      <div className="avator img-fit-cover">
                        <img src={image} alt="avator" />
                      </div>
                      <p className='text text-silver-v1'>{title}</p>
                    </div>
                    <div className="grid-item-top-r">
                      <span className='text-silver-v1'>
                        $ {saving_amount}
                      </span>
                    </div>
                  </div>
                  <div className="grid-item-bottom">
                    <div className="grid-item-badges">
                      <span className="grid-item-badge">
                        Date taken {date_taken}
                      </span>
                      <span className="grid-item-badge">
                        Amount left ${amount_left}
                      </span>
                    </div>
                    <div className="grid-item-progress">
                      <div className="grid-item-fill" style={{width: `${usage}`}}></div>
                    </div>
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
