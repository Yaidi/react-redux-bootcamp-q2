import React, { useState} from 'react'
import loginApi from "../utils/loginApi";
import { useHistory} from "react-router-dom";
import {loginUser} from "../store/user/actions";
import {store} from "../store/config";

export const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const loginForm = 'loginForm';
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        loginApi(userName, password).then((res) => {
            sessionStorage.setItem('user', res)
            store.dispatch(loginUser());
            history.push('/');
        }).catch((err) => {
            setError(err.message);
            setTimeout(() => {
                setError('')
            }, 2000)
        })
    }

  return (
    <form className={'container d-flex flex-column justify-content-center align-items-center'} onSubmit={handleSubmit}>
      <h1 className={'mb-4 mt-4 col-4'}>Welcome to the WizeStore!</h1>
        <div className={'d-flex flex-column col-4'}>
            {error ? <div id={loginForm} className='error is-invalid'>{error}</div> : ''}
            <input className={`mb-2 form-control ${error ? 'is-invalid' : ''}`} type={'name'} placeholder={'Username'} aria-describedby={loginForm} value={userName} onChange={(e) => setUserName(e.target.value)}/>
          <input className={`mb-2 form-control ${error ? 'is-invalid' : ''}`} type={"password"} placeholder={'password'} aria-describedby={loginForm} value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className={'btn'}>Login</button>
        </div>
    </form>
  )
}
