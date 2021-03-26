<template>
  <div>
    <h1>Your Past Payments</h1>
    <p>Welcore {{ name }}, these are your past payments</p>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Timestamp</th>
          <th scope="col">Amount</th>
          <th scope="col">Reference</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="payment in paymentData" v-bind:key="payment.id">
          <td>{{ new Date(payment.created_at).toUTCString() }}</td>
          <td>{{ payment.amount }}</td>
          <td>{{ payment.reference }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      paymentData: [],
    };
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }

    this.name = localStorage.getItem("name");

    const userId = localStorage.getItem("userId");
    const userData = {
      userId: userId,
    };

    axios
      .post("http://localhost:8000/api/getpayments", userData)
      .then((result) => {
        this.paymentData = result.data;
      });
  },
};
</script>
