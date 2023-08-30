import React, { useContext, useEffect, useState } from 'react'
import './Sidebar.css'
import { personsImgs } from '../../utils/images'
import { navigationLinks} from '../../data/data'
import { NavLink } from 'react-router-dom'
import { SidebarContext } from '../../context/sidebarContext'

export default function Sidebar() {

  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const {isSidebarOpen} = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass('')
    }
  }, [isSidebarOpen])

  console.log(isSidebarOpen)

  return (
    <div className={`sidebar ${sidebarClass}`}>
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
              return (
                <li className='nav-item' key={id}>
                <NavLink to={`${title}`} className={`nav-link ${id === activeLinkIdx ? 'active' : null}`}>
                  <img src={image} alt={title} className='nav-link-icon' />
                  <span className='nav-link-text'>
                    {title}
                  </span>
                </NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}
