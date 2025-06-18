<template>
  <v-container>
    <!-- #region block1 -->
    <div class="mb-5 pt-3 begin-transition">
      <div class="d-flex flex-column ">
        <h1 class="mx-auto text-h4 text-md-h3 mt-5 mb-3 text-center font-weight-bold text-uppercase">{{
          $t("block1.title") }}</h1>
        <div class="d-flex mb-5 justify-center">
          <v-img class="text-center rounded" src="@/assets/mainPhoto.jpg" max-width="700"></v-img>
        </div>
        <h3 class="text-center text-md-h4 text-break">{{ $t("block1.features") }}</h3>
      </div>
    </div>
    <!-- #endregion block1-->
    <!-- #region block2 -->
    <div id="aboutMe" class="pt-5">
      <h1 class="text-h2 mb-3 mb-md-5 text-center">{{ $t('block2.title') }}</h1>
      <v-row class="d-md-none">
        <v-col cols="6" class="align-stretch pe-1 pb-0">
          <div class="text-center text-h6">{{ $t('block2.photo1.text1') }}</div>
          <div class="text-center text-h6">{{ $t('block2.photo1.text2') }}</div>
        </v-col>
        <v-col cols="6" class="align-stretch ps-1 pb-0">
          <div class="text-center text-h6">{{ $t('block2.photo2.text1') }}</div>
          <div class="text-center text-h6">{{ $t('block2.photo2.text2') }}</div>
        </v-col>
      </v-row>
      <v-row class="mb-5 d-none d-md-flex">
        <v-col cols="6" class="align-stretch pe-1 pb-0">
          <div class="text-center text-md-h3">{{ $t('block2.photo1.text1') }} {{ $t('block2.photo1.text2') }}
          </div>
        </v-col>
        <v-col cols="6" class="align-stretch ps-1 pb-0">
          <div class="text-center text-md-h3">{{ $t('block2.photo2.text1') }} {{ $t('block2.photo2.text2') }}
          </div>
        </v-col>
      </v-row>
      <v-row class="mb-2 mb-md-5">
        <v-col cols="6" class="align-stretch pe-1 pt-0">
          <v-img class="rounded-lg" src="@/assets/block2_photoLeft.jpg"></v-img>
        </v-col>
        <v-col cols="6" class="align-stretch ps-1 pt-0">
          <v-img class="rounded-lg" src="@/assets/block2_photoRight.jpg"></v-img>
        </v-col>
      </v-row>
      <v-card>
        <template v-slot:title>
          <div class="d-md-none">
            <h2 class="text-center text-h4">
              {{ $t(('block2.description.title1')) }}
            </h2>
            <h2 class="text-center text-h4">
              {{ $t(('block2.description.title2')) }}
            </h2>
            <h2 class="text-center text-h4">
              {{ $t(('block2.description.title3')) }}
            </h2>
          </div>

          <div class="d-none d-md-block">
            <h2 class="text-center text-h4">
              {{ $t(('block2.description.title1')) }}
              {{ $t(('block2.description.title2')) }}
              {{ $t(('block2.description.title3')) }}
            </h2>
          </div>
        </template>
        <v-card-text class="bg-surface-light pt-4">
          <div class="text-center">
            <div></div>
            <p class="text-md-h5 ">
              {{ $t('block2.description.text1') }}
            </p>
            <p class="text-md-h5 ">
              {{ $t('block2.description.text2') }}
            </p>
            <p class="text-md-h5 mb-3">
              {{ $t('block2.description.text3') }}
            </p>
            <p class="text-md-h5 mb-3">
              {{ $t('block2.description.text4') }}
            </p>
            <p class="text-md-h5 mb-3">
              {{ $t('block2.description.text5') }} <b> {{ $t('block2.description.text6') }} </b> {{
                $t('block2.description.text7') }}
            </p>
            <p class="text-md-h5 ">
              {{ $t('block2.description.text8') }}
            </p>
            <p class="text-md-h5 mb-3 font-weight-bold">
              {{ $t('block2.description.text9') }}
            </p>
            <p class="text-md-h5  font-weight-bold">
              {{ $t('block2.description.text10') }}
            </p>
            <p class="text-md-h5 ">
              {{ $t('block2.description.text11') }}
            </p>
            <p class="text-md-h5 ">
              {{ $t('block2.description.text12') }}
            </p>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <!-- #endregion block2-->
    <!-- #region block3 -->
    <div id="services"  class=" my-5">
      <div class="d-md-none">
        <v-slide-group mobile :value="2" selected-class="bg-success" center-active>
          <v-slide-group-item>
            <v-card width="80vw;"
              class="card-order d-flex  flex-column rounded-xl  mx-2 bg-blue-grey-lighten-5 px-5 py-5">
              <div class="text-center text-uppercase font-weight-medium text-h4 mb-5">{{ $t('block3.item1.title') }}
              </div>
              <div class="text-center">
                <span class="font-weight-bold text-h3 ">{{ $t('block3.item1.price') }}</span>
                <span class="text-h4">{{ $t('block3.currency') }}</span>
              </div>
              <div class="text-center mb-5 text-h4 text-lowercase">
                {{ $t('block3.item1.period') }}
              </div>
              <hr class="mb-5" />
              <ul class="mb-5 ps-5">
                <li class="text-body-2"> {{ $t('block3.item1.description.item1') }}</li>
                <li class="text-body-2"> {{ $t('block3.item1.description.item2') }}</li>
                <li class="text-body-2"> {{ $t('block3.item1.description.item3') }}</li>
                <li class="text-body-2"> {{ $t('block3.item1.description.item4') }}</li>
                <li class="text-body-2"> {{ $t('block3.item1.description.item5') }}</li>
                <li class="text-body-2"> {{ $t('block3.item1.description.item6') }}</li>
              </ul>
              <v-btn @click="toggle( $t('block3.item1.title'))" size="x-large" class="mt-auto mx-auto rounded text-center">
                {{ $t('block3.buttonText') }}
              </v-btn>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item>
            <v-card width="80vw;" class=" card-order d-flex  flex-column rounded-xl  mx-2 bg-red-darken-1 px-5 py-5">
              <span class="mx-auto bg-grey-darken-4 rounded-pill text-body-1 px-5 py-2 mb-3">{{
                $t('block3.item2.subtitle')
              }} </span>
              <div class="text-center text-uppercase font-weight-medium text-h4 mb-5">{{ $t('block3.item2.title') }}
              </div>
              <div class="text-center">
                <span class="font-weight-bold text-h3 ">{{ $t('block3.item2.price') }}</span>
                <span class="text-h4">{{ $t('block3.currency') }}</span>
              </div>
              <div class="text-center mb-5 text-h4 text-lowercase">
                {{ $t('block3.item2.period') }}
              </div>
              <hr class="mb-5" />
              <ul class="mb-5 ps-5">
                <li class="text-body-2"> {{ $t('block3.item2.description.item1') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item2') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item3') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item4') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item5') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item6') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item7') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item8') }}</li>
              </ul>
              <v-btn @click="toggle( $t('block3.item2.title'))" size="x-large" class="mt-auto mx-auto  rounded  text-center">
                {{ $t('block3.buttonText') }}
              </v-btn>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item>
            <v-card width="80vw;" class="card-order d-flex  flex-column rounded-xl  mx-2 px-5 py-5">
              <div class="text-center text-uppercase text-amber-lighten-3 font-weight-medium text-h4">{{
                $t('block3.item3.title') }}</div>
              <div class="text-center text-uppercase text-amber-lighten-3 font-weight-medium text-h5 mb-5">{{
                $t('block3.item3.title2') }}</div>
              <div class="text-center">
                <span class="font-weight-bold text-h3 ">{{ $t('block3.item3.price') }}</span>
                <span class="text-h4">{{ $t('block3.currency') }}</span>
              </div>
              <div class="text-center mb-5 text-h4 text-lowercase">
                {{ $t('block3.item3.period') }}
              </div>
              <hr class="mb-5" />
              <ul class="mb-5 ps-5">
                <li class="text-body-2"> {{ $t('block3.item3.description.item1') }}</li>
                <li class="text-body-2"> {{ $t('block3.item3.description.item2') }}</li>
                <li class="text-body-2"> {{ $t('block3.item3.description.item3') }}</li>
                <li class="text-body-2"> {{ $t('block3.item3.description.item4') }}</li>
                <li class="text-body-2"> {{ $t('block3.item3.description.item5') }}</li>
                <li class="text-body-2"> {{ $t('block3.item3.description.item6') }}</li>
                <li class="text-body-2"> {{ $t('block3.item3.description.item7') }}</li>
              </ul>
              <v-btn @click="toggle( $t('block3.item3.title'))" size="x-large" class="mt-auto bg-amber-lighten-3 mx-auto text-center">
                {{ $t('block3.buttonText') }}
              </v-btn>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </div>
      <div class="d-none d-md-flex">
        <v-row align-content="stretch" class="align-content-stretch">
          <v-col cols="4">
            <v-card class="d-flex rounded-xl  flex-column h-100  mx-2 bg-blue-grey-lighten-5 px-5 py-5">
              <div class="text-center text-uppercase font-weight-medium text-h4 mb-5">{{ $t('block3.item1.title') }}
              </div>
              <div class="text-center">
                <span class="font-weight-bold text-h3 ">{{ $t('block3.item1.price') }}</span>
                <span class="text-h4">{{ $t('block3.currency') }}</span>
              </div>
              <div class="text-center mb-5 text-h4 text-lowercase">
                {{ $t('block3.item1.period') }}
              </div>
              <hr class="mb-5" />
              <ul class="mb-5 ps-5">
                <li class="text-body-2"> {{ $t('block3.item1.description.item1') }}</li>
                <li class="text-body-2"> {{ $t('block3.item1.description.item2') }}</li>
                <li class="text-body-2"> {{ $t('block3.item1.description.item3') }}</li>
                <li class="text-body-2"> {{ $t('block3.item1.description.item4') }}</li>
                <li class="text-body-2"> {{ $t('block3.item1.description.item5') }}</li>
                <li class="text-body-2"> {{ $t('block3.item1.description.item6') }}</li>
              </ul>
              <v-btn @click="toggle( $t('block3.item1.title'))" size="x-large" class="mt-auto mx-auto rounded text-center">
                {{ $t('block3.buttonText') }}
              </v-btn>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="d-flex rounded-xl  flex-column h-100  mx-2 bg-red-darken-1 px-5 py-5">
              <span class="mx-auto bg-grey-darken-4 rounded-pill text-body-1 px-5 py-2 mb-3">{{
                $t('block3.item2.subtitle')
              }} </span>
              <div class="text-center text-uppercase font-weight-medium text-h4 mb-5">{{ $t('block3.item2.title') }}
              </div>
              <div class="text-center">
                <span class="font-weight-bold text-h3 ">{{ $t('block3.item2.price') }}</span>
                <span class="text-h4">{{ $t('block3.currency') }}</span>
              </div>
              <div class="text-center mb-5 text-h4 text-lowercase">
                {{ $t('block3.item2.period') }}
              </div>
              <hr class="mb-5" />
              <ul class="mb-5 ps-5">
                <li class="text-body-2"> {{ $t('block3.item2.description.item1') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item2') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item3') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item4') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item5') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item6') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item7') }}</li>
                <li class="text-body-2"> {{ $t('block3.item2.description.item8') }}</li>
              </ul>
              <v-btn @click="toggle( $t('block3.item2.title'))" size="x-large" class="mt-auto mx-auto rounded text-center">
                {{ $t('block3.buttonText') }}
              </v-btn>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="d-flex rounded-xl  flex-column h-100  mx-2 px-5 py-5">
              <div class="text-center text-uppercase text-amber-lighten-3 font-weight-medium text-h4">{{
                $t('block3.item3.title') }}</div>
              <div class="text-center text-uppercase text-amber-lighten-3 font-weight-medium text-h5 mb-5">{{
                $t('block3.item3.title2') }}</div>
              <div class="text-center">
                <span class="font-weight-bold text-h3 ">{{ $t('block3.item3.price') }}</span>
                <span class="text-h4">{{ $t('block3.currency') }}</span>
              </div>
              <div class="text-center mb-5 text-h4 text-lowercase">
                {{ $t('block3.item3.period') }}
              </div>
              <hr class="mb-5" />
              <ul class="mb-5 ps-5">
                <li class="text-body-2"> {{ $t('block3.item3.description.item1') }}</li>
                <li class="text-body-2"> {{ $t('block3.item3.description.item2') }}</li>
                <li class="text-body-2"> {{ $t('block3.item3.description.item3') }}</li>
                <li class="text-body-2"> {{ $t('block3.item3.description.item4') }}</li>
                <li class="text-body-2"> {{ $t('block3.item3.description.item5') }}</li>
                <li class="text-body-2"> {{ $t('block3.item3.description.item6') }}</li>
                <li class="text-body-2"> {{ $t('block3.item3.description.item7') }}</li>
              </ul>
              <v-btn @click="toggle( $t('block3.item3.title'))" size="x-large" class="mt-auto  rounded bg-amber-lighten-3 mx-auto text-center">
                {{ $t('block3.buttonText') }}
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- #endregion block3-->
    <!-- #region block4 -->
    <div id="feedback" class=" my-5">
      <v-slide-group>
        <v-slide-group-item >
          <v-card  :width="cardWidth" class="d-flex flex-column rounded-xl  mx-2 px-5 py-5">
            <div>
              <svg fill="#101010" width="100px" height="100px" viewBox="0 0 32 32" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z">
                </path>
              </svg>
            </div>
            <div class="mb-5">{{ $t('block4.comment1.text') }} </div>
            <span class="text-h5 text-end mt-auto">{{ $t('block4.comment1.author') }}</span>
          </v-card>
        </v-slide-group-item><v-slide-group-item >
          <v-card  :width="cardWidth" class="d-flex flex-column rounded-xl  mx-2 px-5 py-5">
            <div>
              <svg fill="#101010" width="100px" height="100px" viewBox="0 0 32 32" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z">
                </path>
              </svg>
            </div>
            <div class="mb-5" style="white-space: pre-line">{{ $t('block4.comment2.text') }} </div>
            <span class="text-h5 text-end mt-auto">{{ $t('block4.comment2.author') }}</span>
          </v-card>
        </v-slide-group-item><v-slide-group-item >
          <v-card  :width="cardWidth" class="d-flex flex-column rounded-xl  mx-2 px-5 py-5">
            <div>
              <svg fill="#101010" width="100px" height="100px" viewBox="0 0 32 32" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z">
                </path>
              </svg>
            </div>
            <div class="mb-5">{{ $t('block4.comment3.text') }} </div>
            <span class="text-h5 text-end mt-auto">{{ $t('block4.comment3.author') }}</span>
          </v-card>
        </v-slide-group-item><v-slide-group-item >
          <v-card  :width="cardWidth" class="d-flex flex-column rounded-xl  mx-2 px-5 py-5">
            <div>
              <svg fill="#101010" width="100px" height="100px" viewBox="0 0 32 32" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z">
                </path>
              </svg>
            </div>
            <div class="mb-5">{{ $t('block4.comment4.text') }} </div>
            <span class="text-h5 text-end mt-auto">{{ $t('block4.comment4.author') }}</span>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </div>
    <!-- #endregion block4-->
    <!-- #region block5 -->
    <v-card id="contactMe" class="px-5 py-5 my-5">
            <v-form ref="form" id="form" @submit.prevent="submit">
                <v-select name="service" :label="$t('block5.service')" v-model="service.value.value"
                    :error-messages="service.errorMessage.value" :items="services"></v-select>
                <v-text-field name="name" :label="$t('block5.name')" type="text" v-model="name.value.value"
                    :error-messages="name.errorMessage.value"></v-text-field>
                <v-text-field name="phoneNumber" :label="$t('block5.phoneNumber')" type="number"
                    v-model="phoneNumber.value.value" :error-messages="phoneNumber.errorMessage.value"></v-text-field>
                <v-text-field name="email" :label="$t('block5.email')" type="email" v-model="email.value.value"
                    :error-messages="email.errorMessage.value"></v-text-field>
                <v-textarea name="message" :label="$t('block5.addInfo')" v-model="message.value.value"
                    :error-messages="message.errorMessage.value"></v-textarea>
                <v-btn class="mt-2 bg-red-darken-1" type="submit" block>{{ $t('block5.confirm') }}</v-btn>
            </v-form>
        </v-card>
    <!-- #endregion block5-->
  </v-container>
  <v-dialog v-model="successDialog" width="auto">
        <v-card max-width="400" class="bg-success" prepend-icon="mdi-check"
            :text=" $t('block5.successResponse.text')"
            :title="$t('block5.successResponse.title')">
            <template v-slot:actions>
                <v-btn class="ms-auto" text="Ok" @click="successDialog = false"></v-btn>
            </template>
        </v-card>
    </v-dialog>
    <v-dialog v-model="failedDialog" width="auto">
        <v-card max-width="400" class="bg-red-darken-1" prepend-icon="mdi-alert-circle-outline"
            :text=" $t('block5.failedResponse.text')"
            :title="$t('block5.failedResponse.title')">
            <template v-slot:actions>
                <v-btn class="ms-auto" text="Ok" @click="failedDialog = false"></v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>


<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

  import { useGoTo } from 'vuetify'  
  const goTo = useGoTo()
  const options = computed(() => ({
    container: '#contactMe',
    duration: 200,
    easing: 'linear',
    offset: 0,
  }))
  const toggle = function(value){
    service.value.value = value;
    goTo('#contactMe', options.value)
  }
  
  import { computed } from 'vue'
  import { useDisplay } from 'vuetify'
  
  const { mobile } = useDisplay()
  const cardWidth = computed(() => {
    // debugger;
    return mobile.value? "80vw": '400px'
    // name is reactive and
    // must use .value
    switch (name1.value) {
      case 'xs': return '220px'
      case 'sm': return '400px'
      case 'md': return '500px'
      case 'lg': return '600px'
      case 'xl': return '800px'
      case 'xxl': return '1200px'
    }});
import emailjs from '@emailjs/browser';
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
        },
        phoneNumber(value) {
            if (/^[0-9-]{7,}$/.test(value)) return true

            return 'Phone number needs to be at least 7 digits.'
        },
        email(value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Must be a valid e-mail.'
        },
        service(value) {
            if (value) return true

            return 'Select an item.'
        },
        message(value) {
            return true;
        },
    },
})
const name = useField('name')
const phoneNumber = useField('phoneNumber')
const email = useField('email')
const service = useField('service')
const message = useField('message')
const services = ref([
    i18n.t("block3.item1.title"),
    i18n.t("block3.item2.title"),
    i18n.t("block3.item3.title")
])
const successDialog = ref(false)
const failedDialog = ref(false)
const submit = handleSubmit(values => {
    debugger;
    successDialog.value = true;
    // failedDialog.value = true;
    // emailjs
    //     .send('service_e713mpf', 'template_flc81vc', values, { publicKey: 'Jw8yl3Vc3FDjiV-RT' })
    //     .then(
    //         () => {
    //             debugger;
    //             console.log('SUCCESS!');
    //         },
    //         (error) => {
    //             debugger;
    //             console.log('FAILED...', error.text);
    //         },
    //     );
})
</script>
