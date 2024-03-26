import React from "react";
import { Link } from 'react-router-dom';
import './Formtask.css';

class Formtask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            dob: '',
            password: '',
            confirmpassword: '',
            arr: [],
            editidx: '',
            nameError: '',
            passwordMatchError: '',
            fieldErrors: {
                firstname: '',
                lastname: '',
                email: '',
                dob: '',
                password: '',
                confirmpassword: ''
            }
        };
    }

    componentDidMount() {
        const formArray = localStorage.getItem('formArray');
        if (formArray) {
            this.setState({ arr: JSON.parse(formArray) });
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        const{password, confirmpassword} = this.state;
        const fieldErrors = { ...this.state.fieldErrors };
        if (value.trim() === '') {
            fieldErrors[name] = ` Please enter ${name}`;
        } else {
            fieldErrors[name] = '';
        }
        this.setState({ [name]: value, fieldErrors });

        if(name === 'confirmpassword'){
            this.setState({ [name]: value });
            if(password !== value){
                this.setState({ passwordMatchError: 'Passwords do not match' });
            }
            else{
                this.setState({ passwordMatchError: '' });
            }                        
        }
        else if(name === 'password' && confirmpassword!== '')
        {
            this.setState({ [name]: value });
            if(confirmpassword !== value){
                this.setState({ passwordMatchError: 'Passwords do not match' })
            } 
            else{
                this.setState({ passwordMatchError: '' });
            }
        }
        else if (name === 'dob') {
            const currentDate = new Date();
            const selectedDate = new Date(value);
            if (selectedDate > currentDate) {
                fieldErrors[name] = 'Please select valid birth date';
            } else {
                fieldErrors[name] = '';
            }
            this.setState({ [name]: value, fieldErrors });
        } 
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.editidx !== '') {
            this.editdata2();
        } else {
            this.adddata();
        }
    };

    adddata = () => {
        const { firstname, lastname, email, dob, password, confirmpassword } = this.state;
        const fieldErrors = { ...this.state.fieldErrors };
        let hasErrors = false;
        if (firstname.trim() === '') {
            fieldErrors.firstname = 'Please enter Firstname';
            hasErrors = true;
        }
        if (lastname.trim() === '') {
            fieldErrors.lastname = 'Please enter Lastname';
            hasErrors = true;
        }
        if (email.trim() === '') {
            fieldErrors.email = 'Please enter email';
            hasErrors = true;
        }
        if (dob.trim() === '') {
            fieldErrors.dob = 'Please enter Date of Birth';
            hasErrors = true;
        }
        if (password.trim() === '') {
            fieldErrors.password = 'Please enter Password';
            hasErrors = true;
        }
        if (confirmpassword.trim() === '') {
            fieldErrors.confirmpassword = 'Please Confirm Password';
            hasErrors = true;
        }
        if (password !== confirmpassword) {
            this.setState({ passwordMatchError: 'Passwords do not match' });
            hasErrors = true;
        }
        if (hasErrors) {
            this.setState({ fieldErrors });
            return;
        }
        const newdata = { firstname, lastname, email, dob, password };
        const newarr = [...this.state.arr, newdata];
        this.setState({ arr: newarr, firstname: '', lastname: '', email: '', dob: '', password: '', confirmpassword: '' });
        localStorage.setItem('formArray', JSON.stringify(newarr));
    };

    deletedata = (index) => {
        const newArr = [...this.state.arr];
        newArr.splice(index, 1);
        this.setState({ arr: newArr });
        localStorage.setItem('formArray', JSON.stringify(newArr));
    };

    editdata = (index) => {
        this.setState({
            firstname: this.state.arr[index].firstname,
            lastname: this.state.arr[index].lastname,
            email: this.state.arr[index].email,
            dob: this.state.arr[index].dob,
            password: this.state.arr[index].password,
            editidx: index
        });
    };

    editdata2 = () => {
        const { firstname, lastname, email, dob, password, confirmpassword, editidx } = this.state;
        const fieldErrors = { ...this.state.fieldErrors };
        let hasErrors = false;
        if (firstname.trim() === '') {
            fieldErrors.firstname = 'Please enter Firstname';
            hasErrors = true;
        }
        if (lastname.trim() === '') {
            fieldErrors.lastname = 'Please enter Lastname';
            hasErrors = true;
        }
        if (email.trim() === '') {
            fieldErrors.email = 'Please enter email';
            hasErrors = true;
        }
        if (dob.trim() === '') {
            fieldErrors.dob = 'Please enter Date of Birth';
            hasErrors = true;
        }
        if (password.trim() === '') {
            fieldErrors.password = 'Please enter Password';
            hasErrors = true;
        }
        if (confirmpassword.trim() === '') {
            fieldErrors.confirmpassword = 'Please Confirm Password';
            hasErrors = true;
        }
        if (password !== confirmpassword) {
            this.setState({ passwordMatchError: 'Passwords do not match' });
            hasErrors = true;
        }
        if (hasErrors) {
            this.setState({ fieldErrors });
            return;
        }
        const newarr = [...this.state.arr];
        newarr[editidx] = { firstname, lastname, email, dob, password };
        this.setState({ arr: newarr, firstname: '', lastname: '', email: '', dob: '', password: '', confirmpassword: '', editidx: '' });
        localStorage.setItem('formArray', JSON.stringify(newarr));
    };


    handleSelectChange = (e) => {
        this.setState({ddm: e.target.value})
    }

    render() {
        const { firstname, lastname, email, dob, password, confirmpassword, passwordMatchError, fieldErrors} = this.state;
        return (
            <div className="container">
                <div>
                <form onSubmit={this.handleSubmit} className="form-container">
                    <table>
                        <tr>
                            <td><label><b>Firstname</b></label></td>
                            <td><input type="text" name="firstname" value={firstname} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{fieldErrors.firstname && <span style={{ color: 'red' }}>{fieldErrors.firstname}</span>}</td>
                        </tr>
                        <tr>
                            <td><label><b>Lastname</b></label></td>
                            <td> <input type="text" name="lastname" value={lastname} onChange={this.handleChange} /></td>                           
                        </tr>
                        <tr>
                            <td></td>
                            <td>{fieldErrors.lastname && <span style={{ color: 'red' }}>{fieldErrors.lastname}</span>}</td>
                        </tr>
                        <tr>
                            <td><label><b>Email</b></label></td>
                            <td><input type="email" name="email" value={email} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{fieldErrors.email && <span style={{ color: 'red' }}>{fieldErrors.email}</span>}</td>
                        </tr>
                        <tr>
                            <td><label><b>Date of Birth</b></label></td>
                            <td><input type="date" name="dob" value={dob} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{fieldErrors.dob && <span style={{ color: 'red' }}>{fieldErrors.dob}</span>}</td>
                        </tr>
                        <tr>
                            <td><label><b>Password</b></label></td>
                            <td><input type="password" name="password" value={password} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{fieldErrors.password && <span style={{ color: 'red' }}>{fieldErrors.password}</span>}</td>
                        </tr>
                        <tr>
                            <td><label><b>Confirm Password</b></label></td>
                            <td><input type="password" name="confirmpassword" value={confirmpassword} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{fieldErrors.confirmpassword && <span style={{ color: 'red' }}>{fieldErrors.confirmpassword}</span>}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{passwordMatchError && <p style={{ color: 'red' }}>{passwordMatchError}</p>}</td>
                        </tr>
                    </table>
                    
                    {this.state.editidx !== '' ? (<button class="formbutton">Edit data</button>) : (<button class="formbutton">Add data</button>)}
                    
                    
                </form>
                </div>
                
                <br></br>
                <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.arr.map((v, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{v.firstname}</td>
                                    <td>{v.lastname}</td>
                                    <td>{v.email}</td>
                                    <td>{v.dob}</td>
                                    <td><button class="formbutton" onClick={() => this.editdata(i)}>Edit</button></td>
                                    <td><button class="formbutton" onClick={() => this.deletedata(i)}>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                </div>
                
                <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
            </div>
        );
    }
}

export default Formtask;
