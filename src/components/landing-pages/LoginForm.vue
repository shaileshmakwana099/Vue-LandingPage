<template>
    <vs-row vs-justify="center" >
        <div class="vx-col w-full lg:w-1/2">
            <div title="Create a RFQ">
                <b-row>
                    <b-col>
                        <vs-input type="email" style="width: 100%" :placeholder="'Email'" v-model="email"/>
                    </b-col>
                    <b-col>
                        <vs-input type="password" style="width: 100%" :placeholder="'密碼'" v-model="pass"/>
                    </b-col>
                </b-row>
            </div>
        </div>
    </vs-row>
</template>

<script>
    export default {
        name: "LoginForm",
        data(){
            return {
                email: '',
                pass: ''
            }
        }
    }
</script>

<style scoped>

</style>
