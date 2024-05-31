import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Grid from "./components/grid/Grid"

function App() {

  return (
    <div className='app-container'>
      <Grid numberOfCard={9} />
      {/* <Card player='o' /> */}
    </div>
  )
}

export default App
