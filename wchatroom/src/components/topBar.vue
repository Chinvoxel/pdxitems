<template>
  <div class="topbar">
    <ul class="m-topbar">
      <div class="m-logo">
        <span class="fa fa-google-plus fa-lg"></span>
      </div>
      <li v-for="item in list" :key="item">
        <a href="#">{{item}}</a>
      </li>
      <div class="m-search">
        <input type="search" v-model="msg" placeholder="输入电影名" />
        <span class="search-logo fa fa-search fa-1x" @click.self="search(msg)"></span>
      </div>

      <li>
        <a href="#">注册</a>
      </li>
      <li class="m-login">
        <div class="login-face">
          <img src="../img/login.jpg">
          <a href="#" @click.prevent="flag=!flag">
            <span class="fa fa-caret-down fa-2x"></span>
          </a>
        </div>

        <ul class="login-list" v-show="flag">
          <li>
            <a href="#">
              <span class="fa fa-user-o fa-1x"></span>
              <span class="login-text">我的主页</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="fa fa-envelope-open-o fa-1x"></span>
              <span class="login-text">我的消息</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="fa fa-google fa-1x"></span>
              <span class="login-text">我的等级</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="fa fa-star-o fa-1x"></span>
              <span class="login-text">我的会员</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="fa fa-vcard fa-1x"></span>
              <span class="login-text">实名认证</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="fa fa-sun-o fa-1x"></span>
              <span class="login-text">个人设置</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="fa fa-toggle-off fa-1x"></span>
              <span class="login-text">切换账号</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      flag: false,
      msg: "",
      list: ["派大星", "发现电影", "我的观影", "好友推荐", "商城"],
      record:[]
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    search(msg) {
      var newList = [];
      this.record.forEach(item => {
        if (item.name.includes(leywords)) {
          newList.push(item);
        }
      });
      return newList;
    },
    
    getInfo(){
      this.$http.jsonp('http://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a').then(function(res){
        this.record=res.body;
      })
    }
  }
};
</script>

<style lang='less' scoped>
.topbar {
  margin: 0px;
  padding: 0px;
  outline: none;
  text-align: center;
  color: var(--white);
  background: var(--gray-dark);

  .m-topbar {
    padding-right: 40px;
    height: 3rem;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-bottom: 0;
    li {
      align-items: center;
      width: 10%;
      list-style: none;
      margin-bottom: 4px;
      a {
        text-decoration: none;
        color: var(--white);
      }
    }
    .m-search {
      position: relative;
      display: flex;
      align-items: center;
      input {
        -webkit-appearance: none;
        padding-left: 5px;
        border-radius: 1rem;
        border: none;
        width: 100%;
        &:focus {
          outline: none;
        }
      }
      .search-logo {
        position: absolute;
        right: 10px;
        color: var(--gray-dark);
      }
    }
    .m-login {
      position: relative;
      display: flex;
      flex-flow:column wrap ;
      .login-face {
        box-sizing: border-box;
        padding-top: 10px;
        display: flex;
        img {
          display: block;
          border-radius: 15px;
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }
        a {
          span {
            color: var(--gray);
          }
        }
      }
      .login-list {
        z-index: 999;
        background: var(--gray-dark);
        padding: 0;
        position: absolute;
        width: 150px;
        top: 45px;
        height: 190px;
        li {
          box-sizing: border-box;
          padding-left: 25px;
          width: 130px;
          a {
            text-align: center;
            .login-text {
              margin-left: 15px;
              color: rgb(201, 195, 195);
              font-size: 0.8rem;
            }
            .fa {
              color: var(--gray);
            }
          }
        }
      }
    }
    .m-logo {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: var(--red);
      span {
        vertical-align: -webkit-baseline-middle;
      }
    }
  }
}
</style>