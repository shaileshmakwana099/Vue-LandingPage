<template>
    <div>
        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>FAQ</h2>
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
        <!-- End Page Title -->

        <!-- Start FAQ Area -->
		<section class="faq-area ptb-80">
			<div class="container">
				<div class="faq-accordion">
                    <VueFaqAccordion 
                        :items="myItems"
                    />
                </div>
            </div>
		</section>
		<!-- End FAQ Area -->
    </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion';
export default {
    name: 'Faq',
    components: {
        VueFaqAccordion
    },
    data () {
        return {
            myItems: [
                {
                    title: 'How many time zones are there in all?',
                    value: 'Given a 24-hour day and 360 degrees of longitude around the Earth'
                },
                {
                    title: 'How long is a day and year on Venus?',
                    value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.'
                },
                {
                    title: 'What animal smells like popcorn?',
                    value: 'Binturongs smell like popcorn.'
                },
                {
                    title: 'What animal smells like popcorn?',
                    value: 'Binturongs smell like popcorn.',
                },
                {
                    title: 'What animal smells like popcorn?',
                    value: 'Binturongs smell like popcorn.'
                },
                {
                    title: 'What animal smells like popcorn?',
                    value: 'Binturongs smell like popcorn.'
                }
            ]
        }
    }
}
</script>