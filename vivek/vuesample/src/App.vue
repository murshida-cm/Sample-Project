<template>
  <div id="app">
     
<ul>
  <li @click="go1()">Home</li>

  <li @click="go2()">Contact</li>
  <li  @click="go3()">About</li>
</ul>


   
    <router-view style=" bottom: 830px;"></router-view>  

  </div>
</template>

<script>


export default {
  name: 'app',
      
    methods:{ 

        go1(){
             this.$router.push('/main')
        },
         go2(){
             this.$router.push('/contacts')
        },
         go3(){
             this.$router.push('/about')
        },
 
 
} }                                                      
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;


}

</style>
