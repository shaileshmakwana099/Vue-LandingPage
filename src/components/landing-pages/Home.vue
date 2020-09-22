<template>
    <div>
        <Banner></Banner>
        <Services></Services>
        <HowItWorks></HowItWorks>
        <Faq id="faq"/>
        <Feadback></Feadback>
        <BlogSection />

        <section class="agency-cta-area ptb-80">
            <div class="container">
                <div class="agency-cta-content">
                    <h2>{{$t('CallSectionTxt')}}</h2>
                    <a href="#" class="btn btn-gradient">{{$t('InviteNow')}}</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Banner from './home/Banner';
import Services from './home/Services';
import HowItWorks from './home/HowItWorks';
import Faq from "./home/Faq";
import Feadback from './home/Feedback';
import BlogSection from './home/BlogSection';

export default {
    name: 'Developer',
    components: {
        Banner,
        Services,
        HowItWorks,
        Faq,
        Feadback,
        BlogSection,
    }
}
</script>