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
    <div :style="rfqStep === 1 ? 'display:block': 'display:none' "  class="con-tab-ejemplo">
        <div class="form-group">
            <label>{{$t('ContactName')}}</label>
            <b-form-input size="sm" :placeholder="$t('ContactName')"/>
        </div>

        <div class="form-group">
            <label>{{$t('Email')}}</label>
            <b-form-input size="sm" :placeholder="$t('LoginEmail')" />
        </div>

        <div class="form-group">
            <label>{{$t('ContactNumber')}}</label>
            <b-form-input size="sm" />
        </div>

        <b-button class="btn btn-primary" @click="activeRfqStep(2)">{{$t('Next')}}</b-button>
    </div>
    <div :style="rfqStep === 2 ? 'display:block': 'display:none' "  class="con-tab-ejemplo">
        <div class="form-group">
            <label>{{$t('Address')}}</label>
            <b-form-textarea/>
        </div>

        <div class="form-group">
            <label>{{$t('ProjectDetail')}}</label>
            <b-form-textarea/>
        </div>

        <b-button class="btn btn-primary" @click="activeRfqStep(3)">{{$t('Next')}}</b-button>
    </div>
    <div :style="rfqStep === 3 ? 'display:block': 'display:none' "  class="con-tab-ejemplo">
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
        <b-button class="btn btn-primary" @click="submit($t('ThanksSubmitTitle'), $t('ThanksSubmitContent'))">{{$t('Submit')}}</b-button>
    </div>
</div>

</template>

<script>
    export default {
        name: "RFQ",
        data(){
            return {
                rfqStep: 1,
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
            activeRfqStep(val){
                this.rfqStep = val
            },
            submit(title, content){
                this.$swal(title, content, "success")
            }
        }
    }
</script>

<style scoped>

</style>