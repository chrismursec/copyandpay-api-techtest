
<template>
  <div>
    <h1>Register</h1>

    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Your name"
          v-model="form['name']"
        />
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter email"
          v-model="form['email']"
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="form['password']"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {},
    };
  },

  methods: {
    submit() {
      const formData = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
      };

      axios
        .post("http://localhost:8000/api/register", formData)
        .then((result) => {
          this.$router.push("/login");
        });
    },
  },
};
</script>


