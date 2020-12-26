<template lang="pug">
Teleport(to="body")
  #opening
    h1
      span Hi, I'm Austin
    h1
      span Welcome to my page
    .button-wrap
      button(@click="handleOnSlide")
        i.icon-home
      .plus
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { TimelineLite, Power1, Back, Elastic, Expo } from 'gsap'

export default defineComponent({
  name: 'OpeningSlide',
  setup () {
    const tl = new TimelineLite({
      defaults: {
        ease: Power1.easeOut
      }
    })
    onMounted(() => {
      const intro = '#opening h1 span'
      const home = '#opening .button-wrap button'
      const plus = '#opening .button-wrap .plus'
      tl.to(intro, {
        y: '0%',
        duration: 1,
        stagger: 0.25
      })
      tl.to(home, {
        y: '0%',
        opacity: 1,
        duration: 1
      }, '-=0.5')
      tl.to(home, 0.4, {
        scale: 0.8,
        rotation: 16,
        ease: Back.easeOut.config(1.7)
      })
      tl.to(plus, 0.8, {
        scale: 0.9,
        opacity: 1
      }, '-=0.6')
      tl.to(home, 1.2, {
        scale: 1,
        rotation: '-=16',
        ease: Elastic.easeOut.config(2.5, 0.5)
      })
      tl.to(plus, 1.1, {
        scale: 3,
        opacity: 0,
        ease: Expo.easeOut
      }, '-=1.2')
    })
    const handleOnSlide = () => {
      tl.to('#opening', {
        y: '-100%',
        duration: 1
      })
    }
    return {
      handleOnSlide
    }
  }
})
</script>
<style lang="scss" scoped>
#opening,
#slider {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#opening{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  color: #fff;
  z-index: 1000;
  h1 {
    display: block;
    overflow: hidden;
    span {
      display: inline-block;
      transform: translateY(100%);
    }
  }
  .button-wrap {
    position: relative;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #272727;
      border: 1px solid white;
      outline: 0;
      opacity: 0;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      transform: translateY(100%);
      cursor: pointer;
      i {
        font-size: 24px;
        color: #fff;
      }
    }
    .plus {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -50px;
      margin-left: -50px;
      background: rgba(255, 255, 255, 0.1);
      height: 100px;
      width: 100px;
      border-radius: 50%;
      opacity: 0;
      transform: scale(0);
      z-index: 1;
      pointer-events: none;
    }
  }
}
</style>
