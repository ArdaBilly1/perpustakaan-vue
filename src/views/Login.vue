<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-6">
        <img src="../assets/images/logo_login.png" width="100%" />
      </div>
      <div class="col-sm-6">
        <div class="card card-primary border-primary">
          <form
            class="form-signin"
            @submit.prevent="login({ name, password })"
          >
            <div class="card-header">
              <h1><strong>Login</strong></h1>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="inputEmail" class="sr-only">Username</label>
                <input
                  type="text"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Username"
                  required
                  autofocus
                />
              </div>
              <div class="form-group">
                <label for="inputPassword" class="sr-only">Password</label>
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required
                  autofocus
                />
              </div>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-primary" type="submit">
                Sign in
              </button> <br>
              <a href="#"><small>dont have account? Please Sign-up</small></a>
              <div v-if="isError" class="alert alert-danger">
                <strong>Danger!</strong> {{ messages }}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    name:"",
    password:""
    }
  },

  methods:{
    login(){
      
    }
  }

};
</script>

<style>
</style>