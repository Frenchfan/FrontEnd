<script>
import ProductPriceFormat from "./ProductPriceFormat.vue";

export default {
  name: "ProductDetails",
  components: {ProductPriceFormat},
  data() {
    return {
      product: {
        name: 'Product',
        price: 150,
        available: true,
      },
      currencyFormat: '',
    }
  },
  computed: {
    formattedPrice() {
      if (this.currencyFormat) {
        return new Intl.NumberFormat('ru', {style: 'currency', currency: this.currencyFormat}).format(this.product.price);
      }
      return `${this.product.price} Денях`;
    }
  },
  methods: {
    setCurrency(variant) {
      this.currencyFormat = variant;
    },
    changeAvailable() {
      this.product.available = !this.product.available;
    },
  }
};
</script>

<template>
  <div class="card">

    <div class="card__inner">
      <p>{{product.name}}</p>
      <p>{{formattedPrice}}</p>
      <p>{{product.available ? 'Available' : 'Out of stock'}}</p>
    </div>
    <div class="card__actions">
      <ProductPriceFormat @set-currency="setCurrency" />
      <button @click="changeAvailable">Change Available</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border: 2px solid #fefefe;
  border-radius: 2rem;
  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>
