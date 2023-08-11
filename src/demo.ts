import axios from 'axios'; 
//import Authenticator from 'openai-token'
import Authenticator from './index'


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

//user-god-region-us-st-oregon-sessid-usxjabl4xewvre7k29-sesstime-1
axios.defaults.proxy = {
  host: 'na.lunaproxy.com',
  port: 12233,
  auth: {
    username: 'user-god-region-us-st-oregon-sessid-usxjabl4xewvre6k29-sesstime-1',
    password: 'god258369',
  },
}

const auth = new Authenticator('EvalineBankert@mail.com', 'a2-@R1_lQnV1R5@k')
//auth.getTest(1)
try{
    await auth.begin()
    const token = await auth.getAccessToken()
    console.log('token ', token);
}catch(e){
    console.log(e )
}
//auth.getTest(2)





// const instance = axios.create({});

// function getTest(type:number){
//     instance.get(type==1?'http://myip.lunaproxy.io':'http://myip.ipip.net')
//     .then(response => {
//         console.log('Response:', response.data);
//         //console.log('Response:', response.headers);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }
// getTest(1);
// getTest(2);