import React from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const[theme, setTheme] = React.useState('light');

  return (
    <div className='min-h-screen bg-white'>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
