<template>
    <vs-row vs-justify="center">
        <div class="vx-col w-full lg:w-1/2">
            <vx-card title="Create a RFQ">
                <vs-row>
                    <vs-input class="vx-col w-full lg:w-6/12 lg:pr-4" placeholder="Contact Name" v-model="contactName"/>
                    <vs-input class="vx-col w-full lg:w-6/12" placeholder="Contact Number" v-model="contactNumber"/>
                </vs-row>
                <vs-row class="mt-4">
                    <vs-input class="vx-col w-full lg:w-6/12 lg:pr-4" placeholder="Email or UserName" v-model="email"/>
                    <vs-input class="vx-col w-full lg:w-6/12" placeholder="Company Name (Same as BR)" v-model="companyName"/>
                </vs-row>
                <vs-textarea class="w-full mt-4" label="Address" v-model="Address"/>
                <vs-input class="w-full mt-10" placeholder="Project Name" v-model="projectName" />
                <vs-row class="mt-6" vs-align="center">
                    <div class="vx-col sm:w-1/3 w-full">
                        <span>Requested Funding Type: </span>
                    </div>
                    <div class="vx-col sm:w-1/3 w-full" >
                        <ul>
                            <li>
                                <vs-radio v-model="fund_type" vs-value="D-Biz">D-Biz</vs-radio>
                            </li>
                            <li>
                                <vs-radio v-model="fund_type" vs-value="TVP">TVP</vs-radio>
                            </li>
                        </ul>
                    </div>
                </vs-row>
                <vs-textarea class="w-full mt-4" label="Please write the detailed project scope" v-model="description" height="150px"/>
                <vs-row class="mt-10" vs-align="center">
                    <div class="vx-col w-2/5">
                        <span>Project Budget HKD(Optional) :</span>
                    </div>
                    <div class="vx-col w-3/5">
                        <vs-row vs-align="center">
                            <div class="vx-col w-full lg:w-2/5">
                                <vs-input class="w-full" placeholder="100000" v-model="budgetFrom" />
                            </div>
                            <div class="vx-col w-full lg:w-1/5" align="center" >
                                <span>To</span>
                            </div>
                            <div class="vx-col w-full lg:w-2/5">
                                <vs-input class="w-full" placeholder="100000" v-model="budgetTo" />
                            </div>
                        </vs-row>
                    </div>
                </vs-row>
                <vs-textarea class="w-full mt-3" label="Remark" />
                <vs-row vs-align="center">
                    <div class="vx-col w-full lg:w-1/3" >
                        <span>Requested Qty of Supplier</span>
                    </div>
                    <div class="vx-col w-1/3">
                        <vs-row  vs-justify="center">
                            <vs-input-number class="w-2/5"  v-model="qty" />
                        </vs-row>
                    </div>
                    <div class="vx-col w-1/3 pl-4">
                        <span>(HK$100/unit)</span>
                    </div>
                </vs-row>
                <vs-progress class="mt-4" :height="2" :percent="100" color="primary"></vs-progress>
                <p><b>Grand Total:   HK$ {{total_mount}}</b></p>
                <vs-row class="mt-4" vs-justify="center">
                    <vs-button type="flat">
                        <img src="images/paypal.svg" width="100px"/>
                    </vs-button>
                </vs-row>
            </vx-card>
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
                email: ''
            }
        },
        computed:{
            total_mount(){
                return parseInt(this.qty) * 100
            }
        }
    }
</script>

<style scoped>

</style>
