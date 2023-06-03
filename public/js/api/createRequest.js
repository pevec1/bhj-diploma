/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {url, data, method, headers, mode, callback}) => {
  let url = options.url
  let data = options.data
  let method = options.method
  let headers = options.headers
  let mode = options.mode
  url = url + encodeURI('?' +  data.mail + '=' + data.password)
  console.log(url)
     fetch(url, {method, headers, mode}).then((response) => {
    console.log( 'Данные, если нет ошибки', response );
    try {
      return { response: response };
    } catch (e) {
    console.log( 'Ошибка, если есть', err );
      return { responseBody: {}, response };
    }
  })
};


// здесь перечислены все возможные параметры для функции
createRequest({
  url: '', // адрес
  data: { // произвольные данные, могут отсутствовать
    email: 'pevec1@yandex.ru',
    password: '123456'
  },
  method: 'GET', // метод запроса
  /*
    Функция, которая сработает после запроса.
    Если в процессе запроса произойдёт ошибка, её объект
    должен быть в параметре err.
    Если в запросе есть данные, они должны быть переданы в response.
  */
  callback: (err, response) => {
    console.log( 'Ошибка, если есть', err );
    console.log( 'Данные, если нет ошибки', response );
  }
});

// здесь перечислены все возможные параметры для функции
createRequest({
  url: 'https://example.com', // адрес
  data: { // произвольные данные, могут отсутствовать
    email: 'ivan@poselok.ru',
    password: 'odinodin'
  },
  method: 'GET', // метод запроса
  headers: {
    'Content-Type': 'application/json'
  },
  mode: 'no-cors',
  /*
    Функция, которая сработает после запроса.
    Если в процессе запроса произойдёт ошибка, её объект
    должен быть в параметре err.
    Если в запросе есть данные, они должны быть переданы в response.
  */
  callback:async(err, response) => {
    console.log( 'Данные, если нет ошибки', response );
    try {
      return { response, responseBody: await response.json() };
    } catch (e) {
    console.log( 'Ошибка, если есть', err );
      return { responseBody: {}, response };
    }
  }
});