<template>
  <div id="app">
  <router-view/>
  <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:8001';
export default {
  components:{
    Footer
  }
    
}
</script>
