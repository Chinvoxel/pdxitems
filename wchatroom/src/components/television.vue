<template>
  <div class="maincontent">
    <div class="television">
      <oneSection></oneSection>
      <hot-movie></hot-movie>
      <tv-play></tv-play>
    </div>
    <div class="article">
      <hot-link></hot-link>
    </div>
  </div>
</template>

<script>
import oneSection from "./oneSection.vue";
import hotMovie from "./hotMovie.vue";
import tvPlay from "./tvPlay.vue";
import hotLink from "./hotLink.vue";

export default {
  components: {
    oneSection: oneSection,
    hotMovie: hotMovie,
    tvPlay: tvPlay,
    hotLink: hotLink
  }
};
</script>

<style lang="less">
.maincontent {
  color: var(--gray-dark);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  .television {
    width: 675px;
    margin-right: 60px;
  }
  .article{
    width: 300px;
  }
}
</style>
