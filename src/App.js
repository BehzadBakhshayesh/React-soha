import React from 'react'
import { Route, Switch } from 'react-router'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import SearchPage from './Pages/SearchPage/SearchPage'
import './Apps.scss'


const App = () => {

  return (
    <>
      <main className="App">
        <header>
          <Header />
        </header>
        <section>
          <div className='contents'>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/search' component={SearchPage} />
            </Switch>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
