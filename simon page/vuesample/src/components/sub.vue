<template>
<div>
    
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

export default{

    props:{
product:{}
            }
}
</script>