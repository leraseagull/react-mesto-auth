import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('Жак-Ив Кусто');
  const [description, setDescripton] = React.useState('Исследователь');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescripton(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(_ => {
    setName(currentUser.name);
    setDescripton(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm title="Редактировать&nbsp;профиль"
     buttonText='Сохранить' 
     name='edit-profile' 
     isOpen={isOpen}
      onClose={onClose} 
      onSubmit={handleSubmit}>
      <label className="popup__field">
        <input className="popup__input" 
        type="text" placeholder="Имя" 
        name="name" 
        minLength="2" maxLength="40"
          onChange={handleChangeName} value={name || ""} />
        <span className="popup__input-error"></span>
      </label>
      <label className="popup__field">
        <input className="popup__input" type="text"
         placeholder="Работа" name="about"
          minLength="2" maxLength="200"
          onChange={handleChangeDescription} 
          value={description || ""} />
        <span className="popup__input-error"></span>
      </label>
    </PopupWithForm>
  )

}

export default EditProfilePopup;