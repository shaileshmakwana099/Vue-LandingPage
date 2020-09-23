<template>
    <!-- Start Main Banner -->
    <div class="main-banner">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="col-lg-5">
                            <div class="hero-content">
                                <h2>{{$t('BannerFormTxtOne')}}</h2>
                                <h2 style="white-space: pre-line">{{$t('BannerFormTxtTwo')}}</h2>
                                <b-row>
                                    <b-col >
                                        <span class="custom_span">{{$t('TvpV')}}</span>
                                    </b-col>
                                    <b-col>
                                        <span class="custom_span">{{$t('Tvp')}}</span>
                                    </b-col>
                                    <b-col>
                                        <span class="custom_span">{{$t('Bud')}}</span>
                                    </b-col>
                                </b-row>
                                <p class="mt-2">{{$t('BannerPlatformTxt')}}</p>
                                
                                <a href="#" class="btn btn-primary">{{$t('QuoteNow')}}</a>
                            </div>
                        </div>

                        <div class="col-lg-5 offset-lg-1">
                            <div class="banner-form ml-3">
                                <form>

                                        <vs-tabs>
                                            <vs-tab :label="$t('RFQ')">
                                                <RFQ />
                                            </vs-tab>
                                            <vs-tab :label="$t('RegisterAsSupplier')">
                                                <register-as-supplier />
                                            </vs-tab>
                                        </vs-tabs>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shape1"><img src="../../../assets/img/shape1.png" alt="shape"></div>
        <div class="shape2 rotateme"><img src="../../../assets/img/shape2.svg" alt="shape"></div>
        <div class="shape3"><img src="../../../assets/img/shape3.svg" alt="shape"></div>
        <div class="shape4"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape5"><img src="../../../assets/img/shape5.png" alt="shape"></div>
        <div class="shape6 rotateme"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape7"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape8 rotateme"><img src="../../../assets/img/shape2.svg" alt="shape"></div>
    </div>
    <!-- End Main Banner -->
</template>

<script>
    import RFQ from './banner/RFQ.vue'
    import RegisterAsSupplier from "./banner/RegisterAsSupplier";

export default {
    name: 'Banner',
    components:{
        RegisterAsSupplier,
        RFQ
    },
}
</script>
<style scoped>
    .custom_span {
        border:2px solid;
        border-color: #72A9DB !important;
        padding-top: 1px;
        padding-bottom: 1px;
        color: #74AF4D;
        display: inherit;
        text-align: center;
    }
    .con-tab-ejemplo {
        min-height: 500px;
    }
</style>
