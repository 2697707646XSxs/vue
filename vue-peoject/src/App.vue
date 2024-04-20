<template><!-- 定义html部分 -->
  <div>
   <!--  <h1>{{ message }}</h1> -->
   <!-- <element-view></element-view> --><!-- element组件学习 -->
   <!--<emp-view></emp-view> -->
   <router-view></router-view>
  </div>
</template>
<script>/* 定义方法即js */
/* import EmpView from './views/tlias/EmpView.vue' */
// import ElementView from './views/element/ElementView.vue'
export default {
  components: {/* EmpView  *//* ElementView */ },
  data() {
    return {
      message:"Hello Vue"
    }
  },
  methods: {
    
  }
}
</script>
<style>/* 定义形式即css */

</style>
