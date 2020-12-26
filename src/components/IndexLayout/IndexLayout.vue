.<template lang="pug">
#index-layout
  Header
  main#main
    router-view
OpeningSlide
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../Header'
import OpeningSlide from '../OpeningSlide'

export default defineComponent({
  name: 'IndexLayout',
  components: {
    Header,
    OpeningSlide
  }
})
</script>
<style lang="scss" scoped>
#index-layout {
  position: relative;
  width: 100%;
  height: 100%;

  main {
    width: 100%;
    height: 100%;
    background: url('../../assets/image/main-bg.jpeg');
    background-size: cover;
  }
}

#slider {
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
