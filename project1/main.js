Vue.component('product',{
    template: `<div class="product">

    <div class="productImage">
        <img :src="image" :alt="altText">
    </div>

    <div class="productInfo">
        <h2>{{title}}</h2> 
        <p >{{Sale}}</p>
      
        <p v-if="inStock">In Stock</p>
        <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
  

        <div class="colorBox" v-for="(variant,index) in variants" :key="variant.variantId"
            :style="{ backgroundColor: variant.variantColor}" @mouseover="updateProduct(index)">
            </p>
        </div>
        <button v-on:click="addCart()" :disabled="!inStock" :class="{ disabledButton: !inStock}">Add to
            cart</button>
        <button v-on:click="cart -= 1">Remove from cart</button>
        <br>
        <div class="cart">
            <p>cart({{ cart }})</p>

        </div>
      <br>
        <a :href="link">link of image</a>

        <p v-if="life > 1">Jake Alive &#10084</p>
        <p v-else-if="life > 0"> Don't know &#129300 </p>
        <p v-else>Jake Die &#128148</p>

        <span v-if="journal">&#127752 jake go to journal </span>

        <ul>
            <li v-for="detail in details">{{ detail }} </li>
        </ul>

        <p>Transmute</p>
        <ol>
            <li v-for="item in items"> {{ item }} </li>
        </ol>

    </div>
</div>`,
data() {
    return  {
        brand: 'Pierce',
        selectedVariant: 0,
        onSale:true,
        variants: [{
            variantID: 1,
            variantName: 'pika',
            variantImage: './asset/images/pikaG.gif',
            variantColor: '#A4E47A',
            variantQuantitiy: 3
        }, {
            variantID: 2,
            variantName: 'dad',
            variantImage: './asset/images/dadG.gif',
            variantColor: '#F6DB7D',
            variantQuantitiy: 10
        },{
            variantID: 3,
            variantName: 'jake',
            variantImage: './asset/images/jakeG.gif',
            variantColor: 'pink',
            variantQuantitiy: 0
        }],
        cart: 0,
        altText: 'pierce daisy',
        link: 'https://images.app.goo.gl/UcvD8RcZPLe9hKEX7',
        life: 2,
        journal: true,
        details: ["20 years old", "Single", "Finn is best friend"],
        items: ['car', 'balloon', 'sword'],
    }
} ,
methods: {
    addCart(){
        this.cart += 1
    },
    updateProduct(index){
        this.selectedVariant = index
        console.log(index)
    }
},
computed:{
    title() {
        return this.brand + ' ' + this.variants[this.selectedVariant].variantName
    },
    image() {
        return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
        return this.variants[this.selectedVariant].variantQuantitiy
    },
    Sale() {
        if (this.onSale) {
            return this.brand + ' ' + this.variants[this.selectedVariant].variantName + ' are on sale!'
          } 
            return  this.brand + ' ' + this.variants[this.selectedVariant].variantName + ' are not on sale'
        }
}
})

var app = new Vue({
    el: '#app',
  data: {
      premium:true
  }
})