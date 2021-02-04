<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="(item, index) in navList"
      :key="index"
      :icon="item.icon"
      @click="jumpTo(item.link)"
    >
      {{ item.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      navList: [
        {
          link: '/',
          name: '首页',
          icon: 'home-o'
        },
        {
          link: '/goods',
          name: '点餐',
          icon: 'search'
        },
        {
          link: '/order',
          name: '订单',
          icon: 'friends-o'
        },
        {
          link: '/mine',
          name: '我的',
          icon: 'setting-o'
        }
      ]
    }
  },
  methods: {
    jumpTo(route) {
      this.$router.push(route)
    }
  }
}
</script>