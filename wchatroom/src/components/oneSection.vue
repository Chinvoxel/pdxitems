<template>
  <div class="oneSection">
    <div class="rlOne">
      <div class="sechead">
        <h5>正在热映</h5>
        <a href="#">全部正在热映>></a>
        <a href="#">即将上映>></a>
        <div class="clickmune">
          <div class="swiper-right1">
            <span class="fa fa-chevron-right"></span>
          </div>
          <div class="swiper-left1">
            <span class="fa fa-chevron-left"></span>
          </div>
        </div>
      </div>
      <hr />
      <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in listLen" :key="item">
            <ul class="oneMovies">
              <li
                v-for="(item,index2) in movies.slice(listLen[item]*5-10,listLen[item]*5-5)"
                :key="index2"
              >
                <a href="#">
                  <img :src="item.images.small" />
                </a>
                <p v-text="item.title"></p>
                <div class="rating">
                  <span class="star">☆☆☆☆☆</span>
                  <span>{{item.rating}}</span>
                </div>
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
      listLen: [],
      movies: []
    };
  },
  mounted() {
    this.getInfo();
    this.mySwiper();
  },
  methods: {
    getInfo() {
      this.$http
        .jsonp(
          "http://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a"
        )
        .then(data => {
          this.movies = data.body.entries;
          for (var i = 1; i <= this.movies.length / 5; i++) {
            this.listLen.push(i);
            this.$nextTick(() => {
              this.mySwiper();
            });
          }
        });
    },
    mySwiper() {
      let mySwiper = new Swiper("#swiper", {
        direction: "horizontal", //翻转方向
        slidesPerView: 1,
        speed: 1000,
        opserver: true,
        prevButton: ".swiper-left1",
        nextButton: ".swiper-right1",
        loop: true,
        autoplay: 10000
      });
    }
  }
};
</script>

<style lang="less">
.oneSection {
  .rlOne {
    // margin-right: 40px;
    width: 675px;
    margin-bottom: 36px;
    .sechead {
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
        text-decoration: none;
        &:hover {
          background: rgb(19, 104, 201);
          color: aliceblue;
        }
      }
      .clickmune {
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
      height: 250px;
      display: flex;

      .swiper-wrapper {
        .swiper-slide {
          width: 675px;
          height: 250px;
          .oneMovies {
            width: 675px;
            height: 250px;
            display: flex;
            padding: 0;
            li {
              text-align: center;
              width: 115px;
              height: 250px;
              margin-bottom: 20px;
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
              p {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin-bottom: 3px;
              }
              .rating {
                span {
                  color: var(--yellow);
                  &:before {
                    content: "";
                    position: absolute;
                  }
                }
              }
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