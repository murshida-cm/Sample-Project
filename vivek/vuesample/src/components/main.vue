<template>

<div>   
   <div class="square">
        <img class="img" src="./nest-logo-update.png">
        </div> 
    
<div class="square2">
    <h1 style="font-size: 40px;left: 20px;position: relative;top: 10px;">Nazmiyal</h1><br>
    <div>
   <div class="rig"><p>product</p>
    <select style="width: 730px;height: 46px;font-size: 20px;font-weight: bold;">
       <option v-for="option in prod5" v-bind:value="option.productid">
    {{ option.name1 }}
  </option>
    </select>
      </div>
     <div class="rig"><p>product id</p><input  v-model="product.productid" type="text" name="product id"  size="80"></div>
    </div>
    <div style="height: 150px;width:2000px;float:left;margin-left:40px; "><p>Name</p>
     <input v-model="product.name1" type="text" name="names" value="antique turkish rug" size="150"></div>
    <div>
            <div class="rig"><p>price</p><input v-model="product.price" type="text" name="price" value="4353$" size="65"> </div>
              <div class="rig"><p>dated</p><input v-model="product.dated" type="text" name="dated" value="turn of 20th century" size="80"></div>
             </div>
             <div>
                    <div class="rig"><p>size</p><input v-model="product.size" type="text" name="size" value="3m*5m" size="65">  </div>
                      <div class="rig"><p>description</p><input v-model="product.descriptions" type="text" name="description" value="nil" size="80"></div>
                     </div>
           
           <div class="tab">
            <button v-on:click="Switch()" class="tablinks">1stdibs</button>
            <button v-on:click="Switch1()" class="tablinks" >artsy</button>
            <button v-on:click="Switch2()" class="tablinks">art</button>
          </div>
          <div v-if="show" >  
           <div>
              <div class="rig"><p>style</p><input v-model="product.style" type="text" name="style" value="oushak rug" size="65"> </div>
                
              <div class="rig"><p>origin</p><input v-model="product.origin" type="text" name="origin" value="turkey" size="80"></div>
           </div>
           <div>
              <div class="rig"><p>material</p><input v-model="product.material" type="text" name="material" value="hand cotted wool" size="65"> </div>
              <div class="rig"><p>condition</p><input v-model="product.conditions" type="text" name="condition" value="excellent" size="80"></div>
            </div>
             <div>
                 <div class="rig"><p>series ref num</p><input v-model="product.series" type="text" name="series ref nnum" value="4563" size="65" > </div>
                 <div class="rig"><p>ref number</p><input v-model="product.ref" type="text" name="ref number" value="fd435ht" size="80"></div>
            </div>
            <div>
                <div class="rig"><p>seller loc</p> <input v-model="product.loc" type="text" name="seller loc" value="newyork" size="65" > </div>
            </div>
            </div>
            <div  v-if="show1" ><h2 style="position: relative;top:800px;right: 750px;">*NOT AVAILABLE*</h2></div>
            <div  v-if="show2" ><h2 style="position: relative;top:800px;right: 750px;">*NOT AVAILABLE*</h2></div>
            <div>
                      <!-- <button @click="getUser()"  style="background-color: blue;color: white;font-size:30px;height:30px; position: relative;top: 1390px;right: 300px;font-weight:bold;">display</button> -->
                  <router-link to="/user12"    active-class="active" style="background-color: blue;color: white;font-size:30px;height:30px; position: relative;top: 1380px;right: 300px;font-weight:bold;"> DISPLAY</router-link>
                     <button @click="saveUser()" style="background-color: blue;color: white;font-size:30px;height:30px; position: relative;top: 1350px;right: 1300px;font-weight:bold;"> SUBMIT</button>
            </div>      
  </div>

<!-- <sub1 :prod='prod'> </sub1>  -->

  

</div>


</template>




<script>
    import userApi from '@/services/api/user.js'
    //  import sub1 from './sub.vue'
     
     
        export default{

       
        data:function() {
           return{
             prod5:[],
           product:{
             productid: '',
              name1: '',
              price: '',
              dated: '',
              size: '',
              descriptions: '',
              style: '',
              origin: '',
              material: '',
              conditions: '',
              series: '',
              ref: '',
              loc: '',
       
          },
          // prod:{
          //    productid: '',
          //     name1: '',
          //     price: '',
          //     dated: '',
          //     size: '',
          //     descriptions: '',
          //     style: '',
          //     origin: '',
          //     material: '',
          //     conditions: '',
          //     series: '',
          //     ref: '',
          //     loc: '',
       
          // },
           show:false,
         show1:false,
          show2:false,
          sh:true,
           
         } } ,
     methods:{
        Switch() {
        this.show = !this.show
        this.show1 = false
        this.show2 = false
        }, 
        Switch1() {
        this.show = false
        this.show1 = !this.show1
        this.show2 = false
        },
         Switch2(){
        this.show = false
        this.show1 = false
        this.show2 = !this.show2
        },
    //      getUser(){
    //   console.log("testing")
    //     userApi.getUser().then(data => {this.prod= data[0];
    //     console.log(data);})
    //     .catch(error => console.log(error));
        

    // },
          saveUser(){
        console.log(this.product);
         let userDetail=this.product
          userApi.saveUserDetail(userDetail).then(response => {
          // console.log(response.data);
          this.product = "" ;
          
          });
 
       }
      
     },
     beforeMount()
     {
        userApi.getUser0().then(data => {this.prod5= data;
        console.log(data);})
        .catch(error => console.log(error));
         
          
        
     }
        // components:{

        //     sub1

        //     }
        
        }
       </script> 


<style>

  body{ background-color: lightgrey;}
    
    .square2{
        position: relative;
       margin: 0 auto;
      
        height:1600px;
        width: 1700px;
     
        background-color:white;
        top: 50px;

    }
    .square{
        height: 200px;
  width: 110%;
  background-color:rgb(89, 89, 255);
    }
    .img{
        position: relative;
        left: 20px;
       top:35px;
        height: 100px;
        width: auto;
        right:60px;
    }
    p{
        font-size: 10px;

    }

    .rig{
        height: 150px;
        width: 700px;
        float: left;
        margin-left: 40px;
       
        margin-top: 10px;
        
        
    }
p{
    font-size: 20px;
}
h2{
    position: relative;
    top: 50px;
}
.r{
    position: relative;
    top: 30px;
    left: 100px;
    float: left;
    width: 480px;
    height: 50px;
    box-shadow: 0px 5px 2px -3px;
    
    margin-top: 10px;
}

    input{
        height: 40px;
        font-size: 20px;
        font-weight: bold;
      
        
    }  
    .val{
         size: 30px;
    }
    .a{
        position: relative;
        left: 200px;
        top: 100px;
        font-size: 20px
    }

    .tab {
  overflow: hidden;
  border: 0px solid #ccc;
  background-color: #f1f1f1;
  position: relative;
  top: 20px;
  float: left;
 left: 300px;
 
  width: 962px;
  height: 40px;
}


.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 20px 160px;
  transition: 0.3s;
  font-size: 20px;
  position: relative;
  height: 30px;
  width: 20px;
  
}


.tab button:hover {
  background-color:rgb(179, 179, 240);
}


.tab button.active {
  background-color: #ccc;
}


.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 0px solid #ccc;
  border-top: none;
}
  

  ul {
    width: 110%;
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
  background-color:rgb(89, 89, 255);

font-weight: bolder;
}
  

    </style>