<template>
  <main>
    <Navbar></Navbar>
    <main class="container">
      <router-view></router-view>
    </main>
  </main>
</template>


<script>
import Navbar from "./Navbar";
export default {
  components: { Navbar },
  computed: {},
  data() {
    return {};
  },
};
</script>
