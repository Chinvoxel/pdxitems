<template>
  <div class="hotLink">
    <div class="answer">
      <a href="#">派大星电影评分</a>
    </div>
    <div class="hotActive">
      <h6>电影活动 .....</h6>
      <a href="#">夏末大促！派大星影人PRO大师课限时特价</a>
    </div>
    <div class="hotBillboard">
      <div class="billHead">
        <span>一周口碑榜</span>
        <a href="#">更多榜单>></a>
      </div>
      <div class="billBody">
        <ol>
          <li v-for="(top,index) in bill.slice(0,10)" :key="index">
            <span>{{index}}</span>
            <a href="#">{{top.title}}</a>
          </li>
        </ol>
      </div>
      <div class="billList">
        <h6>热门豆列</h6>
        <p>
          <a href="#">in 黑色电影 : 历史、批评与风格</a>
          <span>1推荐</span>
        </p>
        <p>
          <a href="#">平成年代的日本電影135</a>
          <span>3推荐</span>
        </p>
      </div>
    </div>
    <div class="billContact">
      <h6>合作联系</h6>
      <p>电影合作邮箱:1350106846@qq.com</p>
      <p>电视剧合作邮箱:1350106846@qq.com</p>
      <p>派大星影人合作邮箱:1350106846@qq.com</p>
      <h6 class="contact">关注我们</h6>
      <ul class="billApp">
        <li>
          <a href="#">
            <img src="../img/home_weibo.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../img/home_weixin.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../img/home_film_pro@2x.jpg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../img/home_club@2x.jpg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../img/bite_me@2x.jpg" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bill: []
    };
  },
  mounted() {
    this.getInfo2();
  },
  methods: {
    getInfo2() {
      this.$http
        .jsonp(
          "http://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a"
        )
        .then(data => {
          this.bill = data.body.subjects;
        });
    }
  }
};
</script>

<style lang="less">
.hotLink {
  width: 300px;
  .answer {
    height: 43px;
    width: 300px;
    box-sizing: border-box;
    padding: 12px 18px;
    padding-right: 0;
    margin-bottom: 40px;
    a {
      font-size: 12px;
      text-decoration: none;
      color: rgb(19, 104, 201);
      text-decoration: none;
      &:hover {
        background: rgb(19, 104, 201);
        color: aliceblue;
      }
    }
  }
  .hotActive {
    height: 43px;
    width: 300px;
    box-sizing: border-box;
    padding: 12px 18px;
    padding-right: 0;
    margin-bottom: 40px;
    h6 {
      color: var(--green);
    }
    a {
      font-size: 12px;
      text-decoration: none;
      color: rgb(19, 104, 201);
      text-decoration: none;
      &:hover {
        background: rgb(19, 104, 201);
        color: aliceblue;
      }
    }
  }
  .hotBillboard {
    margin-bottom: 70px;
    .billHead {
      margin-bottom: 30px;
      span {
        font-size: 18px;
      }
      a {
        font-size: 14px;
        margin-left: 10px;
        color: rgb(19, 104, 201);
        text-decoration: none;
        &:hover {
          background: rgb(19, 104, 201);
          color: aliceblue;
        }
      }
    }
    .billBody {
      ol {
        padding-left: 0px;
        list-style: none;
        li {
          a {
            display: inline-block;
            margin-left: 20px;
            margin-bottom: 12px;
            font-size: 13px;
            color: rgb(19, 104, 201);
            text-decoration: none;
            &:hover {
              background: rgb(19, 104, 201);
              color: aliceblue;
            }
          }
        }
      }
    }
    .billList {
      h6 {
        margin-bottom: 40px;
      }
      p {
        margin-bottom: 30px;
        a {
          font-size: 13px;
          margin-right: 50px;
          color: rgb(19, 104, 201);
          text-decoration: none;
          &:hover {
            background: rgb(19, 104, 201);
            color: aliceblue;
          }
        }
      }
      span {
        font-size: 13px;
        color: var(--gray);
      }
    }
  }
  .billContact {
    h6 {
      margin-bottom: 40px;
    }
    p {
      font-size: 13px;
      padding: 0;
      margin: 0;
      margin-bottom: 8px;
    }
    .contact {
      margin: 30px 0;
    }
    .billApp {
      padding: 0;
      display: flex;
      li {
        margin: 0 auto 15px auto;
        list-style: none;
        a {
          img {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
}
</style>