<template>
  <div class="order-empty">
    <div class="order-empty-img">
      <img src="../../../assets/order/order-empty.png" alt="order-empty" />
    </div>
    <div class="order-empty-desc">
      <p>您今天还没下单</p>
      <p>快去选择一杯喜欢的饮品吧~</p>
    </div>
    <div class="order-empty-btn" @click="$router.push('/goods')">去下单</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.order-empty {
  height: 100%;
}

.order-empty-img {
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.order-empty-img img {
  width: 200px;
  height: 200px;
}

.order-empty-desc {
  text-align: center;
  font-size: 13px;
  color: #999;
  line-height: 2;
}

.order-empty-btn {
  width: 200px;
  height: 45px;
  border-radius: 25px;
  background: #ee0a24;
  text-align: center;
  font-size: 15px;
  line-height: 45px;
  margin: 20px auto;
  color: #fff;
  cursor: pointer;
}
</style>