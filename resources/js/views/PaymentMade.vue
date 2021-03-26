<template>
  <div>
    <h1>Payment made</h1>

    <div v-if="showPaymentResult">
      <p>Result Code: {{ resultCode }}</p>
      <p>Description: {{ description }}</p>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      resultCode: "",
      description: "",
      showPaymentResult: false,
    };
  },

  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }

    this.id = this.$route.query.id;
    const postData = {
      id: this.id,
    };

    axios
      .post("http://localhost:8000/api/paymentmade", postData)
      .then((result) => {
        this.resultCode = result.data.result.code;
        this.description = result.data.result.description;
        this.showPaymentResult = true;
      });
  },
};
</script>
