<template>
    <vs-row vs-justify="center" >
        <div class="vx-col w-full lg:w-1/2">
            <div title="Create a RFQ">
                <b-row>
                    <b-col>
                        <vs-input style="width: 100%" :placeholder="$t('RfqRequiredInfo')" v-model="contactName"/>
                    </b-col>
                    <b-col>
                        <vs-input style="width: 100%" :placeholder="$t('ContactNumber')" v-model="contactNumber"/>
                    </b-col>
                </b-row>
                <b-row class="mt-4">
                  <b-col>
                      <vs-input style="width: 100%" :placeholder="$t('LoginEmail')" v-model="email"/>
                  </b-col>
                    <b-col>
                        <vs-input style="width: 100%" :placeholder="$t('RfqCompanyName')" v-model="companyName"/>
                    </b-col>
                </b-row>
                <vs-textarea class="w-full mt-4" :label="$t('Address')" v-model="Address"/>
                <vs-input style="width: 100%" class="mt-5 mb-3" :placeholder="$t('ProjectName')" v-model="projectName" />
                <vs-row class="mt-6" vs-align="center">
                    <div class="col-md-5">
                        <span>要求的資金類型: </span>
                    </div>
                    <div class="col-md-5">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio3" value="tvp" v-model="isSelect" >
                            <label class="form-check-label" for="inlineRadio3">{{$t('Tvp')}}{{$t('TvpV')}}</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio4" value="bud" v-model="isSelect">
                            <label class="form-check-label" for="inlineRadio4">{{$t('Bud')}}</label>
                        </div>
                    </div>
                </vs-row>
                <vs-textarea class="w-full mt-3" :label="$t('ProjectDetail')" v-model="description" />
                <b-row class="mt-5" >
                    <b-col cols="4" align-self="center">
                        <span>{{$t('ProjectBudgetHKD')}} :</span>
                    </b-col>
                    <b-col :cols="3">
                        <vs-input style="width: 100%" placeholder="100000" v-model="budgetFrom" />
                    </b-col>
                    <b-col cols="1" align-self="center">
                        <span >{{$t('To')}}</span>
                    </b-col>
                    <b-col cols="3">
                        <vs-input style="width: 100%" placeholder="100000" v-model="budgetTo" />
                    </b-col>
                </b-row>
                <vs-textarea class="w-full mt-3" label="備註" />
                <b-row vs-align="center">
                    <b-col >
                        <span>要求之供應商數目：</span>
                    </b-col>
                    <b-col align-self="center" cols="2">
                        <input type="number" style="width: 100%; text-align: right;" min="0" v-model="qty" />
                    </b-col>
                    <b-col align-self="center" >
                        <span>(每個HK$800)</span>
                    </b-col>
                </b-row>
                <vs-progress class="mt-4" :height="2" :percent="100" color="primary"></vs-progress>
                <p style="font-size: 19px; color: #000000" >{{$t('GrandTotal')}} {{total_mount}}</p>
                <p align="center" >立即付款並提交項目要求</p>
            </div>
        </div>
    </vs-row>
</template>

<script>
    export default {
        name: "RfqForm",
        data(){
            return {
                contactName: "",
                contactNumber: "",
                companyName: "",
                Address: "",
                projectName: "",
                description:"",
                fund_type:'TVP',
                budgetFrom: '',
                budgetTo: '',
                qty: 0,
                email: '',
                isSelect: "tvp"
            }
        },
        computed:{
            total_mount(){
                return parseInt(this.qty) * 100
            },
            paypal_img(){
                return require ('../../assets/img/paypal-credit-button.png')
            }
        },

    }
</script>

<style scoped>
    img :hover {
        width: 200px;
    }
</style>
