<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <Navbar />
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6 mt-4">
            <h2 class="m-0 text-dark"><strong>Add Book</strong></h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mt-3">
                <li class="breadcrumb-item">
                  <router-link to="/" class="text-dark">Home</router-link>
                </li>
                <li class="breadcrumb-item" aria-current="page">
                  <router-link to="/books" class="text-dark">Books</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <a disabled> Add </a>
                </li>
              </ol>
            </nav>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="card card-primary border-dark">
              <form
                role="form"
                @submit.prevent="store({ nama_buku, penerbit, tgl_terbit })"
              >
                <div class="card-body">
                  <div class="form-group">
                    <label for="name">Book Name : </label>
                    <input
                      class="form-control"
                      v-model="nama_buku"
                      id="nama_buku"
                      placeholder="Insert Book Name"
                      required=""
                    />
                  </div>
                  <div class="form-group">
                    <label for="penerbit">Publisher :</label>
                    <input
                      type="text"
                      v-model="penerbit"
                      class="form-control"
                      id="penerbit"
                      placeholder="Insert Publisher"
                      required=""
                    />
                  </div>
                  <div class="form-group">
                    <label for="tgl_terbit">Date Published :</label>
                    <input
                      type="date"
                      v-model="tgl_terbit"
                      class="form-control"
                      id="tgl_terbit"
                      required=""
                    />
                  </div>
                </div>
                <div class="card-footer">
                  <div class="form-group">
                    <input type="file" @change="onFileSelected" />
                    <!-- <button @click="onUpload">Upload</button> -->
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary float-right mb-2"
                  >
                    <i v-if="pending" class="fa fa-refresh fa-spin"></i>Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col">
            <img class="card-image" src="@/assets/images/form_img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Create",
  components: {
    Navbar,
  },
  data() {
    return {
      pending: false,
      id_buku: "",
      nama_buku: "",
      penerbit: "",
      tgl_terbit: new Date(""),
    };
  },
  methods: {
    setId(data) {
      this.id_buku = data;
    },
    store() {
      this.pending = true;
      axios
        .post(
          "/api/libraries",
          {
            nama_buku: this.nama_buku,
            penerbit: this.penerbit,
            tgl_terbit: this.tgl_terbit,
          },
          this.config
        )
        .then((response) => {
          this.$toast.success("Book saved.", {
            type: "success",
            position: "bottom-right",
            duration: 3000,
            dismissible: true,
          });
          console.log(response.data.data);
          this.onUpload(response.data.data.id);
    
        });
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload(data) {
      const fd = new FormData();
      fd.append("file", this.selectedFile, this.selectedFile.name);
      axios.post("/api/libraries/" + data, fd).then((res) => {
        console.log(res);
              this.$router.push({path: '/books/'});
      });
    },
  },
};
</script>

<style>
</style>