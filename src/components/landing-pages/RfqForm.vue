<template>
    <vs-row vs-justify="center" >
        <div class="vx-col w-full lg:w-1/2">
            <div title="Create a RFQ">
                <b-row>
                    <b-col>
                        <vs-input style="width: 100%" placeholder="Contact Name" v-model="contactName"/>
                    </b-col>
                    <b-col>
                        <vs-input style="width: 100%" placeholder="Contact Number" v-model="contactNumber"/>
                    </b-col>
                </b-row>
                <b-row class="mt-4">
                  <b-col>
                      <vs-input style="width: 100%" placeholder="Email or UserName" v-model="email"/>
                  </b-col>
                    <b-col>
                        <vs-input style="width: 100%" placeholder="Company Name (Same as BR)" v-model="companyName"/>
                    </b-col>
                </b-row>
                <vs-textarea class="w-full mt-4" label="Address" v-model="Address"/>
                <vs-input style="width: 100%" class="mt-5 mb-3" placeholder="Project Name" v-model="projectName" />
                <vs-row class="mt-6" vs-align="center">
                    <div class="col-md-5">
                        <span>Requested Funding Type: </span>
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
                <vs-textarea class="w-full mt-3" label="Please write the detailed project scope" v-model="description" />
                <b-row class="mt-5" >
                    <b-col cols="4">
                        <span>Project Budget HKD(Optional) :</span>
                    </b-col>
                    <b-col :cols="3">
                        <vs-input style="width: 100%" placeholder="100000" v-model="budgetFrom" />
                    </b-col>
                    <b-col cols="1" align-self="center">
                        <span >To</span>
                    </b-col>
                    <b-col cols="4">
                        <vs-input style="width: 100%" placeholder="100000" v-model="budgetTo" />
                    </b-col>
                </b-row>
                <vs-textarea class="w-full mt-3" label="Remark" />
                <b-row vs-align="center">
                    <b-col >
                        <span>Requested Qty of Supplier</span>
                    </b-col>
                    <b-col >
                        <vs-row  vs-justify="center">
                            <vs-input-number class="w-2/5"  v-model="qty" />
                        </vs-row>
                    </b-col>
                    <b-col align-self="center" >
                        <span>(HK$100/unit)</span>
                    </b-col>
                </b-row>
                <vs-progress class="mt-4" :height="2" :percent="100" color="primary"></vs-progress>
                <p><b>Grand Total:   HK$ {{total_mount}}</b></p>
                <vs-row class="mt-4" vs-justify="center">
                    <a href="#" >
                        <img :src="paypal_img" width="100px"/>
                    </a>
                </vs-row>
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
                return require ('../../assets/img/paypal.svg')
            }
        }
    }
</script>

<style scoped>
    img :hover {
        width: 200px;
    }
</style>
