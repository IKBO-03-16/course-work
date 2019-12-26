let url = 'https://en.wikipedia.org/w/api.php?origin=*';

const params = {
  action: 'query',
  format: 'json',
  generator: 'random',
  prop: 'info',
  grnlimit: '5',
  inprop: 'url'
};

Object.keys(params).forEach(key => {
  url += '&' + key + '=' + params[key];
});

const api = () =>
  fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.log(error);
    });

export default api;
