<template>
<!-- <div> -->
    <div class="tab-bar-item" @click="itemClick">
        <slot name="item-icon"></slot>
        <slot name="item-text"></slot>
    </div>
<!-- </div> -->
</template>

<script>
export default {
  props:{
     path: String
  },
  methods : {
    itemClick:function(){
      this.$router.replace(this.path);
    }
  }
};

</script>

<style>
.tab-bar-item {
  flex: 1;

  height: 49;
}


</style>