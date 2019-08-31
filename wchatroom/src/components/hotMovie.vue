<template>
  <div class="twoSection">
    <div class="rlTwo">
      <div class="sechead1">
        <h5>经典电影聚集</h5>
        <a href="#">热门</a>
        <a href="#">最新</a>
        <a href="#">豆瓣高分</a>
        <a href="#">冷门佳片</a>
        <a href="#">华语</a>
        <a href="#">欧美</a>
        <a href="#">韩国</a>
        <a href="#">日本</a>
        <div class="clickmune1">
          <div class="swiper-right2">
            <span class="fa fa-chevron-right"></span>
          </div>
          <div class="swiper-left2">
            <span class="fa fa-chevron-left"></span>
          </div>
        </div>
      </div>
      <hr />
      <div class="swiper-container" id="swiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="hotMovies">
              <li v-for="(item1,index3) in hot.slice(0,10)" :key="index3">
                <a href="#">
                  <img :src="item1.images.small" />
                </a>
                <a href="#" class="title">
                  {{item1.title}}
                  <span>{{item1.rating.average}}</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul class="hotMovies">
              <li v-for="(item1,index3) in hot.slice(10,20)" :key="index3">
                <a href="#">
                  <img :src="item1.images.small" />
                </a>
                <a href="#" class="title">
                  {{item1.title}}
                  <span>{{item1.rating.average}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotLen: [],
      hot: []
    };
  },
  mounted() {
    this.getInfo1();
    this.mySwiper1();
  },
  methods: {
    getInfo1() {
      this.$http
        .jsonp(
          "http://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a"
        )
        .then(data => {
          this.hot = data.body.subjects;
          for (var i = 1; i <= this.hot.length / 10; i++) {
            this.hotLen.push(i);
            this.$nextTick(() => {
              this.mySwiper1();
            });
          }
        });
    },
    mySwiper1() {
      let mySwiper = new Swiper("#swiper2", {
        direction: "horizontal", //翻转方向
        slidesPerView: 1,
        speed: 1000,
        opserver: true,
        prevButton: ".swiper-left2",
        nextButton: ".swiper-right2",
        loop: true,
        autoplay: 15000
      });
    }
  }
};
</script>

<style lang="less">
.twoSection {
  .rlTwo {
    // margin-right: 40px;
    width: 675px;
    margin-bottom: 36px;
    .sechead1 {
      position: relative;
      display: flex;
      align-items: center;
      h5 {
        margin-right: 20px;
      }
      a {
        margin-right: 10px;
        text-decoration: none;
        font-size: 14px;
        color: var(--gray);
        text-decoration: none;
        &:hover {
          background: rgb(19, 104, 201);
          color: aliceblue;
        }
      }
      .clickmune1 {
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        width: 675px;
        flex-direction: row-reverse;
        div {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding-left: 3px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--primary);
          margin-left: 10px;
          span {
            color: var(--white);
          }
        }
      }
    }
    .swiper-container {
      width: 675px;
      display: flex;
      .swiper-wrapper {
        .swiper-slide {
          width: 675px;
          height: 410px;
          .hotMovies {
            width: 675px;
            height: 410px;
            display: flex;
            padding: 0;
            flex-wrap: wrap;
            li {
              text-align: center;
              width: 115px;
              height: 220px;
              margin-bottom: 0px;
              list-style-type: none;
              margin-right: 25px;
              a {
                display: block;
                margin-bottom: 12px;
                text-decoration: none;
                img {
                  width: 115px;
                  height: 160px;
                }
                &:hover {
                  background: rgb(19, 104, 201);
                  color: aliceblue;
                }
              }
              .title {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin-bottom: 3px;
                font-size: 12px;
                span {
                  color: var(--yellow);
                  &:before {
                    content: "";
                    position: absolute;
                  }
                }
              }
            }
            li:nth-child(5n + 5) {
              margin-right: 0;
            }
          }
        }
      }
    }

    hr {
      border-top: 1px solid rgb(177, 173, 173);
    }
  }
}
</style>