import React from 'react'
import Header from '../components/header/Header'
import Expenses from '../components/expenseList/Expenses'

function Home() {
  return (
    <div>
        <div className="container">
        <Header></Header>
        <Expenses></Expenses>
        </div>
    </div>
  )
}

export default Home
