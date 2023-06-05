/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = ({url, data, method, headers, mode, callback}) => {
  //url = url + encodeURI('/?' +  data.email + '=' + data.password)
  console.log(url)
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json'; 
  // формат, в котором необходимо выдать результат
  xhr.onreadystatechange = function(e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
          if(xhr.response.success===true){
        try{
            callback(xhr.response)
        } catch(e)
        {
          callback('error: ' + e)       
        }
          }
      } else if(xhr.response.success===false){
        callback('error: ' + xhr.status)
      }
    }
  }
  xhr.ontimeout = function () {
   console.log('Timeout')
  }
  xhr.open(method, url, true, data.email, data.password)
  //xhr.setRequestHeader('Content-Type', 'application/json');
  const formData = new FormData;
  xhr.send(formData);
};

// // здесь перечислены все возможные параметры для функции
// createRequest({
//   url: '', // адрес
//   data: { // произвольные данные, могут отсутствовать
//     email: 'pevec1@yandex.ru',
//     password: '123456'
//   },
//   method: 'GET', // метод запроса
//   /*
//     Функция, которая сработает после запроса.
//     Если в процессе запроса произойдёт ошибка, её объект
//     должен быть в параметре err.
//     Если в запросе есть данные, они должны быть переданы в response.
//   */  
//   callback: (err, response) => {
//     console.log( 'Ошибка, если есть', err );
//     console.log( 'Данные, если нет ошибки', response );
// }
// });
