<template>
  <div class="finally">
    <div class="recommend">
      <div class="sechead4">
        <h5>热门推荐</h5>
        <div class="clickmune4">
          <div class="swiper-right4">
            <span class="fa fa-chevron-right"></span>
          </div>
          <div class="swiper-left4">
            <span class="fa fa-chevron-left"></span>
          </div>
        </div>
      </div>
      <div class="reswiper">
        <div class="swiper-container" id="swiper4">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in reimg" :key="index">
              <div class="once">
                <div class="reLeft">
                  <img :src="item.imgSrc" alt />
                </div>
                <div class="reRight">
                  <h5>
                    <a href="#" v-text="item.title"></a>
                  </h5>
                  <p>
                    <a href="#" v-text="item.text"></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination" id="page1"></div>
        </div>
      </div>
    </div>
    <div class="welcome">
      <div class="secTitle">
        <h5>最受欢迎的影评</h5>
        <a href="#">更多人们影评>></a>
        <a href="#">新片影评>></a>
      </div>
      <div class="secWelcome" v-for="(item,index) in welList" :key="index">
        <div class="flex_rl">
          <div class="secImg">
            <img :src="item.imgSrc" />
          </div>
          <div class="write">
            <h5>
              <a href="#" v-text="item.title"></a>
            </h5>
            <p>
              <a href="#" v-text="item.title_small" class="small"></a>
            </p>
            <p>
              <a href="#" v-text="item.text"></a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
        <div class="span">
           <span> © 2005－2019 douban.com, all rights reserved 北京豆网科技有限公司</span>
        </div>
        <div class="foo-a">
          <a href="#">关于派大星·</a>
          <a href="#">在派大星工作·</a>
          <a href="#">联系我们·</a>
          <a href="#">法律声明·</a>
          <a href="#">帮助中心·</a>
          <a href="#">移动应用·</a>
          <a href="#">派大星广告</a>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reimg: [
        {
          imgSrc: require("../img/r1.jpg"),
          title: "爱德华·诺顿新作《布鲁克林秘案》中字预告",
          text:
            "爱德华·诺顿自导自演，布鲁斯·威利斯、威廉·达福、古古·姆巴塔-劳、亚历克·鲍德温主演黑色犯罪悬疑片！"
        },
        {
          imgSrc: require("../img/r2.jpg"),
          title: "斯嘉丽·约翰逊主演《婚姻故事》首曝预告",
          text:
            "斯嘉丽·约翰逊与亚当·德赖弗主演，《弗兰西丝·哈》导演诺亚·鲍姆巴赫新作！"
        },
        {
          imgSrc: require("../img/r3.jpg"),
          title: "恐怖喜剧《准备好了没》中字预告",
          text: "新婚夜秒变惊魂夜！"
        },
        {
          imgSrc: require("../img/r4.jpg"),
          title: "《了不起的麦瑟尔夫人》第三季首曝预告",
          text: "原班人马回归出演，12月6日回归!"
        },
        {
          imgSrc: require("../img/r5.jpg"),
          title: "招募 | 大师课好莱坞电影市场之旅",
          text: "亲赴洛杉矶，好莱坞电影大师面对面！"
        },
        {
          imgSrc: require("../img/r6.jpg"),
          title: "甜茶&罗南&艾玛主演《小妇人》中字预告",
          text:
            "《伯德小姐》导演格蕾塔·葛韦格与甜茶、罗南再次合作，圣诞档北美上映，内地有望引进！"
        },
        {
          imgSrc: require("../img/r7.jpg"),
          title: "伍迪·艾伦《纽约的一个雨天》中字预告",
          text:
            "“甜茶”蒂莫西·柴勒梅德、艾丽·范宁、赛琳娜·戈麦斯、裘德·洛、迭戈·卢纳、列维·施瑞博尔等全明星主演爱情喜剧，导演伍迪·艾伦写给纽约的情书！"
        },
        {
          imgSrc: require("../img/r8.jpg"),
          title: "2019~2020HBO新剧新季混剪预告",
          text:
            "《我的天才女友》第二季、《西部世界》第三季、裘德·洛&约翰·马尔科维奇主演《新教宗》、妮可·基德曼&休·格兰特主演限定剧《无所作为》…HBO神剧追不停，美剧迷过年了！"
        },
        {
          imgSrc: require("../img/r9.jpg"),
          title: "高分英剧《浴血黑帮》第五季定档8月25日",
          text:
            "基里安·墨菲、海伦·麦克洛瑞、安雅·泰勒-乔伊、艾丹·吉伦、山姆·克拉弗林主演！"
        }
      ],
      welList: [
        {
          imgSrc: require("../img/w1.jpg"),
          title: "《小偷家族》哪个地方让你动情了？",
          title_small: "少一个 评论 《小偷家族》",
          text:
            "等了很久，终于刷了是枝裕和的《小偷家族》。满分的满意。 看完后也终于理解，之前让我很意外的，很多日本人觉得是枝裕和的金棕榈奖，是国家的耻辱：为什么要向全世界输出日本的小偷形象？ 为了反驳这种论调，说... (全文)"
        },
        {
          imgSrc: require("../img/w2.jpg"),
          title: "就没人说不好了吗？翻了好久全说好的",
          title_small: "江户川的哀 评论 《一出好戏》",
          text:
            "几点想说的，不吐不快 1、黑色幽默，荒诞片。要么就荒诞到底，如《蛮荒故事》，而不要是喜剧片、灾难片、爱情片、科幻片、伦理片等的结合体 2、我就是想看个喜剧，有这么难吗？尬的笑点，尬的套路。第一次在电影... (全文)"
        },
        {
          imgSrc: require("../img/w3.jpg"),
          title: "海街日记可以说是镰仓版的《小森林》了！",
          title_small: "福桃九分饱 评论 《海街日记》",
          text:
            "《海街日记》算是一部镰仓版的《小森林》，四姐妹守着镰仓的老房子，一起经历四季流转，在一个个食物场景下揉和进了生活中的温情瞬间。 梅酒，就像是《海街日记》的另一个主角，几个姐妹喝完梅酒后互诉衷肠，姐妹... (全文)"
        },
        {
          imgSrc: require("../img/w4.jpg"),
          title: "爱与你",
          title_small: "打死不吃西红柿 评论 《恋恋笔记本》 ",
          text:
            "我们总说不懂爱情，但是面对别人的真爱却总能产生共鸣。 对啊，我们只是没能有机会经历这样的爱情， 但我们都相信，如果我爱的是你，兜兜转转发现还是你，并且只能是你。有时候爱情就是这么奇妙，猝不及防的降临... (全文)"
        }
      ]
    };
  },
  mounted() {
    this.mySwiper4();
  },
  methods: {
    mySwiper4() {
      let mySwiper = new Swiper("#swiper4", {
        direction: "horizontal", //翻转方向
        slidesPerView: 1,
        speed: 1000,
        opserver: true,
        prevButton: ".swiper-left4",
        nextButton: ".swiper-right4",
        loop: true,
        autoplay: 15000,
        pagination: "#page1",
        paginationClickable: true,
        paginationType: "fraction"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.finally {
  color: var(--gray-dark);
  padding: 0;
  box-sizing: border-box;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
  .recommend {
    position: relative;
    // margin-right: 40px;
    width: 675px;
    margin-bottom: 36px;
    .sechead4 {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      .clickmune4 {
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
    .reswiper {
      .once {
        display: flex;
        .reLeft {
          img {
            width: 350px;
          }
        }
        .reRight {
          box-sizing: border-box;
          margin: auto 0;
          margin-left: 25px;
          h5 {
            a {
              font-size: 18px;
              color: var(--dark);
              text-decoration: none;
            }
          }
          p {
            line-height: 20px;         
            a {
              font-size: 13px;
              color: var(--gray);
              text-decoration: none;
            }
          }
        }
      }
      #page1 {
        position: absolute;
        bottom: 220px;
        left: 620px;
        width: 40px;
        height: 20px;
        line-height: 20px;
        color: var(--gray);
      }
    }
  }
  .welcome {
    width: 675px;
    .secTitle {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      h5 {
        margin-right: 20px;
      }
      a {
        margin-right: 10px;
        text-decoration: none;
        font-size: 14px;
      }
    }
    .secWelcome {
      margin-bottom: 40px;
      width: 675px;
      .flex_rl {
        display: flex;
        // align-items: center;
        .secImg {
          margin-right: 20px;
          img {
            width: 68px;
            height: 95px;
          }
        }
        .write {
          h5 {
            a {
              text-decoration: none;
              color: #37a;
              font-size: 18px;
            }
          }
          p {
            margin-bottom: 10px;
            a {
              text-decoration: none;
              color: var(--gray-dark);
              font-size: 13px;
              
            }
          }
          .small{
            color: var(--gray);
          }
        }
      }
    }
  }
  .footer{
    display: flex;
    justify-content:space-between;
    .span{
      width: 377px;
      span{
        color: var(--gray);
        font-size: 12px;
      }
    }
    .foo-a{
      a{
        text-decoration: none;
        color:#37a;
        font-size: 12px;
      }
    }
  }
}
</style>