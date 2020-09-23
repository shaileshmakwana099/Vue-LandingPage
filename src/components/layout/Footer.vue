<template>
    <!-- Start Footer Area -->
    <footer class="footer-area bg-f7fafd">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <a href="/">
                                <img src="../../assets/img/logo.png" alt="logo" />
                            </a>
                        </div>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Company</h3>
                        <ul class="list">
                            <li><router-link to="/">{{ $t('Home') }}</router-link></li>
                            <li><router-link to="/blog">{{$t('Blog')}}</router-link></li>
                            <li><router-link to="/successful-case">{{$t('SuccessfulCase')}}</router-link></li>
                            <li><router-link to="/about-us">{{$t('AboutUs')}}</router-link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Support</h3>
                        <ul class="list">
                            <li><router-link to="/faq">{{$t('FAQ')}}</router-link> </li>
                            <li><a href="#">{{$t('PrivacyPolicy')}}</a></li>
                            <li><a href="#">{{$t('Terms')}}</a></li>
                            <li><a href="#">{{$t('ContactUs')}}</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="copyright-area">
                        <p>Copyright &copy;2020 Pasona. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>

        <img src="../../assets/img/map.png" class="map" alt="map">
        <div class="shape1"><img src="../../assets/img/shape1.png" alt="shape"></div>
        <div class="shape8 rotateme"><img src="../../assets/img/shape2.svg" alt="shape"></div>
        <!-- <div class="go-top"><feather type="arrow-up"></feather></div> -->

        <back-to-top bottom="50px" right="50px">
            <div class="go-top"><feather type="arrow-up"></feather></div>
        </back-to-top>
    </footer>
    <!-- End Footer Area -->
</template>

<script>
import BackToTop from 'vue-backtotop'
export default {
    name: 'Footer',
    components: { BackToTop }
}
</script>