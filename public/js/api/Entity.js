/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
  constructor(url){
    this.url = url
  }
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list(data, callback){
    let url = this.url
    createRequest({url, data, callback})
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {

  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback ) {

  }
}
let data = {
  mail: 'ivan@biz.pro',
  password: 'odinodin'
};


let ent = new Entity('')
console.log( ent.url ); // ''
ent.list(data, (function(err, response) {
  console.log( 'Данные, если нет ошибки', response );
  try {
    return { response, responseBody: response.json() };
  } catch (e) {
  console.log( 'Ошибка, если есть', err );
    return { responseBody: {}, response };
  }


})

);