<template>
    <v-app-bar scroll-behavior="elevate" class="d-xl-none">
        <template v-slot:append>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-block d-md-none"></v-app-bar-nav-icon>
        </template>
        <h1 class="ms-4 align-content-center  text-uppercase">MV</h1>
        <v-app-bar-title class="text-subtitle-1 align-content-center text-uppercase ms-3"
            text="MIROSLAV VANĚK"></v-app-bar-title>
        <div class="d-none d-md-flex mx-5 ">
            <a class="text-decoration-none text-h5 me-5 align-content-center text-white" href="#aboutMe">
                {{ $t('block2.title') }}
            </a>
            <a class="text-decoration-none text-h5 me-5 align-content-center text-white" href="#services">
                {{ $t('block3.title') }}
            </a>
            <a class="text-decoration-none text-h5 me-5 align-content-center text-white" href="#contactMe">
                {{ $t('block5.title') }}
            </a>
            <a class="text-decoration-none text-h5 mx-5 align-content-center text-white"
                href="mailto:luvfitnesscz@gmail.com" target="_blank">
                <v-icon>mdi-email-fast-outline</v-icon>
            </a>
            <a class="text-decoration-none text-h5 mx-5 align-content-center text-white"
                href="https://www.instagram.com/luvfitnesscz?igsh=c3M4M3hlYTFjZzFl" target="_blank">
                <v-icon>mdi-instagram</v-icon>
            </a>
            <a class="text-decoration-none text-h5 mx-5 text-white"
                href="https://www.tiktok.com/@luv_fitness?_t=ZN-8x2NMydkwVi&_r=1" target="_blank">
                <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 7.33333C17.5307 7.33333 14.0204 5.31371 14.0204 2" stroke="#FFFFFF" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M8.5102 11.4737C5.467 11.4737 3 13.8301 3 16.7368C3 19.6436 5.467 22 8.5102 22C11.5534 22 14.0204 19.6436 14.0204 16.7368V2"
                        stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
            <v-select v-model="$i18n.locale" class="ms-5" density="compact" variant="solo-filled" hide-details
                :items="$i18n.availableLocales">
                <template #selection="{ item }">
                    <flag class="rounded me-2" :iso="item.value"></flag> {{ item.value }}
                </template>
                <template #item="{ item, props }">
                    <v-list-item v-bind="props">
                        <template #title>
                            <span>
                                <flag class="rounded me-2" :iso="item.value"></flag> {{ item.value }}
                            </span>
                        </template>
                    </v-list-item>
                </template>
            </v-select>
        </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'top' : undefined" temporary
        :class="{ 'h-100': drawer }" class="d-md-none">
        <div class="d-flex flex-column justify-center h-100">
            <div class="d-flex flex-column mb-5">
                <a class="text-decoration-none text-h4 my-5 mx-auto text-white" @click.stop="drawer = !drawer" href="#aboutMe">
                    {{ $t('block2.title') }}
                </a>
                <a class="text-decoration-none text-h4 my-5 mx-auto text-white" @click.stop="drawer = !drawer" href="#services">
                    {{ $t('block3.title') }}
                </a>
                <a class="text-decoration-none text-h4 my-5 mx-auto text-white" @click.stop="drawer = !drawer" href="#contactMe">
                    {{ $t('block5.title') }}
                </a>
                <a class="text-decoration-none text-h4 my-5 mx-auto text-white" @click.stop="drawer = !drawer" href="mailto:luvfitnesscz@gmail.com"
                    target="_blank">
                <v-icon>mdi-email-fast-outline</v-icon>
                </a>
                <a class="text-decoration-none text-h4 my-5 mx-auto text-white"
                    href="https://www.instagram.com/luvfitnesscz?igsh=c3M4M3hlYTFjZzFl" target="_blank">
                    <v-icon>mdi-instagram</v-icon>
                </a>
                <a class="text-decoration-none text-h4 my-5 mx-auto text-white"
                    href="https://www.tiktok.com/@luv_fitness?_t=ZN-8x2NMydkwVi&_r=1" target="_blank">
                    <svg width="51px" height="51px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 7.33333C17.5307 7.33333 14.0204 5.31371 14.0204 2" stroke="#FFFFFF"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M8.5102 11.4737C5.467 11.4737 3 13.8301 3 16.7368C3 19.6436 5.467 22 8.5102 22C11.5534 22 14.0204 19.6436 14.0204 16.7368V2"
                            stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>

            </div>
            <div class="mx-auto">
                <v-select v-model="$i18n.locale" class="mx-auto" variant="solo-filled" :items="$i18n.availableLocales"
                    @update:model-value="drawer = !drawer">
                    <template #selection="{ item }">
                        <flag class="rounded me-2" :iso="item.value"></flag> {{ item.value }}
                    </template>
                    <template #item="{ item, props }">
                        <v-list-item v-bind="props">
                            <template #title>
                                <span>
                                    <flag class="rounded me-2" :iso="item.value"></flag> {{ item.value }}
                                </span>
                            </template>
                        </v-list-item>
                    </template>
                </v-select>
            </div>
            <div></div>
        </div>
    </v-navigation-drawer>
</template>
<style lang="scss">
.tiktok-icon {
    background-color: #f69e01;
    -webkit-mask: url(@/assets/tiktok.svg) no-repeat center;
    mask: url(@/assets/tiktok.svg) no-repeat center;
}
</style>
<script setup>
import { ref, watch } from 'vue'


const drawer = ref(false)
const group = ref(null)

watch(group, () => {
    drawer.value = false
})

import { useI18n } from 'vue-i18n';

const i18n = useI18n({ useScope: 'global' });

function SetLocale(locale) {
    i18n.locale.value = locale;
    drawer.value = true;
}
</script>