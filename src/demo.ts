import axios from 'axios'; 

/// curl  "https://gapi.lunaproxy.com/index/index/save_allowlist?neek=1055036&appkey=9ab58d61b112d310ef13cc2773e993c2&white=111.165.22.61"
// curl  "https://tq.lunaproxy.com/getflowip?neek=1055036&num=10&type=2&sep=1&regions=us&ip_si=1&level=1&sb="
// curl "https://tq.lunaproxy.com/getflowip?neek=1055036&num=10&type=1&sep=1&regions=us&ip_si=1&level=1&sb="
/**
43.130.10.70:20234
43.130.10.70:20237
43.130.10.70:20314
43.130.10.70:20046
43.130.10.70:20264
43.130.10.70:20151
43.130.10.70:20485
43.130.10.70:20400
43.130.10.70:20269
43.130.10.70:20127 */


axios.defaults.proxy = {
  host: '43.130.10.70',
  port: 20234,
}


const instance = axios.create({
// proxy:{
//     host: '43.130.10.70',
//    port: 20269
// }
});
instance.get('http://myip.ipip.net/')
  .then(response => {
    console.log('Response:', response.data);
    console.log('Response:', response.headers);
  })
  .catch(error => {
    console.error('Error:', error);
  });