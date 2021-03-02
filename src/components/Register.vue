<template>
  <div class="container">
    <h1 style="margin-left: 4%;">Register</h1>
    <form id="frmRegister" 
          @submit.prevent="processForm"
          style="margin: 5%;width: 35%;">
          <div class="form-group">
            <label for="inptFirstName">First Name</label>
            <input type="text" v-model="form.firstName" v-focus class="form-control" id="inptFirstName" placeholder="Enter first name">
          </div>
          <div class="form-group">
            <label for="inptLastName">Last Name</label>
            <input type="text" v-model="form.lastName" v-focus class="form-control" id="inptLastName" placeholder="Enter last name">
          </div>
          <div class="form-group">
            <label for="inptEmail">Email</label>
            <input type="email" v-model="form.email" v-focus class="form-control" id="inptEmail" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="inptPassword">Password</label>
            <input type="password" v-model="form.password" v-focus class="form-control" id="inptPassword" placeholder="Enter Password">
          </div>
          <div class="form-group">
            <label for="inptConfirmPassword">Confirm Password</label>
            <input type="password" v-model="form.confirmPassword" v-focus class="form-control" id="inptConfirmPassword" placeholder="Confirm Password">
            <small id="infoHelp" class="form-text text-muted">We'll never share your info with anyone else.</small>
          </div>
          <button type="submit" 
                   class="btn btn-primary btnSubmit" 
                   @click="processForm()">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          email: '',
          lastName: '',
          firstName: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      processForm: function () {
        console.log({ firstName: this.$data.form.firstName, lastName: this.$data.form.lastName, email: this.$data.form.email })
        alert('Processing!')
      }
    }
  }
</script>

<style>
  .error {
    color: red;
  }
  .row {
    margin:1%;
  }
  .container {
    width: 50%;
    margin-left: 0%;
  }
  .btnSubmit {
    margin-left: 76%;
  }
</style>