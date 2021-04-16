<template>
  <div class="home">
    <div class="home-content">
      <router-view></router-view>
    </div>
    <ul class="home-tabs">
      <li :class="`tabs-li ${isItem == index?'active':''}`"
          v-for="(item,index) in data"
          :key="index"
          @click="switchTab(item,index)">
        <i :class="item.icon"></i>
        <span v-text="item.span"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isItem: 0,
      data: [
        { span: '钱包', icon: 'el-icon-s-finance', path: '/home/wallet' },
        {
          span: '链上公示',
          icon: 'el-icon-platform-eleme',
          path: '/home/publicity'
        },
        { span: '积分', icon: 'el-icon-coin', path: '/home/integral' },
        { span: '我的', icon: 'el-icon-s-check', path: '/home/mine' }
      ]
    }
  },
  methods: {
    switchTab(item, index) {
      this.isItem = index
      this.$router.push({ path: item.path })
    }
  }
}
</script>

<style>
.home {
  width: 100%;
  height: 100%;
  position: relative;
}

.home-content {
  width: 100%;
  height: calc(100% - 40px);
  background: #0a0c22;
}

.home-tabs {
  width: 100%;
  height: 40px;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0d0f32;
}

.tabs-li {
  width: 25%;
  height: 80%;
  border-right: 1px solid #747474;
  color: #aaaaaa;
  display: flex;
  flex-flow: column;
}

.tabs-li:nth-child(4) {
  border-right: none;
}

.tabs-li i {
  font-size: 16px;
}

.tabs-li span {
  font-size: 14px;
}

.active {
  color: #7d8fe3;
}
</style>
