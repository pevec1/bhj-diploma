/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {

  static URL = '/account';
  /**
   * Получает информацию о счёте
   * */
  static get(id = '', callback){
    let url = this.URL + '/' + id
    console.log(url)
    let method = 'GET'
      createRequest({url, data, method, callback})
  }
}

Entity.get( 1, function ( err, response ) {
  // ... получили ответ
  try {
    console.log( 'Данные, если нет ошибки', response );
  } catch(e) {
    console.log( 'Ошибка, если есть', err, e );
  }
});