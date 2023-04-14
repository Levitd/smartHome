import React from 'react';
import { activeLink } from './utils/utils_dom';

const Login = () => {
    activeLink(".nav-link", "login");
    return (
        <div className='login'>
            <h4>
                <div className='alert alert-info'>Войти или зарегистрироваться</div>
            </h4>
        </div>
    );
}

export default Login;