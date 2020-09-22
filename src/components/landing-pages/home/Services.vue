<template>
    <!-- Start IoT Why Choose Us Area -->
    <section class="iot-why-choose-us ptb-80 pb-0">
        <div class="container">
            <div class="section-title">
                <h2>{{$t('WhyUsRowOne')}}</h2>
                <div class="bar"></div>
                <p>{{$t('WhyUsRowTwo')}}</p>
            </div>

            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-iot-box">
                        <div class="icon">
                            <img src="../../../assets/img/icon1.png" alt="image">
                        </div>
                        <h3>{{$t('AutomaticMatchingPlatform')}}</h3>
                        <p>{{$t('WhyUsColOne')}}</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-iot-box">
                        <div class="icon">
                            <img src="../../../assets/img/icon2.png" alt="image">
                        </div>
                        <h3>{{$t('SmartBackground')}}</h3>
                        <p>{{$t('WhyUsColTwo')}}</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-iot-box">
                        <div class="icon">
                            <img src="../../../assets/img/icon3.png" alt="image">
                        </div>
                        <h3>{{$t('SuccessGuarantee')}}</h3>
                        <p>{{$t('WhyUsColThr')}}</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div class="single-iot-box">
                        <div class="icon">
                            <img src="../../../assets/img/icon8.png" alt="image">
                        </div>
                        <h3>{{$t('SolveLegalIssues')}}</h3>
                        <p>{{$t('WhyUsColFor')}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End IoT Why Choose Us Area -->
</template>

<script>
    export default {
        name: 'WhyChooseUs'
    }
</script>
<style scoped>
    .single-iot-box {
        min-height: 461px;
    }
</style>