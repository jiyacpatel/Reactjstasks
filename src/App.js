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
import Addapi from './Addapi';
import Addapi2 from './Addapi2';
import Addapijson from './Addapijson';
import Axiosdemo from './Axiosdemo';
import Newsapi from './Newsapi';
import Searchnewsapi from './Searchnewsapi';
import Reactoastify from './Reactoastify';
import Sweetalert from './Sweetalert';
import SweetAlert2 from './Sweetalert2';

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
            <Route path="/axiosdemo" element={<Axiosdemo />}/>
            <Route path="/newsapi" element={<Newsapi />}/>
            <Route path="/searchnewsapi" element={<Searchnewsapi />}/>
            <Route path="/addapi" element={<Addapi/>}/>
            <Route path="/addapi2" element={<Addapi2 />}/>
            <Route path="/addapijson" element={<Addapijson />}/>
            <Route path="/reactoastify" element={<Reactoastify />}/>
            <Route path="/sweetalert" element={<Sweetalert />}/>
            <Route path="/sweetalert2" element={<SweetAlert2 />}/>
            <Route path="/statedemo" element={<Statedemo/>}></Route>
        </Routes>
        </Router>
      </>
    );
  }
}

export default App;



