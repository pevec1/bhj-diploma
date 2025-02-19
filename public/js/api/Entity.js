/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
  constructor () {}
  static URL = ''
  static get (id = '', callback) {
    console.log(id)
   return createRequest({
      url: this.URL + '/' + id,
      data,
      method: 'GET',
      callback: callback
    })
  }

  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list (data, callback) {
    let url = this.URL
    let method = 'GET'
    return createRequest({ url, data, method, callback })
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create (data, callback) {
    let url = this.URL
    let method = 'PUT'
    return createRequest({ url, data, method, callback })
    //  console.log( data );
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove (data, callback) {
    let url = this.URL
    let method = 'DELETE'
    return createRequest({ url, data, method, callback })
    console.log(data)
  }
}

// console.log(Entity.URL)
// const data = {
//   email: 'demo@demo',
//   password: 'demo'
// }

// Entity.list(data, function (err, response) {
//   // эта функция работает аналогично callback в createRequest
//   try {
//     console.log('Данные, если нет ошибки', response)
//   } catch (error) {
//     console.log('Ошибка, если есть', err, response)
//   }
// })
// Entity.create( data, function( err, response ) {
//   // эта функция работает аналогично callback в createRequest
//   console.log( 'Ошибка, если есть', err );
//   console.log( 'Данные, если нет ошибки', response );
// });
// Entity.remove( data, function( err, response ) {
//   // эта функция работает аналогично callback в createRequest
//   console.log( 'Ошибка, если есть', err );
//   console.log( 'Данные, если нет ошибки', response );
// });
