<template>
        <div>
            <div :style="step === 0 ? 'display:block': 'display:none' " class="con-tab-ejemplo custForm-height">
                <p style="color:#68D0F5">{{$t('RfqWritingFee')}}</p>

                <div class="form-group">
                    <label>{{$t('SupCompanmyName')}}</label>
                    <input type="email" class="form-control">
                </div>

                <div class="form-group">
                    <label>{{$t('Authorizer')}}</label>
                    <input type="password" class="form-control">
                </div>

                <div class="form-group">
                    <label>{{$t('AuthorizerPosition')}}</label>
                    <input type="email" class="form-control">
                </div>
            </div>
            <div :style="step === 1 ? 'display:block': 'display:none' " class="con-tab-ejemplo custForm-height">

                <div class="form-group">
                    <label>{{$t('Email')}}</label>
                    <input type="email" class="form-control" :placeholder="$t('LoginEmail')" >
                </div>

                <div class="form-group">
                    <label>{{$t('DBiz')}}</label>
                    <input class="form-control">
                </div>

                <div class="form-group">
                    <label>{{$t('Address')}}</label>
                    <b-form-textarea />
                </div>
            </div>
            <div :style="step === 2 ? 'display:block': 'display:none' " class="con-tab-ejemplo custForm-height">

                <div class="form-group">
                    <label>{{$t('Contact')}}</label>
                    <input class="form-control">
                </div>

                <div class="form-group">
                    <label>{{$t('CompanyRegistryNumber')}}</label>
                    <input class="form-control">
                </div>

                <b-form-group label="Upload Company Registry Document" label-for="file" label-cols="5" label-size="sm">
                        <b-form-file class="mt-2"  id="file" size="sm" v-model="file" />
                </b-form-group>
            </div>
            <div :style="step === 3 ? 'display:block': 'display:none' " class="con-tab-ejemplo custForm-height">

                <p>{{$t('PaymentInfo')}}</p>
                <b-form-group :label="$t('BankName')">
                    <input class="form-control"/>
                </b-form-group>

                <b-form-group :label="$t('BankAccountNo')">
                    <input class="form-control" />
                </b-form-group>

                <b-form-group :label="$t('PaypalNo')">
                    <input class="form-control"/>
                </b-form-group>
            </div>
            <b-button class="btn btn-primary" @click="submit($t('ThanksSubmitRegTitle'), $t('ThanksSubmitRegContent'))">{{step === 3? $t('Submit') : $t('Next')}}</b-button>
        </div>
</template>

<script>
    export default {
        name: "RegisterAsSupplier",
        data(){
            return {
                step: 0,
                file: null,
            }
        },
        methods:{
            submit(title, content){
                if (this.step === 3){
                    this.$swal(title, content, "success")
                    this.step = 0
                    return
                }
                this.step ++
            }
        }
    }
</script>

<style scoped>
    .custForm-height{
        min-height: 340px;
    }
</style>