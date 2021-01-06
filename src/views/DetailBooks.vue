<template>
  <div class="detail-books">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col">
          <!-- breadcrumb  -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                <router-link to="/books" class="text-dark">Books</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <a disabled> Detail </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img :src="image" class="img-fluid shadow" alt="" />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama_buku }}</strong>
          </h2>
          <h4>
            Penerbit: <strong>{{ product.penerbit }}</strong>
          </h4>
          <h4>Tanggal Terbit: {{ product.tgl_terbit }}</h4>
          <a
            href="javascript:;"
            v-on:click="destroy(product.id, product)"
            class="btn btn-danger mt-4 float-right"
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "DetailBooks",
  components: {
    Navbar,
  },
  data() {
    return {
      product: [],
      image: [],
      file: [],
      // pending: false
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    setFile(data) {
      this.file = data;
      this.setImage(this.file.name);
    },
    setImage(data) {
      this.image = "http://localhost:8001/api/libraries/" + data + "/file";
    },
    destroy(id, product) {
      if (confirm("Do you really want to delete?")) {
        axios
          .delete("/api/libraries/" + id)
          .then(() => {
            this.$toast.success("Book saved.", {
              type: "danger",
              position: "bottom-right",
              duration: 3000,
              dismissible: true,
            });
            this.deleteFile(product.file.id);
            this.$router.push({ path: "/books" });
            this.artists.data.splice(product, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  deleteFile(data){
    axios
          .delete("/api/libraries/file/" + data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      },
  },
  mounted() {
    axios
      .get("/api/libraries/" + this.$route.params.id)
      .then((response) => {
        console.log(response);
        this.product = response.data.data;
        this.setFile(response.data.data.file);
      })
      .then((response) => console.log(response.data.data))
      .catch((error) => console.log("Error: ", error));
  },
};
</script>

<style>
</style>