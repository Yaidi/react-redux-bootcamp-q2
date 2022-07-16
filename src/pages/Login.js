import React, { useState} from 'react'
import loginApi from "../utils/loginApi";
import { useHistory} from "react-router-dom";
import {loginUser} from "../store/user/actions";
import {store} from "../store/config";

export const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(undefined);
    const history = useHistory();

    const handleSubmit = () => {
        loginApi(userName, password).then((res) => {
            sessionStorage.setItem('user', res)
            store.dispatch(loginUser());
            history.push('/');
        }).catch((err) => setError(err))
    }

  return (
    <div className={'container d-flex flex-column justify-content-center align-items-center'}>
      <h1 className={'mb-4 mt-4 col-4'}>Welcome to the WizeStore!</h1>
        <div className={'d-flex flex-column col-4'}>
            {error ? (<div>{error}</div>) : ''}
            <input className={'mb-2'} type={'name'} placeholder={'Username'} value={userName} onChange={(e) => setUserName(e.target.value)}/>
          <input className={'mb-2'} type={"password"} placeholder={'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type={'btn'} className={'btn'} onClick={() => handleSubmit()}>Login</button>
        </div>
    </div>
  )
}
