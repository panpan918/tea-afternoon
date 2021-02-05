<template>
  <div class="order">
    <div class="order-title">订单</div>
    <van-tabs line-width="60px" v-model="active">
      <van-tab title="今日订单" ref="orderList1" class="order-list">
        <OrderEmpty />
      </van-tab>
      <van-tab title="历史订单" ref="orderList2" class="order-list">
        <OrderEmpty />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import OrderEmpty from './components/OrderEmpty'
export default {
  components: {
    OrderEmpty
  },
  data() {
    return {
      active: 0,
      listHeight: 0
    }
  },
  mounted() {
    this.listHeight = `${document.body.clientHeight - 135}px`
    this.$refs.orderList1.$el.style.height = this.listHeight
  },
  watch: {
    active(val, oldVal) {
      if (val !== oldVal) {
        this.$refs.orderList2.$el.style.height = this.listHeight
      }
    }
  }
}
</script>

<style scoped>
.order-title {
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
}
.order-list {
  background: #f8f8f8;
}
</style>