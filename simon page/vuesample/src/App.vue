<template>
  <div id="app">
   
    <div class="square">
  <ul>
  <li @click="gohome()">Home</li>

  <li @click="gocontacts()">Contact</li>
  <li @click="goabout()">About</li>
</ul>


<img class="img" src="./logo.png">


    </div>
   <router-view> </router-view>
  </div>
</template>

<script>


export default {

  methods:{
    gohome()
    {
       this.$router.push('/')
    },
  //    gocontacts()
  //   {
  //      this.$router.push('')
  //   },
  
  //  goabout()
  //   {
  //      this.$router.push('')
  //   },
  

  
  
  
  }
  


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
  position:relative;
  bottom:50px;
}

</style>
