<template>
    <!-- Start Blog Area -->
    <section class="blog-area ptb-80">
        <div class="container">
            <div class="section-title">
                <h2>{{$t('BlogTitle')}}</h2>
                <div class="bar"></div>
                <p>{{$t('BlogSubTitle')}}</p>
            </div>

            <div class="row">
                <div v-for="item in myItems" :key="item.id" class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="blog-image">
                            <a href="#">
                                <img :src="imgUrl(item.img)" alt="image">
                            </a>

                            <div class="date">
                                <i data-feather="calendar"></i> {{item.date}}
                            </div>
                        </div>

                        <div class="blog-post-content">
                            <h3><a href="#">{{item.title}}</a></h3>

                            <span>by <a href="#">admin</a></span>

                            <p>{{item.content}}</p>

                            <a href="#" class="read-more-btn">Read More <feather type="arrow-right"></feather> </a>
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
        name: 'HowItWorks',
        data(){
            return {
                myItems: [
                    {
                        id: 1,
                        img: '1.jpg',
                        title: 'Jason',
                        date: '2020.1.23',
                        content: 'Jason started from 2020.1 in upwork.com and he earned one billion in one month. so How his do it?'
                    },
                    {
                        id: 2,
                        img: '1.jpg',
                        title: 'Jason',
                        date: '2020.1.23',
                        content: 'Jason started from 2020.1 in upwork.com and he earned one billion in one month. so How his do it?'
                    },
                    {
                        id: 3,
                        img: '1.jpg',
                        title: 'Jason',
                        date: '2020.1.23',
                        content: 'Jason started from 2020.1 in upwork.com and he earned one billion in one month. so How his do it?'
                    }
                ]
            }
        },
        methods: {
            imgUrl(url){
                return require('../../../assets/img/blog-section/' + url)
            }
        }
    }
</script>
<style scoped>
    h2 {
        color: #c679e3;
    }
</style>
