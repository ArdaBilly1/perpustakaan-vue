<template>
  <div class="card shadow card-product">
    <img
      class="card-image-top"
      :src="setImage(product.file.name)"
      width="100%"
      height="200"
      alt=""
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama_buku }}</h5>
      <p class="card-text">{{ product.penerbit }}</p>
      <p class="card-text">{{ product.tgl_terbit }}</p>
      <router-link
        :to="{ name: 'DetailBooks', params: { id: product.id } }"
        class="btn btn-primary"
      >
        Details
      </router-link>
      <router-link
        :to="{ name: 'Edit', params: { id: product.id } }"
        class="btn btn-warning float-right"
      >
        Edit
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
  methods: {
    setImage(data) {
      return "http://localhost:8001/api/libraries/" + data + "/file";
    },
  },
};
</script>

<style>
</style>