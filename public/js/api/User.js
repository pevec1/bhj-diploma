/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
  static URL = '/user'
  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static setCurrent (user) {
    // localStorage.clear()
    // localStorage.setItem(
    //   'user',
    //   JSON.stringify({ id: user.id, name: user.name })
    // )
    //console.log(localStorage.getItem(user.id));
    localStorage.user = JSON.stringify(user);
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent () {
    localStorage.removeItem('user')
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current () {
    return localStorage.getItem('user')
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch (data, callback) {
    let url= this.URL + '/current'
    let method='GET'
    callback = (err, response) => {
      if (response && response.user) {
        console.log(response)
        this.setCurrent(response.user)
      } else {
        console.log(err, response)
        this.unsetCurrent()
      }
     // console.log(err, response)
    }
return createRequest({
      url,
      data,
      method,
      callback
    })
  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login (data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user)
        }
        callback(err, response)
      }
    })
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register (data, callback) {
    let url = this.URL + '/register'
    let method = 'POST'
    callback = (err, response) => {
      if (response && response.user) {
        console.log(response)
        User.setCurrent(response.user);
      } else{
        console.log(err)
      }

    }
   return createRequest({
      url,
      data,
      method,
      callback
    })
  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout (callback) {}
}

const user = {
  id: 1,
  name: 'demo'
}
const data = {
    name: 'And',
    email: 'pevec1@yandex.ru',
    password: '123456'
  }
  
User.setCurrent(user)
console.log(localStorage.user)
const current = User.current()
//User.unsetCurrent();
console.log(current) // объект { id: 12, name: 'Vlad' }
// User.login({user:{id:1,name:"demo"}, callback: function( err, response ) {
//   // эта функция работает аналогично callback в createRequest
//   console.log( 'Ошибка, если есть', err );
//   console.log( 'Данные, если нет ошибки', response );
// }});

User.fetch((err, response) => {
  console.log(response.user.id) // 2
    console.log(err)
})

// производим регистрацию
User.register( data, ( err, response ) => {
  console.log( response );
});