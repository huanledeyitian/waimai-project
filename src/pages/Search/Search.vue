<template>
  <section class="search">
    <HeaderTop title="搜索" />
    <form class="search_form" @submit.prevent="search">
      <input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyword" />
      <input type="submit" class="search_submit" />
    </form>
    <section class="list">
      <ul class="list_container">
        <a class="react">
          <div class="dealcard" data-did="10459652">
            <div class="dealcard-img imgbox" style="background: none;">
              <img
                src="//p1.meituan.net/200.0/deal/dcd57da5ef098fcd42d4da61bfec924782325.jpg@143_0_613_613a%7C267h_267w_2e_90Q"
                style="width: 100%;"
              />
            </div>
            <div class="dealcard-block-right">
              <div class="dealcard-brand single-line">好伦哥</div>

              <div class="title text-block">[五棵松]永定路店单人自助餐1人次</div>
              <div class="price">
                <span class="strong">67</span>
                <span class="strong-color">元</span>
                <span class="del">门市价：69元</span>
                <span class="line-right">已售184071</span>
              </div>
            </div>
          </div>
        </a>
        <a class="react">
          <div class="dealcard" data-did="10459652">
            <div class="dealcard-img imgbox" style="background: none;">
              <img
                src="http://p1.meituan.net/200.0/deal/9609ce7e09aa3c8b6c074d834907673e45794.jpg@107_0_426_426a%7C267h_267w_2e_100Q"
                style="width: 100%;"
              />
            </div>
            <div class="dealcard-block-right">
              <div class="dealcard-brand single-line">很久故事</div>

              <div class="title text-block">[良乡]4-5人餐，提供免费WiFi</div>
              <div class="price">
                <span class="strong">191</span>
                <span class="strong-color">元</span>
                <span class="del">门市价：281元</span>
                <span class="line-right">已售73</span>
              </div>
            </div>
          </div>
        </a>
      </ul>
    </section>

    <!-- <div class="search_none">很抱歉！无搜索结果</div> -->
  </section>
</template>

<script>
import { mapState } from "vuex";
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
export default {
  data() {
    return {
      keyword: "",
      imgBaseUrl: "http://cangdu.org:8001/img/",
      noSearchShops: false
    };
  },

  computed: {
    ...mapState(["searchShops"])
  },

  methods: {
    search() {
      // 得到搜索关键字
      const keyword = this.keyword.trim();
      // 进行搜索
      if (keyword) {
        this.$store.dispatch("searchShops", keyword);
      }
    }
  },

  watch: {
    searchShops(value) {
      if (!value.length) {
        // 没有数据
        this.noSearchShops = true;
      } else {
        // 有数据
        this.noSearchShops = false;
      }
    }
  },

  components: {
    HeaderTop
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.search {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .search_form {
    clearFix();
    margin-top: 45px;
    background-color: #fff;
    padding: 12px 8px;

    input {
      height: 35px;
      padding: 0 4px;
      border-radius: 2px;
      font-weight: bold;
      outline: none;

      &.search_input {
        float: left;
        width: 79%;
        border: 4px solid #f2f2f2;
        font-size: 14px;
        color: #333;
        background-color: #f2f2f2;
      }

      &.search_submit {
        float: right;
        width: 18%;
        border: 4px solid #ffd000;
        font-size: 16px;
        color: #fff;
        background-color: #ffd000;
      }
    }
  }

  .list {
    .list_container {
      background-color: #fff;

      .react {
        display: block;
        color: inherit;
        height: 82px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 8px 5px;
        border-top: 0.5px solid #ccc;
        border-bottom: 0.5px solid #ccc;

        .dealcard-img {
          position: absolute;
          width: 90px;
          height: 82px;
          text-align: center;
          overflow: hidden;
        }

        .dealcard-block-right {
          margin-left: 100px;
          position: relative;
          height: 82px;

          .dealcard-brand, .cinemacard .cinemacard-brand {
            padding-top: 8px;
            margin-bottom: 8px;
            font-size: 17px;
            font-weight: 400;
            color: #333;
          }

          .single-line {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .title {
            font-size: 14px;
            height: 20px;
            margin-bottom: 5px;
            color: #666;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .text-block {
            line-height: 20px;
            text-align: justify;
          }

          .price {
            position: absolute;
            width: 100%;
            bottom: 0;
            color: #666;

            .strong {
              font-size: 16px;
              color: #F60;
            }

            .strong-color {
              font-size: 12px;
              color: #F60;
            }

            .line-right {
              position: absolute;
              top: 4px;
              right: 0;
              font-size: 12px;
            }

            .del {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .search_none {
    margin: 0 auto;
    color: #333;
    background-color: #fff;
    text-align: center;
    margin-top: 0.125rem;
  }
}
</style>