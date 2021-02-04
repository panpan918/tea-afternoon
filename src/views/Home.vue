<template>
  <div class="home">
    <div class="tittle"></div>
    <div class="middle">
      <div class="middle-left">
        <div class="left-top"></div>
        <div class="left-middle">门店自取</div>
        <div class="left-bottom">下单免排队</div>
      </div>
      <div class="middle-middle"></div>
      <div class="middle-right">
        <div class="right-top"></div>
        <div class="left-middle">外卖</div>
        <div class="left-bottom">暂未开放敬请期待</div>
      </div>
    </div>
    <div class="last">
      <div class="last-left">
        <div class="last-left-a">积分商城</div>
        <div class="last-left-b">神秘好物等你来</div>
        <div class="last-left-c"></div>
      </div>
      <div class="last-middle">
        <div class="last-left-a">亦.会员</div>
        <div class="last-left-b">-玩转会员权益-</div>
        <div class="last-left-d"></div>
      </div>
      <div class="last-right">
        <div class="last-left-a">周二会员日</div>
        <div class="last-left-b">新品单杯8折</div>
        <div class="last-left-e"></div>
      </div>
    </div>
    <div class="final">
      <div class="final-left">
        <div class="final-left-a"></div>
        <div class="final-left-b">等级</div>
      </div>
      <div class="final-right">
        <div class="final-right-a">我的积分:36 ></div>
        <div class="final-right-b">积分抵现，兌换优惠券及周边好礼</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  }
}
</script>
<style scoped>
.tittle {
  width: 100%;
  height: 500px;
  background: url('../assets/back2.jpg');
  background-size: 100% 500px;
  background-repeat: no-repeat;
}
.middle {
  width: 90%;
  height: 400px;
  background: rgb(235, 221, 221);
  margin: -50px auto 0;
  border-radius: 5%;
  display: flex;
}
.middle-left {
  width: 40%;
  height: 340px;
  /* background: red; */
  margin: 30px 0 0 30px;
}
.left-top {
  width: 80%;
  height: 170px;
  background: url('../assets/back4.jpg');
  margin: 30px auto 0;
  background-size: 100% 170px;
  background-repeat: no-repeat;
}
.left-middle {
  width: 100%;
  height: 70px;
  /* background: green; */
  font-size: 50px;
  line-height: 70px;
  color: black;
  margin-top: 10px;
}
.left-bottom {
  width: 100%;
  height: 50px;
  font-size: 30px;
  line-height: 50px;
  /* background: blue; */
  margin-top: 10px;
}
.middle-middle {
  width: 1%;
  height: 250px;
  background: white;
  margin-top: 80px;
  margin-left: 50px;
}
.middle-right {
  width: 40%;
  height: 340px;
  margin: 30px 0 0 50px;
}
.right-top {
  width: 60%;
  height: 170px;
  background: url('../assets/car1.png');
  margin: 30px auto 0;
  background-size: 100% 170px;
  background-repeat: no-repeat;
}
.last {
  width: 100%;
  height: 350px;
  background: rgb(214, 202, 202);
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
}
.last-left,
.last-middle,
.last-right {
  width: 30%;
  height: 340px;
  background: rgb(235, 221, 221);
  border-radius: 20px;
  margin-top: 5px;
}
.last-left-a {
  width: 100%;
  height: 50px;
  font-size: 40px;
  line-height: 50px;
  margin-top: 30px;
  color: black;
}
.last-left-b {
  width: 100%;
  height: 40px;
  font-size: 30px;
  line-height: 40px;
  margin-top: 5px;
}
.last-left-c,
.last-left-d,
.last-left-e {
  width: 60%;
  height: 150px;
  /* background: green; */
  margin: 40px auto 0;
}
.last-left-c {
  background: url('../assets/jifen.png');
  background-size: 100% 150px;
}
.last-left-d {
  background: url('../assets/vip1.png');
  background-size: 100% 150px;
}
.last-left-e {
  background: url('../assets/vip2.png');
  background-size: 100% 150px;
}
.final {
  width: 98%;
  height: 150px;
  background: rgb(235, 221, 221);
  margin: 30px auto 0;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
}
.final-left {
  width: 40%;
  height: 130px;
  /* background: gray; */
  margin: 10px 0 0 30px;
  display: flex;
}
.final-left-a {
  width: 40%;
  height: 100px;
  background: green;
  margin: 15px 0 0 20px;
}
.final-left-b {
  width: 40%;
  height: 50px;
  border: 1px solid green;
  border-radius: 20%;
  margin: 30px auto 0;
}
.final-right {
  width: 50%;
  height: 130px;
  /* background: gray; */
  margin-top: 10px;
}
.final-right-a {
  width: 100%;
  height: 50px;
  font-size: 40px;
  line-height: 40px;
  color: black;
  margin-top: 20px;
}
.final-right-b {
  width: 100%;
  height: 40px;
  font-size: 28px;
  line-height: 40px;
  margin-top: 5px;
}
</style>
