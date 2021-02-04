<template>
  <div class="about">
    <div class="tittle">茶语午后</div>
    <div class="tittle-a">
      <div class="tittle-a-a">
        <img src="../assets/dizhi1.png" />
      </div>
      <div class="tittle-b">调用地图</div>
      <div class="tittle-c">
        <div class="tittle-c-a">自取</div>
        <div class="tittle-c-b">外卖</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.tittle {
  width: 90%;
  height: 60px;
  font-size: 50px;
  line-height: 60px;
  margin: 10px auto;
  text-align: left;
  color: black;
  font-family: '楷体';
}
.tittle-a {
  width: 100%;
  height: 150px;
  background: rgb(214, 202, 202);
  margin-top: 30px;
  display: flex;
}
.tittle-a-a {
  width: 130px;
  height: 130px;
  /* background: green; */
  margin: 10px 0 0 10px;
}
.tittle-a-a > img {
  width: 130px;
  height: 130px;
}
.tittle-b {
  width: 50%;
  height: 140px;
  background: gray;
  margin: 5px 0 0 5px;
}
.tittle-c {
  width: 30%;
  height: 100px;
  border-radius: 20px;
  /* background: gray; */
  border: 1px solid gray;
  margin: 25px auto 0;
  display: flex;
  justify-content: space-between;
}
.tittle-c-a,
.tittle-c-b {
  width: 48%;
  height: 80px;
  border-radius: 30px;
  line-height: 80px;
  margin: 10px;
}
</style>
