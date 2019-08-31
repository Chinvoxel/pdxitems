<template>
  <div class="threeSection">
    <div class="rlThree">
      <div class="sechead3">
        <h5>最近热门电视剧</h5>
        <a href="#">热门</a>
        <a href="#">国产剧</a>
        <a href="#">综艺</a>
        <a href="#">日剧</a>
        <a href="#">韩剧</a>
        <a href="#">日本动画</a>
        <a href="#">纪录片</a>
        <div class="clickmune3">
          <div class="swiper-right3">
            <span class="fa fa-chevron-right"></span>
          </div>
          <div class="swiper-left3">
            <span class="fa fa-chevron-left"></span>
          </div>
        </div>
      </div>
      <hr />
       <div class="swiper-container" id="swiper3">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item5 in tvPlay" :key="item5">
            <ul class="hotTv">
              <li
                v-for="(item4,index4) in hotTv.slice(0,10)"
                :key="index4"
              >
                <a href="#">
                  <img :src="item4.subject.images.small" />
                </a>
                 <a href="#" class="title">
                  {{item4.title}}
                  <span>{{item4.subject.rating.average}}</span>
                </a>
                <button type="button" class="btn btn-primary btn-sm">选座购票</button>
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
      tvPlay: [],
      hotTv: []
    };
  },
  mounted() {
    this.getInfo3();
    this.mySwiper3();
  },
  methods: {
    getInfo3() {
      this.$http
        .jsonp(
          "http://api.douban.com/v2/movie/us_box?apikey=0df993c66c0c636e29ecbb5344252a4a"
        )
        .then(data => {
          this.hotTv = data.body.subjects;
          for (var i = 1; i <= this.hotTv.length / 10; i++) {
            this.tvPlay.push(i);
            this.$nextTick(() => {
              this.mySwiper3();
            });
          }
        });
    },
    mySwiper3() {
      let mySwiper = new Swiper("#swiper3", {
        direction: "horizontal", //翻转方向
        slidesPerView: 1,
        speed: 1000,
        opserver: true,
        prevButton: ".swiper-left3",
        nextButton: ".swiper-right3",
        loop:false,
        autoplay: 15000,    
      });
    }
  }
};
</script>

<style lang="less">
.threeSection {
  .rlThree {
    margin-right: 40px;
    width: 675px;
    margin-bottom: 36px;
    .sechead3 {
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
      }
      .clickmune3 {
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
          height: 470px;
          .hotTv {
            width: 675px;
            height: 470px;
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
                img {
                  width: 115px;
                  height: 160px;
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