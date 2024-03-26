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
import Formtask from './Formtask';
import Propsdrilling1 from './Propsdrilling1';
import Propsdrilling2 from './Propsdrilling2';
import Propsdrilling3 from './Propsdrilling3';
import Propsdrilling4 from './Propsdrilling4';
import Randomuser from './Randomuser';
import Quiz from './Quiz';
import Reqres1 from './Reqres1';
import Reqres2 from './Reqres2';

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
            <Route path="/formtask" element={<Formtask/>}/>
            <Route path="/sweetalert" element={<Sweetalert />}/>
            <Route path="/sweetalert2" element={<SweetAlert2 />}/>
            <Route path="/statedemo" element={<Statedemo/>}></Route>
            <Route path="/propsdrilling1" element={<Propsdrilling1/>}></Route>
            <Route path="/propsdrilling2" element={<Propsdrilling2/>}></Route>
            <Route path="/propsdrilling3" element={<Propsdrilling3/>}></Route>
            <Route path="/propsdrilling4" element={<Propsdrilling4/>}></Route>
            <Route path="/randomuser" element={<Randomuser/>}></Route>
            <Route path="/quiz" element={<Quiz/>}></Route>
            <Route path="/reqres1" element={<Reqres1/>}></Route>
            <Route path="/reqres2" element={<Reqres2/>}></Route>
        </Routes>
        </Router>
      </>
    );
  }
}

export default App;



