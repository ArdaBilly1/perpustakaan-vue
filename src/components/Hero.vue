<template>
  <div class="hero">
    <div class="row mt-4">
      <div class="col">
        <div class="d-flex h-100">
          <div class="justify-content-center align-self-center">
            <h3>
              <strong>The Most Popular Books Ever</strong> <br />
              <h5>in this website</h5>
            </h3>
            <p>Belajar bisa kapanpun dan dimanapun :)</p>
            <router-link to="/books" class="btn btn-lg btn-success">List Books</router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <img src="../assets/images/hero.png" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>