import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getUserAuth } from './actions'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserAuth())

        //   return () => {
        //     second
        //   }
    }, [dispatch])

    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Login />
                    </Route>
                    <Route path='/home'>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
