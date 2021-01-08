<template>
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header"> <strong>Login</strong></div>
        <div class="card-body">
          <div
            class="alert alert-danger"
            v-for="(error, index) in errors"
            :key="index"
          >
            {{ error[0] }}
          </div>
          <form @submit.prevent="userLogin">
            <div class="form-group">
              <label for="name">Username</label>
              <input
                v-model="form.name"
                type="text"
                class="form-control"
                placeholder="Username.."
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                v-model="form.password"
                type="password"
                class="form-control"
                placeholder="Password.."
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      errors: null,
    };
  },
  methods: {
    userLogin() {
      this.$store
        .dispatch("login", this.form)
        .then((response) => {
          console.log(response);
          // this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>