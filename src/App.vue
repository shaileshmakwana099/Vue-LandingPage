<template>
  <div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <Header ></Header>
    <PreLoader v-if="isLoading" />
    <router-view></router-view>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <Footer v-else></Footer>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PreLoader from './components/layout/PreLoader';
export default {
  name: 'app',
  components: {
    Header, Footer, PreLoader
  },

  data() {
    return {
      isLoading: true,
      currentUrl: ''
    }
  },

  watch: {
    '$route'(pathUrl){
      this.currentUrl = pathUrl.path;
      this.isLoading = true;
      setTimeout(() => { this.isLoading = false }, 1500);
    }
  },

  mounted() {
    this.currentUrl = window.location.pathname;
    this.$i18n.locale = 'hk';
    setTimeout(() => {
      this.isLoading = false
    }, 2000);
  }
}
</script>
