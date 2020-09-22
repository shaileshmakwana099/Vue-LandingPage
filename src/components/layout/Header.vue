<template>
    <!-- Start Navbar Area -->
    <header id="header" :class="['headroom navbar-style-two', {'is-sticky': isSticky}]">
        <div class="startp-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../assets/img/logo.png" alt="logo" />
                    </router-link>

                    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav nav ml-auto">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">{{ $t('Home') }}</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/faq" class="nav-link">{{$t('FAQ')}}</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/blog" class="nav-link">{{$t('Blog')}}</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/successful-case" class="nav-link">{{$t('SuccessfulCase')}}</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about-us" class="nav-link">{{$t('AboutUs')}}</router-link>
                            </li>
                        </ul>
                    </b-collapse>
                    <div class="others-option">
                        <i18n />
                        <a href="#" class="btn btn-light" style="margin-left: 10px">{{$t('RFQ')}}</a>
                        <a href="#" class="btn btn-primary">{{$t('Login')}}</a>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    <!-- End Navbar Area -->
</template>

<script>
    import i18n from './i18n'

    export default {
        name: 'Header',
        data(){
            return {
                isSticky: false
            }
        },
        components:{
          i18n
        },
        mounted() {
            const that = this;
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY;
                // eslint-disable-next-line no-console
                if(scrollPos >= 300){
                    that.isSticky = true;
                } else {
                    that.isSticky = false;
                }
            })
        },

        computed: {
            shoppingCart(){
                return this.$store.state.cart;
            }
        }
    }
</script>