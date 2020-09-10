import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from './utils/asyncComponent'

const Login = asyncComponent(() => import('./pages/login/login'))
const Register = asyncComponent(() => import('./pages/register/register'))
const Index = asyncComponent(() => import('./pages/index/index'))
const MyRouter = asyncComponent(() => import('./utils/MyRouter'))
// import Login from './pages/login/login'
// import Register from './pages/register/register'
// import Index from './pages/index/index'
// import MyRouter from './utils/MyRouter';




function App() {
  return (
    <div className="App">
      {/*一级路由 */}
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/logon' component={Register} ></Route>
        <MyRouter path='/index' component={Index} ></MyRouter>
        <Redirect to='/login'></Redirect>

      </Switch>
    </div>
  );
}

export default App;
