<template>
    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
        <span class="cursor-pointer flex items-center i18n-locale">
          <img :src="i18n_locale_img" :alt="$i18n.locale" />
          <span class="hidden sm:block ml-2">{{ getCurrentLocaleData.lang }}</span>
        </span>
        <vs-dropdown-menu class="w-auto i18n-dropdown vx-navbar-dropdown">
            <vs-dropdown-item @click="updateLocale('en')"><img class="mr-1" src="../../assets/img/flags/en.png" alt="en" />Engilsh</vs-dropdown-item>
            <vs-dropdown-item @click="updateLocale('hk')"><img class="mr-1" src="../../assets/img/flags/hk.png" alt="fr" />Cantonese</vs-dropdown-item>
        </vs-dropdown-menu>
    </vs-dropdown>

</template>

<script>
    export default {
        computed: {
            i18n_locale_img () {
                // Use below code to dynamically fetch image instead of if-else
                // NOTE: We used if-else because laravel throws error in 'yarn prod'.
                // If you are not using laravel + Vue, you can use below code to dynamically get image
                // return require(`@/assets/img/flags/${this.$i18n.locale}.png`)

                const locale = this.$i18n.locale
                if (locale === 'hk')      return require('../../assets/img/flags/hk.png')
                else return require('../../assets/img/flags/en.png')
            },
            getCurrentLocaleData () {
                const locale = this.$i18n.locale
                if (locale === 'en')      return { flag: 'us', lang: 'English'    }
                else return { flag: 'hk', lang: 'Cantonese' }
            }
        },
        methods: {
            updateLocale (locale) {
                this.$i18n.locale = locale
            }
        }
    }
</script>

<style scoped >
    button:focus {
        outline: none
    }
    img {
        width: 15%;
    }
</style>
