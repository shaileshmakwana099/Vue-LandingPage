<template>
<div>
    <div :style="rfqStep === 0 ? 'display:block': 'display:none' " class="con-tab-ejemplo custForm-height">
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
                <input class="form-control">
            </div>

            <div class="form-group">
                <label>{{$t('RfqCompanyName')}}</label>
                <input class="form-control">
            </div>
    </div>
    <div :style="rfqStep === 1 ? 'display:block': 'display:none' "  class="con-tab-ejemplo custForm-height">
            <div class="form-group">
                <label>{{$t('ContactName')}}</label>
                <b-form-input size="sm" :placeholder="$t('ContactName')"/>
            </div>

            <div class="form-group">
                <label>{{$t('Email')}}</label>
                <b-form-input type="email" size="sm" :placeholder="$t('LoginEmail')" />
            </div>

            <div class="form-group">
                <label>{{$t('ContactNumber')}}</label>
                <b-form-input size="sm" />
            </div>
    </div>
    <div :style="rfqStep === 2 ? 'display:block': 'display:none' "  class="con-tab-ejemplo custForm-height">
            <div class="form-group">
                <label>{{$t('Address')}}</label>
                <b-form-textarea/>
            </div>

            <div class="form-group">
                <label>{{$t('ProjectDetail')}}</label>
                <b-form-textarea/>
            </div>
    </div>
    <div :style="rfqStep === 3 ? 'display:block': 'display:none' "  class="con-tab-ejemplo custForm-height">
            <b-form-group :label="$t('ProjectBudgetHKD')" >
                <b-row>
                    <b-col >
                        <b-form-input :placeholder="$t('From')"></b-form-input>
                    </b-col>
                    <b-col>
                        <b-form-input :placeholder="$t('To')" ></b-form-input>
                    </b-col>
                </b-row>
            </b-form-group>
            <b-form-group>
                <b-form-textarea :placeholder="$t('Remark')" />
            </b-form-group>
            <b-form-group :label="$t('RequestedQtyOfSupplier')" label-cols-sm="7" label-for="budget">
                <b-form-input id="budget"  type="number" v-model="dataQty" />
            </b-form-group>
            <p>{{$t('GrandTotal')}} {{dataTotal}}</p>
    </div>
    <b-button class="btn btn-primary" @click="submit($t('ThanksSubmitRfqTitle'), $t('ThanksSubmitRfqContent'))">{{rfqStep === 3? $t('Submit') : $t('Next')}}</b-button>
</div>

</template>

<script>
    export default {
        name: "RFQ",
        data(){
            return {
                rfqStep: 0,
                isSelect: true,
                dataQty: null,
                popupActivo: false
            }
        },
        computed: {
            dataTotal (){
                return this.dataQty * 100
            }
        },
        methods: {
            submit(title, content){
                if (this.rfqStep === 3) {
                    this.$swal(title, content, "success")
                    this.rfqStep = 0
                    return
                }
                this.rfqStep ++
            }
        }
    }
</script>

<style scoped>
    .custForm-height {
        min-height: 340px
    }
</style>