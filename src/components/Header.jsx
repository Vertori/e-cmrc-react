import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  return (
    <div>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)}>open/close sidebar</div>
    </div>
  )
}

export default Header