<template>
  <div class="container">
    <p>Register</p>
    <!-- blah blah push test -->

    <form id="frmRegister" 
          class="row"
          @submit.prevent="processForm">
      <div class="col-12">
        <div class="field row">
          <label class="label col-4">First Name</label>
          <div class="control col-8">
            <input v-model="form.firstName" name="firstName" class="input" type="text" placeholder="Enter first name">
          </div>
        </div>

        <div class="field row">
          <label class="label col-4">Last Name</label>
          <div class="control col-8">
           <input v-model="form.lastName" name="lastName" class="input" type="text" placeholder="Enter last name">
          </div>
        </div>

        <div class="field row">
          <label class="label col-4">Email</label>
          <div class="control col-8">
            <input v-model="form.email" name="email" class="input" type="email" placeholder="Enter ">
          </div>
        </div>

        <div class="field row">
          <div class="col-4"></div>
          <div class="col-8">
           <button type="button" 
                   class="btn btn-primary btnSubmit" 
                   @click="processForm()">Submit</button>
          </div>
        </div>
      </div>
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
          firstName: ''
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
    margin-left: 21%;
  }
</style>