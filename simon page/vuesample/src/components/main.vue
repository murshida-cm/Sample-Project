<template>

<div id="app">
    <!-- <div class="square">


<img class="img" src="./logo.png">


    </div> -->




    <div class="box">
    <h1 style="text-align:center;position:relative;top:40px;font-size: 40px;  font-family: Source Sans Pro,sans-serif;letter-spacing:5px;">NAZMIYAL</h1>

    
    
        <div class="row">
            <div class="node1"><p>SELECT PRODUCT</p>
                <select class="s">
                    <option value="volvo">a</option>
                    <option value="saab">b</option>
                    <option value="mercedes">c</option>
                    <option value="audi">d</option>
                </select></div>
            <div class="node"><p>PRODUCT ID</p><input input v-model="product.productid" type="text" ></div>
        </div>

        
        
        <div style="height:150px;width:800px;float:left;margin-top: 50px;margin-left: 20px;position: relative;left:50px;"><p>NAME</p><input input v-model="product.name" type="text" ></div>
                
        <div class="row">
            <div class="node"><p>PRICE</p><input input v-model="product.price" type="text" ></div>
            <div class="node"><p>DATED</p><input input v-model="product.dated" type="text" ></div>
        </div>
        
        
        <div class="row">
            <div class="node"><p>SIZE</p><input input v-model="product.size" type="text" ></div>
            <div class="node"><p>DESCRIPTION</p><input input v-model="product.desc" type="text" ></div>
        </div>
        
        
        <div class="row">
            <div class="node3" v-on:click="Switch()" ><p>1ST DIBS</p></div>
            <div class="node3" v-on:click="Switch()" ><p>ARTSY</p></div>
            <div class="node3" v-on:click="Switch()" ><p>ARTS</p></div>
        </div>

        
        
        <div v-if="show">
            <div class="row">
                <div class="node"><p>STYLE</p><input input v-model="product.style" type="text" ></div>
                <div class="node"><p>ORIGIN</p><input input v-model="product.origin" type="text" ></div>
            </div>
        
        
            <div class="row">
                <div class="node"><p>MATERIAL</p><input input v-model="product.material" type="text" ></div>
                <div class="node"><p>CONDITION</p><input input v-model="product.condition" type="text" ></div>
            </div>
        
        
            <div class="row">
                <div class="node"><p>SERIES REF NUM</p><input input v-model="product.seriesrefno" type="text" ></div>
                <div class="node"><p>REFERENCE NUMBER</p><input input v-model="product.ref" type="text" ></div>
            </div>
        
        
            <div style="height:150px;width:800px;float:left;top: 50px;    position: relative;
            left: 50px;margin-left: 20px;"><p>SELLER LOCATION</p><input input v-model="product.sellerloc" type="text" ></div>
           
            <!-- <router-link to="/sub2"  active-class="active" exact> </router-link> -->
           1<div class="bu"><button class="button" @click= "saveUser()">submit</button></div> 
              <div class="bu"><button class="button" @click= "getUser()">display</button></div> 
               
        </div>       

    
    </div>
    
    
    <sub  :product="product"></sub>


</div>


</template>

<script>

import userApi from './user.js'
import sub from './sub.vue'

          export default{

           data:function(){
               
               return{

                   product:{
               productid:'',
               name:'',
               price:'',
               dated:'',
               size:'',
               desc:'',
               style:'',
               origin:'',
               material:'',
               condition:'',
               seriesrefno:'',
               ref:'',
               sellerloc:'',},
           
           
           show:true,
           
           }},
    methods:{



            getUser(){
                  this.$router.push('/sub2')
    //   console.log("hi")
      
    //     userApi.getUser().then(data => {this.product = data[0];console.log(this.product);})
    //     .catch(error => console.log(error));
      
    },


            saveUser()
            {

                
        console.log(this.product);

          let productdetail=this.product;
          
        
          
          
          userApi.saveUserDetail(productdetail).then(response =>{
        //   console.log(response.data);
        this.product="";
          
          
          });
            },    
               

     
     
     Switch()
     {
     this.show = !this.show;
     }
           
           },
    components:{
               sub,
               },     
               }
    </script>

<style>
.square{
    height: 200px;
    width:100%;



background-color:lightcyan;
}
body{
    background-color:grey;

}
.box{
    margin:0 auto;
height:2000px;
width:1000px;
background-color:white;
position:relative;
top:50px;

}
.img{
    
    top:20px;
    height:100px;
    width:auto;
    left:10px;
}

.node{
    
    height:150px;
    width:400px;
    float:left;
    margin-left:20px;
    position:relative;
    top:30px;
    
    margin-top: 20px;    
    left: 50px;
}
p{
    font-size:30px; 
    position:relative;
    bottom:10px;
    font-family: Source Sans Pro,sans-serif;

}
h2{
    position: relative;
    top:20px;
    font-size:35px;
    font-family: Source Sans Pro,sans-serif;
}
form{
    height:40px;
    width:300px;
    
    font-family: Source Sans Pro,sans-serif;
}
.a{
    position:relative;
    top:160px;
  
}
input{
    font-size:30px;
    height:50px;
    width:300px;;
    font-family: Source Sans Pro,sans-serif;
    border-top:0px;
    border-right:0px;
    border-left:0px;
    
}
.node1{
    position: relative;
  display: inline-block;
    height:150px;
    width:400px;
    float:left;
    margin-left:20px;
    left:50px;
    top:30px;
    
    margin-top: 20px;  
}  

.s{
width:300px;
height:42px;
font-size: 20px;
}
.node3{
    height:150px;
    width:260px;
    float:left;
    margin-left:40px;
    position:relative;
    top:30px;
   text-align: center;
    opacity:0.4;
    margin-top: 20px;    
    border-radius: 30px;
}
option{
    font-size: 20px;
}

.node3:hover{
    background-color:lightgrey;
    
    transition:0.3s ease-in;
    opacity:1;
}
.button{
    position: relative;
    top:50px;
    left:0px;
    background-color:white; /* Green */
  border:3px solid #008CBA;
  color: black;
  padding: 20px 62px;
  text-align: center;

  display: inline-block;
  font-size: 26px;
  margin: 4px 2px;
 
  transition-duration: 0.4s;
  cursor: pointer;


}
.button:hover {
  background-color: #008CBA;
  color: white;
    padding: 23px 65px;
}

.bu{
    height: 150px;
    width: 400px;
    float: left;
    margin-left: 20px;
    position: relative;
    top: 30px;
    margin-top: 20px;
    left: 50px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
  float: left;
    display: block;
  color: white;
  text-align: center;
padding: 25px 55px;
transition:0.5s ease-out;

}



li:hover {
  background-color: #111;
  padding: 25px 59px;
}
</style>