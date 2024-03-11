import{Link} from "react-router-dom";
function Menu(){
    
    return(
        <>
        <div id="menu-wrapper">
    <div id="menu">
      <ul>
        <li><Link to='./clickcounter'>ClickCounter</Link></li>
        <li><Link to='./color'>Color</Link></li>
        <li ><Link to='/signup'>SignUp</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/todolist'>ToDoList</Link></li>
        <li><Link to='/todolistls'>ToDowithStorage</Link></li>
        <li><Link to='/tabledisplay'>FormDataInTable</Link></li>
        <li><Link to='/calc'>Calc</Link></li>
        <li><Link to='/fetchapi'>Fetchapi</Link></li>
        <li><Link to='/axiosdemo'>Axiosdemo</Link></li>
        <li><Link to='/newsapi'>Newsapi</Link></li>
        <li><Link to='/searchnewsapi'>Searchnewsapi</Link></li>
        <li><Link to='/addapi'>Addapi</Link></li>
        <li><Link to='/addapi2'>Addapi2</Link></li>
        <li><Link to='/addapijson'>Addapijson</Link></li>
        <li><Link to='/statedemo'>Statedemo</Link></li>        
      </ul>
    </div>
   </div>  

    </> 
    )
}
export default Menu;

