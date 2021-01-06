<template>
  <div class="books">
    <Navbar />

    <div class="container mt-4">
      <div class="row">
        <div class="col-sm-11">
        <h2><strong>Books</strong> List</h2>
        </div>
        <div class="col float-right">
          <router-link :to="{ name: 'Create'}" class="btn btn-primary">Add</router-link>
        </div>
      </div>

       <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id"> 
          <CardProduct :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";
export default {
  name: "Books",
  components: {
    Navbar,
    CardProduct
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
    axios.get('/api/libraries')
  .then((response) =>this.setProduct(response.data.data))
  .then((response) =>console.log(response.data.data))
  .catch((error)=> console.log("Error: ", error))
   },

};
</script>

<style></style>
