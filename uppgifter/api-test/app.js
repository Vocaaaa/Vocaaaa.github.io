var axios = required("axios").default;

var options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/find',
  params: {
    q: 'jakobstad',
    cnt: '0',
    mode: 'null',
    lon: '0',
    type: 'link, accurate',
    lat: '0',
    units: 'imperial, metric'
  },
  headers: {
    'x-rapidapi-key': '50ea9d1db9msh912db1705c74bc1p11d2a1jsn801cb88e490b',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});