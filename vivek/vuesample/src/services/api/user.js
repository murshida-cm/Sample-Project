import axios from 'axios';


export default {
  getUser(id1) {

    return axios.get(`/api/users/`+id1)
                      .then(response => {return  response.data}
                         );
  },
  getUser0() {

    return axios.get(`/api/list`)
                      .then(response => {return  response.data}
                         );
  },

saveUserDetail(data){
  return axios.post('/api/saveuser',data).then(response => {return  response})
  .catch(e => {
    this.errors.push(e)
  })
}

} // ,{
  //   params:{
  //     ac:1,
  //     hj:5,
  //     fg:4


  //   }}