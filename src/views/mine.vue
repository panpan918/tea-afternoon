<template>
  <div class="mine" ref="mine">
    <div class="mine-header">
      <img src="../assets/mine/mine-header.png" alt="" />
    </div>
    <div class="mine-main">
      <div class="mine-user">
        <div class="mine-user-header">
          <div
            class="mine-user-avatar"
            :style="{
              background:
                'url(https://www.17sucai.com/preview/1424582/2019-11-07/light/assets/images/boy.svg)',
              backgroundSize: 'cover'
            }"
          ></div>
          <div class="mine-user-info">
            <div class="mine-user-info-name">喜欢</div>
            <div class="mine-user-info-grade">V1</div>
          </div>
        </div>
        <div class="mine-user-content">
          <div
            class="mine-user-content-item"
            v-for="(item, index) in userList"
            :key="index"
          >
            <img :src="item.imgUrl" :alt="item.type" />
            <div>{{ item.count }}</div>
            <div>{{ item.type }}</div>
          </div>
        </div>
      </div>
      <div class="mine-service">
        <div class="mine-service-title">我的服务</div>
        <div class="mine-service-list">
          <div
            class="mine-service-list-item"
            v-for="(item, index) in serviceList"
            :key="index"
          >
            <img :src="item.imgUrl" :alt="item.type" />
            <div>{{ item.type }}</div>
          </div>
        </div>
      </div>
      <div class="mine-game">
        <div class="mine-game-title">游戏互娱</div>
        <div class="mine-game-list">
          <div
            class="mine-game-list-item"
            v-for="(item, index) in gameList"
            :key="index"
          >
            <img :src="item.imgUrl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userList: [
        {
          imgUrl: require('../assets/mine/mine-user-type1.png'),
          count: 0,
          type: '优惠券'
        },
        {
          imgUrl: require('../assets/mine/mine-user-type2.png'),
          count: 0,
          type: '钱包余额(元)'
        },
        {
          imgUrl: require('../assets/mine/mine-user-type3.png'),
          count: 36,
          type: '我的积分'
        }
      ],
      serviceList: [
        {
          imgUrl: require('../assets/mine/mine-service-type1.png'),
          type: '领券中心'
        },
        {
          imgUrl: require('../assets/mine/mine-service-type2.png'),
          type: '积分商城'
        },
        {
          imgUrl: require('../assets/mine/mine-service-type3.png'),
          type: '总部客服'
        },
        {
          imgUrl: require('../assets/mine/mine-service-type4.png'),
          type: '我的地址'
        }
      ],
      gameList: [
        {
          imgUrl:
            '//preview.qiantucdn.com/paixin/82/34/69/51M58PICaR758PICr96S7hyCF_PIC2018.jpg!qt324new_nowater'
        }
      ]
    }
  }
}
</script>

<style scoped>
.mine {
  height: 100%;
  background: #f8f8f8;
}

.mine-header {
  width: 100%;
  height: 250px;
  position: fixed;
}

.mine-header img {
  width: 100%;
  height: 100%;
}

.mine-main {
  padding: 0 20px;
  padding-top: 210px;
  padding-bottom: 80px;
  overflow-y: scroll;
  position: relative;
}

.mine-user {
  background: #fff;
  width: 100%;
  height: 190px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 3px 8px #e0e0e0;
  padding: 10px 20px;
  box-sizing: border-box;
}

.mine-user-header {
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.mine-user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #e50112;
}

.mine-user-info {
  margin-left: 15px;
}

.mine-user-info-name {
  font-size: 18px;
  font-weight: bold;
}

.mine-user-info-grade {
  margin-top: 5px;
  height: 18px;
  width: 45px;
  border: 1px solid #e50112;
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
  color: #e50112;
  line-height: 21px;
}

.mine-user-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 15px;
}

.mine-user-content-item img {
  width: 45px;
}

.mine-user-content-item div:nth-child(2) {
  margin: 8px 0;
  font-size: 20px;
}
.mine-user-content-item div:nth-child(3) {
  font-size: 12px;
  color: #999;
}

.mine-service {
  margin: 15px 0;
  height: 120px;
  background: #fff;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 3px 8px #e0e0e0;
  padding: 10px 20px;
  box-sizing: border-box;
}

.mine-service-title {
  font-size: 15px;
  font-weight: 500;
}

.mine-service-list {
  margin-top: 5px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #999;
  text-align: center;
}

.mine-service-list-item img {
  width: 35px;
  margin-bottom: 5px;
}

.mine-game {
  height: 170px;
}

.mine-game-title {
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
}

.mine-game-list {
  height: 120px;
  width: 100%;
  overflow-x: scroll;
}

.mine-game-list-item {
  border-radius: 5px;
  margin: 0 8px;
  height: 120px;
}

.mine-game-list-item img {
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
</style>