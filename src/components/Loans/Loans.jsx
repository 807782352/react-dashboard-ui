import React from 'react'
import { iconsImgs } from '../../utils/images'
import './Loans.css'
import { loans } from '../../data/data'
 
export default function Loans() {

  const percent = (loans.savings * 100 / loans.target).toFixed(1);

  return (
    <div className='subgrid-two-item grid-common grid-c7'>
      <div className="grid-c-title">
        <div className="grid-c-title-text">Loans</div>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="plus" />
        </button>
      </div>
      <div className="grid-c7-content">
        <div className="progress-bar">
          <div className="percent">
            <svg>
              <circle cx='105' cy='105' r='50'></circle>
              <circle cx='105' cy='105' r='50' style={{
                "--percent": `${percent}`
              }}></circle>
            </svg>
            <div className="number">
              <h3>{percent} <span>%</span></h3>
            </div>
          </div>
        </div>
        <ul className="data-list">
          <li className="data-item text-silver-v1">
            <span className="data-item-text">Savings</span>
            <span className="data-item-value">$ {loans.savings}</span>
          </li>
          <li className="data-item text-silver-v1">
            <span className="data-item-text">Target Reached</span>
            <span className="data-item-value">$ {loans.target}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
