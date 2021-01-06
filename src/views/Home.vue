<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />

      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Books</strong></h2>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-3 mt-4" v-for="product in products" :key="product.id"> 
          <CardProduct :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios.get('/api/libraries/get-3')
  .then((response) =>this.setProduct(response.data.data))
  .catch((error)=> console.log("Error: ", error))
   },
};
</script>
