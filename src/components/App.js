import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';

import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import * as auth from '../utils/auth';
import imgSuccessSign from '../images/success.svg';
import imgUnSuccessSign from '../images/unsuccess.svg';

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);
    const [loggedIn, setLoggedIn] = React.useState(null);
    const [userData, setUserData] = React.useState({ _id: '', email: '' });
    const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
    const [isInfoTooltipPopupData, setIsInfoTooltipPopupData] = React.useState({ image: '', text: '' });
    const history = useHistory();

    React.useEffect(() => {
      function handleCheckToken() {
        const token = localStorage.getItem('token');
        if (token) {
          auth.checkToken(token)
            .then(res => {
              const { _id, email } = res.data;
              setUserData({ _id, email });
              setLoggedIn(true);
              history.push('/');
            })
            .catch(err => {
              console.log(err);
            })
        } else {
          setLoggedIn(false);
        }
      }
      handleCheckToken();
      Promise.all([api.getInitialCards(), api.getUserInfo()])
        .then(([cardsData, userData]) => {
          setCards(cardsData);
          setCurrentUser(userData);
        }).catch(err => console.error(err));
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    function handleCardLike(card) {
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      api.changeLikeCardStatus(card._id, isLiked)
      .then(newCard => {
        setCards(state => state.map(c => c._id === card._id ? newCard : c));
      })
      .catch(err => console.error(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(_ => {
        setCards(state => {
          return state.filter(c => c._id !== card._id);
        })
      }).catch(err => console.error(err));
  }


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    setIsInfoTooltipPopupOpen(false);
  }

  function handleUpdateUser(name, about) {
    api.setUserInfo(name, about)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      }).catch(err => console.error(err));
  }


  function handleUpdateAvatar(avatar) {
    api.setUserAvatar(avatar)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      }).catch(err => console.error(err));
  }

  function handleAddPlaceSubmit(name, link) {
    api.addCard(name, link)
      .then(card => {
        closeAllPopups();
        setCards([card, ...cards]);
      }).catch(err => console.error(err));

  }

  function handleRegister({ password, email }) {
    auth.register(password, email)
      .then(res => {
        const { email } = res.data;
        setUserData({ ...userData, email });
        setIsInfoTooltipPopupData({ image: imgSuccessSign, text: 'Вы успешно зарегистрировались!' });
        handleLogin({ password, email });
      })
      .catch(err => {
        console.log(err);
        setIsInfoTooltipPopupData({ image: imgUnSuccessSign, text: 'Что-то пошло не так! Попробуйте ещё раз.' })
      })
      .finally(_ => {
        setIsInfoTooltipPopupOpen(true);
      });
  }

  function handleLogin({ password, email }) {
    auth.authorize(password, email)
      .then(res => {
        const { token } = res;
        localStorage.setItem('token', token);
        setLoggedIn(true);
        history.push('/');
        setUserData({ ...userData, email });
      })
      .catch(err => {
        console.log(err);
      })
  }



  function handleLogOut() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    history.push('/signin');
    setUserData({ _id: '', email: '' });
  }
  if (loggedIn === null) {
    return (
      <Header userData={userData} handleLogOut={handleLogOut} />
    )
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header 
          userData={userData}
          handleLogOut={handleLogOut}
          loggedIn={loggedIn} />
          <BrowserRouter>
          <Switch>
            <ProtectedRoute exact path='/'
              loggedIn={loggedIn}
              component={Main}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />

            <Route path='/signin'>
              <Login handleLogin={handleLogin} />
            </Route>
            <Route path='/signup'>
              <Register handleRegister={handleRegister} />
            </Route>
            <Route>
              {loggedIn ? (
                <Redirect to="/" />
              ) : (
                <Redirect to="/signup" />
              )}
            </Route>
          </Switch>
          </BrowserRouter>
          <Footer />

          {/* Попап редактировать профиль */}
          <EditProfilePopup isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups}
           onUpdateUser={handleUpdateUser} />

          {/* <!-- Попап добавить карточку --> */}
          <AddPlacePopup isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups} 
          onAddPlace={handleAddPlaceSubmit} />

          {/* <!-- Попап изменить аватар --> */}
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar} />


          {/* <!-- Попап полной картинки --> */}
          <ImagePopup onClose={closeAllPopups} card={selectedCard}/>


          <InfoTooltip isOpen={isInfoTooltipPopupOpen} 
          onClose={closeAllPopups}
            image={isInfoTooltipPopupData.image} 
            text={isInfoTooltipPopupData.text} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;