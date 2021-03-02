<template>
  <div class="container with-overflow">
    <div class="row"></div>
    <div class="row row-margin"
         style="margin-top: 300px;"
         align="center"
         justify="center">

      <div style="width: 30%;height: 48%;border: 2px solid #b7acac; border-radius: 10px; padding-left: 1%; margin-left: 35%;">
      <div class="col-12">
        <h1 style="color: #6c7277;">Sign in</h1>
        <h6 style="color: #ababab;">to continue to your account</h6>
        <p v-if="$route.query.redirect">
          You need to login first.
        </p>
        <form @submit.prevent="login" autocomplete="off">
          <div class="form-group">
            <label for="inptUserEmail">Email address</label>
            <input type="email" v-model="email" v-focus class="form-control" id="inptUserEmail" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="inptUserPass">Password</label>
            <input v-model="pass" type="password" class="form-control" id="inptUserPass" placeholder="Password">
          </div>
          <button width="19%" type="submit" class="btn btn-primary" id="btnSubmit" style="margin-bottom: 5%;">Log In</button>
          <p v-if="error" class="error">Sorry, we could not find that account.</p>
          <p><a href="/">Forgot email or password?</a></p>
          <router-link to="/register">Create account</router-link>
        </form>
      </div>
    </div>
    </div>
    
    <div class="row"></div>
  </div>
  
</template>

<script>
  import auth from '../auth'
  export default {
    data () {
      return {
        email: '',
        pass: '',
        error: false
      }
    },
    methods: {
      login () {
        auth.login(this.email, this.pass, loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            this.$router.replace(this.$route.query.redirect || '/')
          }
        }).catch(err => {
          console.error(err.message)
          this.error = true
        })
      }
    }
  }
</script>

<style scoped>
  .error {
    color: red;
  }
  .row-margin {
    margin-top: 115%;
  } 
  .with-overflow {
    overflow: hidden;
  }
  #btnSubmit {
    margin-left:70%;
  }
</style>