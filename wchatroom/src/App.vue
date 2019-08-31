<template>
  <div id="box">
    <topBar></topBar>
    <topHeader></topHeader>
    <television></television>
    <recommend></recommend>
  </div>
</template>

<script>
import topBar from "./components/topBar.vue";
import topHeader from './components/topHeader.vue';
import oneSection from './components/oneSection.vue';
import television from './components/television.vue';
import recommend from './components/recommend.vue'


export default {
  components: {
    topBar: topBar,
    topHeader:topHeader,
    oneSection:oneSection,
    television:television,
    recommend:recommend
  }
};

</script>

<style lang="less">
  #box{
    min-width: var(--breakpoint-xl);
  }
</style>
