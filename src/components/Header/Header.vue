<template lang="pug">
header#header
  .logo logo
  ul.nav
    li intro
    li content
    li about me
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Header'
})
</script>
<style lang="scss" scoped>
#header {
  position: fixed;
  width: 100%;
  height: 60px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:  1rem;
  opacity: 0.7;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.2);
  transition: opacity 0.2s ease-in-out;
  z-index: 100;
  &:hover {
    opacity: 1;
  }

  .nav {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 0.5rem;
    }
  }
}
</style>
