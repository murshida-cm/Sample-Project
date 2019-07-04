import axios from 'axios';


export default {
getUser() {
  return axios.get(`/api/users`)
                    .then(response => {return  response.data}
                       );
},
saveUserDetail(data){
  return axios.post('/api/saveuser',data).then(response => {return  response})
  .catch(e => {
    this.errors.push(e)
  })
}

}