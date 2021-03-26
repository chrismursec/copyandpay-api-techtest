<template>
  <div>
    <h1>Payment page</h1>
    <div v-if="showPaymentForm">
      <p>Welcome {{ user }}, make your payment here...</p>

      <form @submit.prevent="submit">
        <div class="form-group">
          <label>Amount</label>
          <input
            type="number"
            class="form-control"
            placeholder="Amount"
            v-model="form['amount']"
          />
        </div>

        <div class="form-group">
          <label>Reference</label>
          <input
            type="text"
            class="form-control"
            placeholder="Reference"
            v-model="form['reference']"
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

    <div v-if="showApiForm">
      <form
        action="http://localhost:8000/#/paymentmade"
        class="paymentWidgets"
        data-brands="VISA MASTER AMEX"
      ></form>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      user: "",
      isLoggedIn: false,
      form: {},
      checkoutId: "",
      showPaymentForm: false,
      showApiForm: false,
    };
  },

  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    } else {
      this.showPaymentForm = true;
      this.user = localStorage.getItem("name");
    }
  },

  methods: {
    submit() {
      const formData = {
        amount: this.form.amount,
        reference: this.form.reference,
        userId: localStorage.getItem("userId"),
        name: localStorage.getItem("name"),
      };

      axios
        .post("http://localhost:8000/api/makepayment", formData)
        .then((result) => {
          if (result.status === 200) {
            this.checkoutId = result.data.id;
            this.showPaymentForm = false;
            this.showApiForm = true;

            const scripttag = document.createElement("script");
            scripttag.setAttribute(
              "src",
              `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${this.checkoutId}`
            );
            document.head.appendChild(scripttag);
          }
        });
    },
  },
};
</script>



