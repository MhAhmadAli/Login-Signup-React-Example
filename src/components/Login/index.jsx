import React from 'react';

function Login() {
  return (
    <div className='login'>
      <form className='login-form'>
        <div className='form-element'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' placeholder='usuario@' />
        </div>
        <div className='form-element'>
          <label htmlFor='password'>Senha</label>
          <input type='password' name='password' id='password' placeholder='• • • • • • •' />
        </div>
        <div className='form-element'>
          <label htmlFor='password'>Confirmar Senha</label>
          <input type='password' name='password' id='password' placeholder='• • • • • • •' />
        </div>
        <div className='form-element'>
          <button className='form-button' type='submit'>Registrar</button>
        </div>
      </form>
    </div>
  )
}

export default Login