import React from 'react'
import Button from './button'

//type rafce and hit enter to get boiler template 
// for a fnction component
const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} 
          text={showAdd ? 'Close' : 'Add'} 
          onClick={onAdd}></Button>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}
export default Header
