import React from 'react'
import Sidebar from './ui/Sidebar/Sidebar'
import Content from './ui/Content/Content'

export default function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <Content />
      </div>
    </>
  )
}
