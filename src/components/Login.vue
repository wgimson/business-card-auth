<template>
  <div style="width: 24%;height: 325px;border: 2px solid #b7acac;; border-radius: 10px; padding-left: 1%;">
    <h1 style="margin-left: 29%;color: #6c7277;">Sign in</h1>
    <h6 style="color: #ababab;">to continue to your account</h6>
    <p v-if="$route.query.redirect">
      You need to login first.
    </p>
    <form @submit.prevent="login" autocomplete="off">
      <label><input v-model="email" placeholder="email" v-focus></label>
      <label><input v-model="pass" placeholder="password" type="password"></label><br>
      <button width="19%" type="submit" class="btn btn-primary" id="btnSubmit" style="margin-bottom: 5%;">Next</button>
      <p v-if="error" class="error">Sorry, we could not find that account.</p>
      <p><a href="/">Forgot email or password?</a></p>
      <router-link to="/register">Create account</router-link>
    </form>
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

<style>
  .error {
    color: red;
  }
  #btnSubmit {
    margin-left:70%;
  }
</style>