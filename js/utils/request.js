import { baseURL } from './config'
import qs from 'qs'

export default function request (options) {
// options={
//   url: broadcastList,
//   method: 'get',
//   data: params,
// }
  let myRequest;
  const { url,method,data,headers } = options;
  switch (method.toLowerCase()) {
    case 'get': myRequest=new Request(baseURL+url+'?'+qs.stringify(data),{
      headers:headers
    });
      break;
    case 'post':myRequest=new Request(baseURL+url+'?'+qs.stringify(data),{
      method:'POST',
      headers:headers,
      body:data
    });
      break;
    case 'delete':myRequest=new Request(baseURL+url+'?'+qs.stringify(data),{
      method:'DELETE',
      headers:headers
    });
      break;
    case 'put':myRequest=new Request(baseURL+url+'?'+qs.stringify(data),{
      method:'PUT',
      headers:headers
    });
      break;
    case 'patch':myRequest=new Request(baseURL+url+'?'+qs.stringify(data),{
      method:'patch',
      headers:headers
    });
      break;
    default:myRequest=new Request(baseURL+url);
  }
  return fetch(myRequest).then((response) => {
    if(response.ok){
      return JSON.parse(response._bodyInit);
    }else {
      let error=new Error(response.statusText);
      error.response=response;
      throw error;
    }
  }).catch((error) => {
    throw error;
  })
}
