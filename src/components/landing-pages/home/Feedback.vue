<template>
    <!-- Start Team Area -->
    <section class="team-area repair-team-area ptb-80 bg-f9f6f6">
        <div class="container">
            <div class="section-title">
                <h2>{{$t('FeedbackTitle')}}</h2>
                <div class="bar"></div>
                <p>{{$t('FeedbackSubTitle')}}</p>
            </div>

            <div class="row">
                <div v-for="item in myItems" :key="item.id" class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-team">
                        <div class="team-image">
                            <img :src="imgUrl(item.img)" alt="image">
                        </div>

                        <div class="team-content">
                            <div class="team-info">
                                <h3>{{item.title}}</h3>
                                <span>{{item.subTitle}}</span>
                            </div>
                            <p>{{item.content}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Team Area -->
</template>

<script>
export default {
    name: 'Feedback',
    data(){
       return {
           myItems: [
               {
                   id: 1,
                   img: '1.jpg',
                   title: 'Josh Buttler',
                   subTitle: 'CEO & Founder',
                   content: 'Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.'
               },
               {
                   id: 2,
                   img: '1.jpg',
                   title: 'Josh Buttler',
                   subTitle: 'CEO & Founder',
                   content: 'Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.'
               },
               {
                   id: 3,
                   img: '1.jpg',
                   title: 'Josh Buttler',
                   subTitle: 'CEO & Founder',
                   content: 'Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.'
               },
               {
                   id: 4,
                   img: '1.jpg',
                   title: 'Josh Buttler',
                   subTitle: 'CEO & Founder',
                   content: 'Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.'
               }
           ]
       }
    },
    methods:{
        imgUrl(url){
            return require('../../../assets/img/feedback/' + url)
        }
    }
}
</script>
<style scoped>
    h2 {
        color: #c679e3;
    }
</style>
