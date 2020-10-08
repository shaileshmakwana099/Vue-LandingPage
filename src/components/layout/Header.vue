<template>
    <!-- Start Navbar Area -->
    <header id="header" :class="['headroom navbar-style-two', {'is-sticky': isSticky}]">
        <div class="startp-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../assets/img/logo.png" alt="logo" height="30px" />
                    </router-link>

                    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav nav ml-auto">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">{{ $t('Home') }}</router-link>
                            </li>
                            <li class="nav-item">
<!--                                <router-link @click="gotoFaq" to="/faq" class="nav-link">{{$t('FAQ')}}</router-link>-->
                                <a style="cursor: pointer" @click="gotoFaq">{{$t('FAQ')}}</a>
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
                        <a href="#" @click="RfqActive = !RfqActive" class="btn btn-light" style="margin-left: 10px">{{$t('RFQ')}}</a>
                        <a href="#" @click="loginActive = !loginActive" class="btn btn-primary">{{$t('Login')}}</a>
                        <b-modal v-model="RfqActive" style="padding-top: 150px;" hide-footer>
                            <RfqForm />
                            <vs-row class="mb-2" vs-justify="center">
                                <a href="#" @click="submit($t('ThanksSubmitRfqTitle'), $t('ThanksSubmitRfqContent'))">
                                    <img :src="paypal_img" width="275px"/>
                                </a>
                            </vs-row>
                            <p>供應商配對會於系統自動進行，我們會要求應邀的供應商於兩個工作天內回覆報價。客戶如收到供應商的報價有不正確的地方，可於後台提出問題，平台會跟進。</p>
                        </b-modal>
                        <b-modal v-model="loginActive" style="padding-top: 150px;" hide-footer>
                            <LoginForm />
                            <vs-row class="mt-4 mb-2" vs-justify="center">
                                <b-button class="btn btn-primary" @click="loginActive = !loginActive" style="width: 215px">{{$t('Login')}}</b-button>
                            </vs-row>
                        </b-modal>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    <!-- End Navbar Area -->
</template>

<script>
    import RfqForm from "../landing-pages/RfqForm";
    import LoginForm from "../landing-pages/LoginForm";
    export default {
        name: 'Header',
        data(){
            return {
                isSticky: false,
                RfqActive: false,
                loginActive: false
            }
        },
        components:{
         RfqForm, LoginForm
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
            paypal_img(){
                return require ('../../assets/img/paypal-credit-button.png')
            }
        },
        methods: {
            gotoFaq() {
                if (this.$router.currentRoute.path !== "/") {
                    this.$router.push('/')
                }
            },
            submit(title, content) {
                this.RfqActive = ! this.RfqActive
                this.$swal(title, content, "success")
                return
            }
        }
    }
</script>
<style scoped>

</style>
