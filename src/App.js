import React from "react";
import { DataProvider } from "./components/DataProvider"
import LoginScreen from "screens/LoginScreen";
import HomeScreen from "screens/HomeScreens/HomeScreen";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import SignupScreen from "screens/SignupScreen";


function App() {
  return (
    // <DataProvider>
    //   <div className='App'>
    //     <h1>To do List</h1>
    //     <FormInput />
    //     <List />
    //     <Footer />
    //   </div>
    // </DataProvider>
    <Router>
      <div className='App'>

        <Switch>
          <Route exact path='/'>
            <LoginScreen />
          </Route>
          <Route path='/my-task'>
            <DataProvider>
              <HomeScreen />
            </DataProvider>
          </Route>
          <Route path='/sign-up'>
            <SignupScreen />
          </Route>
          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>
      </div>
    </Router>


  )
}

export default App;
