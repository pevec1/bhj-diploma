/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
  static URL = '/user';
  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static setCurrent(user) {
      localStorage.setItem(user.id, user.name)
      //console.log(localStorage.getItem(user.id));
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent(user) {
    localStorage.removeItem(user.id)
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {
    return {id: user.id, name: localStorage.getItem(user.id)} 
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch(callback) {
    let url=this.URL + '/current' 
    let method = 'GET'
      createRequest({url, data, method, callback})

  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login(data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register(data, callback) {
    let url=this.URL + '/register' 
    let method = 'POST'
      createRequest({url, data, method, callback})

  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout(callback) {

  }
}

const user = {
  id: 1,
  name: 'demo',
};

User.setCurrent( user );
const current = User.current();
//User.unsetCurrent();
console.log( current ); // объект { id: 12, name: 'Vlad' }
// User.login({user:{id:1,name:"demo"}, callback: function( err, response ) {
//   // эта функция работает аналогично callback в createRequest
//   console.log( 'Ошибка, если есть', err );
//   console.log( 'Данные, если нет ошибки', response );
// }});

User.fetch(( err, response ) => {
  try {
    console.log( response.user.id ); // 2
  } catch (e) {
    console.log( 'Ошибка, если есть', err ,e);
  }
});

// производим регистрацию
User.register( data, ( err, response ) => {
  try {
  console.log( response );
  }catch (e) {
  console.log( 'Ошибка, если есть', err ,e);
  }
});