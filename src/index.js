function requestExample(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.responseText);
      }
    };
    xhr.send();
  });
}

requestExample('https://run.mocky.io/v3/331ff414-d3ca-4881-ad83-2c1f1fa53e14')
  .then(data => console.log(data))
  .catch(err => console.log(err));
