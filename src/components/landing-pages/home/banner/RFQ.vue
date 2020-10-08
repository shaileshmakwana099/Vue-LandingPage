<template>
<div>
    <div :style="rfqStep === 0 ? 'display:block': 'display:none' " class="con-tab-ejemplo custForm-height">
            <b-form-group :label="$t('RfqRequiredInfo')" label-size="default" label-class="pb-2">
                <div class="col-md-5 form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="tvp" v-model="isSelect" >
                    <label class="form-check-label" for="inlineRadio1">{{$t('Tvp')}}{{$t('TvpV')}}</label>
                </div>
                <div class="col-md-5 form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="bud" v-model="isSelect">
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
                <b-form-input size="sm" :placeholder="$t('ContactName')"/>
            </div>

            <div class="form-group">
                <b-form-input type="email" size="sm" :placeholder="$t('LoginEmail')" v-model="email"/>
            </div>
            <div class="form-group">
                <b-form-input type="email" size="sm" :placeholder="$t('ConfirmEmail')" v-model="confirmEmail" />
                <p style="color: red">{{this.errorEmail}}</p>
            </div>

            <div class="form-group">
                <b-form-input size="sm" :placeholder="$t('ContactNumber')" />
            </div>
            <div class="form-group">
                <b-form-input size="sm" :placeholder="$t('Address')" />
            </div>
    </div>
    <div :style="rfqStep === 2 ? 'display:block': 'display:none' "  class="con-tab-ejemplo custForm-height">
            <div class="form-group">
                <label>{{$t('ProjectDetail')}}</label>
                <b-form-textarea :placeholder="$t('ProjectDetailHolder')" :rows="12"/>
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
            <p style="font-size: 19px; color: #000000" >{{$t('GrandTotal')}} {{dataTotal}}</p>
    </div>
    <p align="center" >立即付款並提交項目要求</p>
    <b-button v-if="rfqStep !== 3" class="btn btn-primary" @click="submit($t('ThanksSubmitRfqTitle'), $t('ThanksSubmitRfqContent'))">{{rfqStep === 3? $t('Submit') : $t('Next')}}</b-button>
    <vs-row v-else class="mb-2" vs-justify="center">
        <a href="#" @click="submit($t('ThanksSubmitRfqTitle'), $t('ThanksSubmitRfqContent'))">
            <img :src="paypal_img" width="275px"/>
        </a>
    </vs-row>
    <p :style="rfqStep === 3? 'color:#6084a4' : 'color:#c679e3;'">{{rfqStep === 3 ? '供應商配對會於系統自動進行，我們會要求應邀的供應商於兩個工作天內回覆報價。客戶如收到供應商的報價有不正確的地方，可於後台提出問題，平台會跟進。' : $t('RfqServiceFee')}}</p>
</div>

</template>

<script>
    export default {
        name: "RFQ",
        data(){
            return {
                rfqStep: 0,
                isSelect: 'tvp',
                dataQty: null,
                // popupActive: false,
                email: '',
                confirmEmail: '',
            }
        },
        computed: {
            dataTotal (){
                return this.dataQty * 100
            },
            errorEmail (){
                return this.email === this.confirmEmail ? null : '確認電子郵件不正確'
            },
            paypal_img(){
                return require ('../../../../assets/img/paypal-credit-button.png')
            }

        },
        methods: {
            submit(title, content){
                if (this.rfqStep === 3) {
                    this.$swal(title, content, "success")
                    this.rfqStep = 0
                    return
                }
                if (this.rfqStep === 1 && this.errorEmail != null) {
                    return
                } else {
                    this.rfqStep ++
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .custForm-height {
        min-height: 340px
    }
    .form-check-label {
        color: #0e314c !important;
        font-size: 18px !important;
        font-weight: 500 !important;
    }
    .form-group {
        label {
            font-size: 22px;
            color: #c679e3;
            font-weight: 600;
        }
    }

</style>
