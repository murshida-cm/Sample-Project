<template>

<div>  
    
   
    <h1>DISPLAY</h1>
<p class="a">product id:{{ product.productid }}</p>
<p class="a">name:{{ product.name }}</p>
<p class="a">price:{{ product.price}}</p>
<p class="a">dated:{{ product.dated }}</p>
<p class="a">size:{{ product.size }}</p>
<p class="a">desc:{{ product.desc }}</p>
<p class="a">style:{{ product.style1}}</p>
<p class="a">origin:{{ product.origin}}</p>
<p class="a">material:{{ product.material }}</p>
<p class="a">condition:{{ product.condition}}</p>
<p class="a">series ref num:{{ product.seriesrefno }}</p>
<p class="a">ref:{{ product.refe }}</p>
<p class="a">seller loc:{{ product.sellerloc}}</p> 

</div>



</template>





<script>
import userApi from './user.js'

export default
{
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
           
           
      
           
           }},


methods:{

    getUser(){
                
      console.log("hi")
      
        userApi.getUser().then(data => {this.product = data[0];console.log(this.product);})
        .catch(error => console.log(error));
      
    },
    


},
mounted(){
    this.getUser()
}

}



</script>


<style>
h1{

letter-spacing: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}
body{


    
}
</style>
