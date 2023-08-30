import React from 'react'
import { iconsImgs } from '../../utils/images'
import { reportData } from '../../data/data'
import './Report.css'

export default function Report() {
    return (
        <div className='grid-one-item grid-common grid-c3'>
            <div className="grid-c-title">
                <h3 className='grid-c-title-text'>Report</h3>
                <button className='grid-c-title-icon'>
                    <img src={iconsImgs.plus} alt="plus" />
                </button>
            </div>
            <div className="grid-c3-content">
                <div className="grid-chart">
                    <div className="chart-vert-value">
                        <span>100</span>
                        <span>75</span>
                        <span>50</span>
                        <span>25</span>
                        <span>0</span>
                    </div>
                    {
                        reportData.map(({ id, month, value1, value2 }) => {
                            return (
                                <div className="grid-chart-bar" key={id}>
                                    <div className="bar-wrapper">
                                        <div className="bar-item1" style={{ height: `${value1 !== null ? value1+"%" : ""}` }}>

                                        </div>
                                        <div className="bar-item2" style={{ height: `${value2 !== null ? value2+"%" : ""}` }}>

                                        </div>
                                    </div>
                                    <span className='grid-hori-value'>{month}</span>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>


    )
}
