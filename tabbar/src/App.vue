<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view/>
    <tab-bar>
      
      <tab-bar-item path="/home">
        <img
          height="50"
          width="50"
          slot="item-icon"
          src="./assets/img/tabber/1.png"
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img
          height="50"
          width="50"
          slot="item-icon"
          src="./assets/img/tabber/1.png"
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img
          height="50"
          width="50"
          slot="item-icon"
          src="./assets/img/tabber/1.png"
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img
          height="50"
          width="50"
          slot="item-icon"
          src="./assets/img/tabber/1.png"
        />
        <div slot="item-text">个人</div>
      </tab-bar-item>
    </tab-bar>
    
  </div>
</template>

<script>
//引入组件
import TabBar from "./components/tabbar/TabBar.vue";
import TabBarItem from "./components/tabbar/TabBarItem.vue";
export default {
  name: "App",
  components: {
    //注册组件，然后使用，<tab-bar/>
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "./assets/css/base.css";

</style>
