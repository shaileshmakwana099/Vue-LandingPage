<template>
        <div>
            <div :style="rfqStep === 0 ? 'display:block': 'display:none' " class="con-tab-ejemplo">
                <p style="color:#68D0F5">{{$t('RfqServiceFee')}}</p>
                <b-form-group :label="$t('RfqRequiredInfo')" label-size="default" >
                    <div class="col-md-5 form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" v-model="isSelect">
                        <label class="form-check-label" for="inlineRadio1">{{$t('Tvp')}}{{$t('TvpV')}}</label>
                    </div>
                    <div class="col-md-5 form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" v-model="isSelect">
                        <label class="form-check-label" for="inlineRadio2">{{$t('Bud')}}</label>
                    </div>
                </b-form-group>

                <div class="form-group">
                    <label>{{$t('ProjectName')}}</label>
                    <input type="email" class="form-control">
                </div>

                <div class="form-group">
                    <label>{{$t('RfqCompanyName')}}</label>
                    <input type="password" class="form-control">
                </div>

                <b-button class="btn btn-primary" @click="activeRfqStep(1)">{{$t('Next')}}</b-button>
            </div>
        </div>
</template>

<script>
    export default {
        name: "RegisterAsSupplier",
        data(){
            return {
                rfqStep: 0,
            }
        }
    }
</script>

<style scoped>

</style>