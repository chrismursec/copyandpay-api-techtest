<template>
  <nav
    class="mb-5 navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light"
  >
    <div class="navbar-nav">
      <router-link v-if="!isLoggedIn" class="nav-item nav-link" to="/login">
        Login
      </router-link>
      <router-link v-if="!isLoggedIn" class="nav-item nav-link" to="/register">
        Register
      </router-link>
      <router-link v-if="isLoggedIn" class="nav-item nav-link" to="/payment">
        Make Payment
      </router-link>
      <router-link v-if="isLoggedIn" class="nav-item nav-link" to="/mypayments">
        My Payments
      </router-link>
      <a @click="logout" v-if="isLoggedIn" class="nav-item nav-link">
        Logout
      </a>
    </div>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },

  created() {
    this.$bus.$on("logged", () => {
      this.isLoggedIn = !this.isLoggedIn;
    });

    if (localStorage.getItem("token") != null) {
      this.isLoggedIn = true;
    }
  },

  methods: {
    logout() {
      this.isLoggedIn = false;
      localStorage.removeItem("userId");
      localStorage.removeItem("name");
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>
