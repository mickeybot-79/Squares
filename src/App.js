import './App.css'
import Squares from './components/Squares'
import React from 'react'

export default function App() {
  const [state, setState] = React.useState({
    toggle: false,
    count: 0,
    squareID: 0
  })

  function handleToggle(id) {
    setState(prevState => {
      return {
        toggle: !prevState.toggle,
        count: prevState.count + 1,
        squareID: id
      }
    })
  }

  return (
    <div className='container'>
      <Squares
        count={state.count}
        toggle={state.toggle}
        squareID={state.squareID}
        setToggle={handleToggle}
      />
    </div>
  )
}
