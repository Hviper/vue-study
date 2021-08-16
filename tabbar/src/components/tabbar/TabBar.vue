<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"TabBar"

};
</script>

<style>



#tab-bar {
  flex: 1;
  display: flex;
  text-align: center;
  display: flex;
  background-color: #a04242;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>