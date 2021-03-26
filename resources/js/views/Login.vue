
<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control"
          placeholder="Email"
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
        email: this.form.email,
        password: this.form.password,
      };

      axios.post("http://localhost:8000/api/login", formData).then((result) => {
        localStorage.setItem("userId", result.data.id);
        localStorage.setItem("name", result.data.name);
        localStorage.setItem("token", result.data.token);
        this.$bus.$emit("logged", "User logged in");
        this.$router.push("/payment");
      });
    },
  },
};
</script>


