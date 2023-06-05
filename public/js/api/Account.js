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
    console.log(id)
      createRequest({
        url: this.URL + '/' + id,
        data,
        method : 'GET', 
        callback: ( err, response ) =>{
          console.log(response)
          // ... получили ответ
          callback(err, response)
         }
})
  }
}

Entity.get( 1, ( err, response ) =>{
  // ... получили ответ
  callback(err, response)
});