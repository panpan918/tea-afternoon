<template>
  <div class="about">
    <h1>This is an about page</h1>
    <better></better>
  </div>
</template>
<script>
import better from "@/components/nav-b.vue"
export default {
  data(){
    return{

    }
  },
  components:{
    better
  }
}
</script>
<style scoped>
  .about{
    width:100%;
    height:500px;
    background: rgb(137,137,137);
  }
  .about>h1{
    background: gray;
    /* width:80%; */
    height:100px;
  }
</style>
