<template>
    <!-- Start Blog Area -->
    <section class="blog-area ptb-80">
        <div class="container">
            <div class="section-title">
                <h2>{{$t('OneStopPlatformOperation')}}</h2>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="blog-image" align="center">
                            <img src="../../../assets/img/how-it-works/works1.png" alt="image">
                        </div>

                        <div class="blog-post-content">
                            <h3><a href="#">{{$t('HowItWorksOne')}}</a></h3>
                            <p>{{$t('HowItWorksOneTxt')}}</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="blog-image" align="center">
                            <img src="../../../assets/img/how-it-works/works2.png" alt="image">
                        </div>

                        <div class="blog-post-content">
                            <h3><a href="#">{{$t('HowItWorksTwo')}}</a></h3>
                            <p>{{$t('HowItWorksTwoTxt')}}</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div class="single-blog-post">
                        <div class="blog-image" align="center">
                            <img src="../../../assets/img/how-it-works/works3.png" alt="image">
                        </div>

                        <div class="blog-post-content">
                            <h3><a href="#">{{$t('HowItWorksThr')}}</a></h3>

                            <p>{{$t('HowItWorksThrTxt')}}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Blog Area -->
</template>

<script>
export default {
    name: 'Blog'
}
</script>
<style scoped>
    .blog-post-content {
        min-height: 225px;
    }
</style>