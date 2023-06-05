/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = ({ url, data, method, headers, mode, callback }) => {
  let xhr = new XMLHttpRequest()
  let formData = new FormData();
  xhr.responseType = 'json'
  // формат, в котором необходимо выдать результат
    //url = url + encodeURI('?' +  data.email + '=' + data.password)
  if (method === "GET") {
    url += "?";
    for (let param in data) {
        url += param + "=" + data[param] + "&";
        formData.append(param, data[param]);
    }
    url = url.slice(0, -1);
} else {
    for (let param in data) {
        formData.append(param, data[param]);
    }
}
console.log(url)
xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try {
            callback(xhr.response)
         } catch (err) {
            callback(e)
         }
      }
    }
  }

  xhr.ontimeout = function () {
    console.log('Timeout')
  }
  xhr.open(method, url, true)
  //xhr.setRequestHeader('Content-Type', 'application/json');
  if (method === 'POST') {
    xhr.send(formData)
  } else {
    xhr.send()
  }
}

// // здесь перечислены все возможные параметры для функции
// createRequest({
//   url: '', // адрес
//   data: {
//     // произвольные данные, могут отсутствовать
//     email: 'demo@demo',
//     password: 'demo'
//   },
//   method: 'GET', // метод запроса
//   /*
//     Функция, которая сработает после запроса.
//     Если в процессе запроса произойдёт ошибка, её объект
//     должен быть в параметре err.
//     Если в запросе есть данные, они должны быть переданы в response.
//   */
//   callback: (err, response) => {
//     try {
//         console.log('Данные, если нет ошибки', response)
//     } catch (error) {
//       console.log('Ошибка, если есть', err, response)
//     }
//   }
// })
