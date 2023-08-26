import React from 'react'
import './Sidebar.css'
import { personsImgs } from '../../utils/images'
import { navigationLinks} from '../../data/data'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className='info-name'>Alice-Doe</span>
      </div>
      <nav className='navigation'>
        <ul className='nav-list'>
          {
            navigationLinks.map(({id, title, image}) => {
              <li className='nav-item' key={id}>
                <NavLink to="#" className="nav-link">
                  <img src={image} alt={title} className='nav-link-icon' />
                  <span className='nav-link-text'>
                    {title}
                  </span>
                </NavLink>
              </li>
            })
          }
        </ul>
      </nav>
    </div>
  )
}
