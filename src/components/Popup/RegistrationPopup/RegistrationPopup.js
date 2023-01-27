import React from 'react';
import './RegistrationPopup.css';
import Popup from '../Popup.js';

function RegistrationPopup({ isOpen, onClose, onRegistration, isLoadingRequest }) {

  const [lastname, setLastname] = React.useState('');
  const [lastnameError, setLastnameError] = React.useState({ isShow: false, text: '' });
  const [firstname, setFirstname] = React.useState('');
  const [firstnameError, setFirstnameError] = React.useState({ isShow: false, text: '' });
  const [middlename, setMiddlename] = React.useState('');
  const [middlenameError, setMiddlenameError] = React.useState({ isShow: false, text: '' });
  const [mail, setMail] = React.useState('');
  const [mailError, setMailError] = React.useState({ isShow: false, text: '' });
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState({ isShow: false, text: '' });

  const [isBlockSubmitButton, setIsBlockSubmitButton] = React.useState(true);

  function handleChangeLastname(e) {
    setLastname(e.target.value);
    if (e.target.checkValidity()) {
      setLastnameError({ text: '', isShow: false });
    } else {
      setLastnameError({ text: 'Поле не может быть пустым', isShow: true });
    }
  }

  function handleChangeFirstname(e) {
    setFirstname(e.target.value);
    if (e.target.checkValidity()) {
      setFirstnameError({ text: '', isShow: false });
    } else {
      setFirstnameError({ text: 'Поле не может быть пустым', isShow: true });
    }
  }

  function handleChangeMiddlename(e) {
    setMiddlename(e.target.value);
    if (e.target.checkValidity()) {
      setMiddlenameError({ text: '', isShow: false });
    } else {
      setMiddlenameError({ text: 'Поле не может быть пустым', isShow: true });
    }
  }

  function handleChangeMail(e) {
    setMail(e.target.value);
    if (e.target.checkValidity()) {
      setMailError({ text: '', isShow: false });
    } else {
      setMailError({ text: 'Укажите корректную почту', isShow: true });
    }
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
    if (e.target.checkValidity()) {
      setPasswordError({ text: '', isShow: false });
    } else {
      setPasswordError({ text: 'Слишком коороткий пароль', isShow: true });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegistration({ lastname, firstname, middlename, mail, password });
  }

  React.useEffect(() => {
    if (lastname.length < 1 || lastnameError.isShow || firstname.length < 1 ||  firstnameError.isShow || middlename.length < 1 ||  middlenameError.isShow || mail.length < 1 || mailError.isShow || passwordError.isShow || password.length < 6) {
      setIsBlockSubmitButton(true);
    } else {
      setIsBlockSubmitButton(false);
    }
  // eslint-disable-next-line
  }, [lastname, firstname, middlename, mail, password]);

  React.useEffect(() => {
    setLastname('');
    setLastnameError({ text: '', isShow: false });
    setFirstname('');
    setFirstnameError({ text: '', isShow: false });
    setMiddlename('');
    setMiddlenameError({ text: '', isShow: false });
    setPassword('');
    setPasswordError({ text: '', isShow: false });
    setMail('');
    setMailError({ text: '', isShow: false });
    setIsBlockSubmitButton(true);
  }, [isOpen]);

  return (
    <Popup 
      isOpen={isOpen}
      onClose={onClose}
    >
      <form className='popup__form' name='registration-popup' noValidate onSubmit={handleSubmit}>
        <div className='registration__form'>
          <h3 className='registration__title'>Регистрация</h3>

          <label className='registration__field'>
            <h4 className='registration__input-caption'>Фамилия:</h4>

            <div className='registration__input-field'>
              <input 
              className='registration__input'
              type='text'
              id='lastname'
              value={lastname}
              onChange={handleChangeLastname}
              name='lastname' 
              placeholder='Введите фамилию...' 
              minLength='1'
              autoComplete='off'
              required 
              />
            </div>
            <span className={`registration__input-error ${lastnameError.isShow ? 'registration__input-error_status_show' : ''}`}>
              {lastnameError.text}
            </span>
          </label>

          <label className='registration__field'>
            <h4 className='registration__input-caption'>Имя:</h4>

            <div className='registration__input-field'>
              <input 
              className='registration__input'
              type='text'
              id='firstname'
              value={firstname}
              onChange={handleChangeFirstname}
              name='firstname' 
              placeholder='Введите имя...' 
              minLength='1'
              autoComplete='off'
              required 
              />
            </div>
            <span className={`registration__input-error ${firstnameError.isShow ? 'registration__input-error_status_show' : ''}`}>
              {firstnameError.text}
            </span>
          </label>

          <label className='registration__field'>
            <h4 className='registration__input-caption'>Отчество:</h4>

            <div className='registration__input-field'>
              <input 
              className='registration__input'
              type='text'
              id='middlename'
              value={middlename}
              onChange={handleChangeMiddlename}
              name='middlename' 
              placeholder='Введите отчество...' 
              minLength='1'
              autoComplete='off'
              required 
              />
            </div>
            <span className={`registration__input-error ${middlenameError.isShow ? 'registration__input-error_status_show' : ''}`}>
              {middlenameError.text}
            </span>
          </label>

          <label className='registration__field'>
            <h4 className='registration__input-caption'>Почта</h4>
            <div className='registration__input-field'>
              <input 
              className='registration__input'
              type='email'
              id='mail'
              value={mail}
              onChange={handleChangeMail}
              name='mail' 
              placeholder='Введите вашу почту...'
              autoComplete='off'
              required 
              />

            </div>
            <span className={`registration__input-error ${mailError.isShow ? 'registration__input-error_status_show' : ''}`}>
              {mailError.text}
            </span>
          </label>

          <label className='registration__field'>
            <h4 className='registration__input-caption'>Пароль:</h4>

            <div className='registration__input-field'>
              <input 
              className='registration__input'
              type='text'
              id='password'
              value={password}
              onChange={handleChangePassword}
              name='password' 
              placeholder='Введите пароль...' 
              minLength='6'
              autoComplete='off'
              required 
              />
            </div>
            <span className={`registration__input-error ${passwordError.isShow ? 'registration__input-error_status_show' : ''}`}>
              {passwordError.text}
            </span>
          </label>

          <button className={`registration__btn-save ${isBlockSubmitButton ? 'registration__btn-save_type_block' : ''}`} type='submit'>Регистрация</button>

        </div>
      </form>
    </Popup>
  )
}

export default RegistrationPopup;