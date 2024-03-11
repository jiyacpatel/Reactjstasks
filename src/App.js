import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import ChangePassword from './ChangePassword';
import ForgotPassword from './ForgotPassword';
import EditProfile from './EditProfile';
import ClickCounter from './ClickCounter';
import Menu from './Menu';
import Color from './Color';
import TodoList from './TodoList';
import TodoListls from './TodoListls';
import Tabledisplay from './Tabledisplay';
import Calc from './Calc';
import Statedemo from './Statedemo';
import Fetchapi from './Fetchapi';

class App extends Component {
  render() {   
    return (
     <>
    
     <Router>
        <Routes>
            <Route path="/" element={<Menu />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/change-password" element={<ChangePassword />} /> 
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/edit-profile" element={<EditProfile/>}/>
            <Route path="/clickcounter" element={<ClickCounter/>}></Route>
            <Route path="/color" element={<Color/>}></Route>
            <Route path="/todolist" element={<TodoList/>}></Route>
            <Route path="/todolistls" element={<TodoListls/>}></Route>
            <Route path="/tabledisplay" element={<Tabledisplay/>}></Route>
            <Route path="/calc" element={<Calc/>}></Route>
            <Route path="/fetchapi" element={<Fetchapi/>}></Route>
            <Route path="/statedemo" element={<Statedemo/>}></Route>

        </Routes>
        </Router>
      </>
    );
  }
}

export default App;



