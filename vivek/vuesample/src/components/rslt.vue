<template>
    <div class="mn">
      <h1 class="a1">UPDATED SUCCESSFULLY</h1>
      <button @click="getUser()" style="font-size:20px; margin-left: 980px;position:relative;top:10px;">view details</button>
  <div v-if="sh2">
<h4 class="a"> Product id  : {{prod.productid}} </h4>
<h4 class="a"> name : {{prod.name1}}</h4>
<h4 class="a"> price : {{prod.price}}</h4>
<h4 class="a"> dated : {{prod.dated}}</h4>
<h4 class="a"> size : {{prod.size}}</h4>
<h4 class="a"> description : {{prod.descriptions}}</h4>
<h4 class="a"> style : {{prod.style}}</h4>
<h4 class="a"> origin : {{prod.origin}}</h4>
<h4 class="a"> material: {{prod.material}}</h4>
<h4 class="a"> condition: {{prod.conditions}}</h4>
<h4 class="a"> series ref num : {{prod.series}}</h4>
<h4 class="a"> ref number : {{prod.ref}}</h4>
<h4 class="a">seller loc : {{prod.loc}}</h4>
</div>

    
    </div>
</template>


<script>
import userApi from '@/services/api/user.js'
export default {
    
        data:function() {
           return{
           
          prod:{
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
              sh2:false }  },
           
    
    methods:{ 

       


       getUser(){
           this.sh2 = true
           var id1 = prompt("enter product id ",)
      console.log(id1)
        userApi.getUser(id1).then(data => {this.prod= data[0];
        console.log(data);})
        .catch(error => console.log(error) );

       
    },
    }
    
}
</script>

<style>
.a1{
    
    margin-left: 800px;
    position: relative;
    top:20px;
    
}
.mn{
   
   position: relative;
 top: 10px;
    

}
.q{
    font-size: 20px;
    background-color: blue;
    color: white;
    position: relative;
    left: 800px;

}



</style>