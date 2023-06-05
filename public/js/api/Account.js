/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  static URL = '/account'
  /**
   * Получает информацию о счёте
   * */
}

// Entity.get(1, (err, response) => {
//   // ... получили ответ
// })
