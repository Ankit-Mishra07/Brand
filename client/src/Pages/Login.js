import React,{useState, useEffect, useContext} from 'react'
import '../styles/login.css'
import {nanoid} from 'nanoid'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
const Login = () => {

    const [form, setForm] = useState({email : "", password : ""})

    const {handleToken, token, isAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        let {value, name} = e.target

        setForm({
            ...form,
            [name] : value
        })
    }

    const Handlelogin = () => {

        console.log(form)
        if(form.email == "" || form.password == '') {
            swal("Request!","Please fill valid email and password", "warning")
            return
        }

        form["token"] = nanoid(5)
        handleToken(form.token, form.email)


        fetch("http://localhost:5000/users", {
            method : "POST",
            body : JSON.stringify(form),
            headers : {
                "Content-Type" : "application/json"
            }
        }).then(res => res.json()).then(res => {

            swal("Great!", "Logged In successfully","success")
            navigate(-1)
            
        })
            
            

    }

    return (
        <div className='Login_Box'>
            <input type="email" placeholder='Please enter email' name='email' onChange={(e) => handleChange(e)}/>
            <input type="password" placeholder='Please enter password' name='password'onChange={(e) => handleChange(e)}/>
            <button onClick={Handlelogin}>LOGIN</button>
        </div>
    )
}

export default Login
