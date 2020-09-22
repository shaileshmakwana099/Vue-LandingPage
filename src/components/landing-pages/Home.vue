<template>
    <div>
        <Banner></Banner>
        <Services></Services>
        <HowItWorks></HowItWorks>
        <Faq id="faq"/>
        <Feadback></Feadback>
        <BlogSection />
        <Cta />
    </div>
</template>

<script>
import Banner from './home/Banner';
import Services from './home/Services';
import HowItWorks from './home/HowItWorks';
import Faq from "./home/Faq";
import Feadback from './home/Feedback';
import BlogSection from './home/BlogSection';
import Cta from './home/Cta';

export default {
    name: 'Developer',
    components: {
        Banner,
        Services,
        HowItWorks,
        Faq,
        Feadback,
        BlogSection,
        Cta,
    }
}
</script>