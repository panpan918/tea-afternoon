<template>
    <div>
        <van-tabbar v-model="active" class="nav-bottom">
            <van-tabbar-item icon="home-o" class="nav-a" @click="banda">首页</van-tabbar-item>
            <van-tabbar-item icon="search" class="nav-a" @click="bandb">点餐</van-tabbar-item>
            <van-tabbar-item icon="friends-o" class="nav-a" @click="bandc">订单</van-tabbar-item>
            <van-tabbar-item icon="setting-o" class="nav-a" @click="bandd">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:0
        }
    },
    methods:{
        banda:function(){
            this.$router.push({path:'/'});
        },
        bandb:function(){
            this.$router.push({path:'/about'});
        },
        bandc:function(){
            this.$router.push({path:'/order'});
        },
        bandd:function(){
            this.$router.push({path:'/mine'});
        },
    }
}
</script>
<style scoped>
    .nav-bottom{
      width:100%;
      height:100px;
      
    }
    .nav-a{
      width:25%;
      /* height:300px; */
      font-size:30px;
    }
</style>
