<template>
  <div class="topHeader">
    <div class="topSearch"></div>
    <div class="topin">
      <input type="search" />
    </div>

    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide :img-src="item.imgSrc" v-for="(item,index) in slides" 
        :key="index"></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      slides: [
        {
          imgSrc: require("../img/c1.jpg")
        },
        {
          imgSrc:require("../img/c2.jpg")
        },
        {
        imgSrc: require("../img/c3.jpg")
        },
        {
         imgSrc: require("../img/c4.jpg")
        }
      ]
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style lang="less" scoped>
.topHeader {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 30px;
  .topSearch {
    width: 1200px;
    height: 100px;
    background: url("../img/bgSearch.jpg") center no-repeat;
  }
  .topin {
    position: absolute;
    width: 480px;
    left: 350px;
    top: 40px;
    input {
      width: 100%;
      border-radius: 20px;
      outline: none;
      -webkit-appearance: none;
      border: 1px solid var(--gray);
    }
  }
}
</style>