import{Link} from "react-router-dom";
function Menu(){
    
    return(
    <div id="menu">
      <ul>
        <li><Link to='./clickcounter'>ClickCounter</Link></li>
        <li ><Link to='/signup'>SignUp</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/todolist'>ToDoList</Link></li>
        <li><Link to='/todolistls'>ToDowithStorage</Link></li>
        <li><Link to='/tabledisplay'>FormDataInTable</Link></li>
        <li><Link to='/newsapi'>Newsapi</Link></li>
        <li><Link to='/searchnewsapi'>Searchnewsapi</Link></li>
        <li><Link to='/formtask'>Formtable</Link></li> 
        <li><Link to='/randomuser'>RandomuserAPI</Link></li>
        <li><Link to='/quiz'>QuizAPI</Link></li>  
        <li><Link to='/reqres1'>Reqres1</Link></li>  
        <li><Link to='/reqres2'>Reqres2</Link></li>  
        <li><Link to='/reqrescreate'>ReqresCreate</Link></li>  
        <li><Link to='/reqresupdate'>ReqresUpdate</Link></li>  
        <li><Link to='/reqresdelete'>ReqresDelete</Link></li>  
        <li><Link to='/fetchapi'>Fetchapi</Link></li>
        <li><Link to='/axiosdemo'>Axiosdemo</Link></li>
        <li><Link to='/reactoastify'>Reactoastify</Link></li> 
        <li><Link to='/sweetalert'>Sweetalert</Link></li>        
        <li><Link to='/sweetalert2'>Sweetalert2</Link></li>        
        <li><Link to='/contextapilang'>Contextapilanguage</Link></li>        
        <li><Link to='/propsdrilling1'>Propsdrilling1</Link></li>   
        <li><Link to='/propsdrilling2'>Propsdrilling2</Link></li>   
        <li><Link to='/propsdrilling3'>Propsdrilling3</Link></li>   
        <li><Link to='/propsdrilling4'>Propsdrilling4</Link></li>   
        <li><Link to='/addapi'>Addapi</Link></li>
        <li><Link to='/addapi2'>Addapi2</Link></li>
        <li><Link to='/addapijson'>Addapijson</Link></li>     
        <li><Link to='/calc'>Calc</Link></li>
        <li><Link to='/statedemo'>Statedemo</Link></li> 
        <li><Link to='./color'>Color</Link></li>
        <li><Link to='./lazyloading'>Lazyloading</Link></li>
      </ul>
    </div>   
    )
}
export default Menu;

