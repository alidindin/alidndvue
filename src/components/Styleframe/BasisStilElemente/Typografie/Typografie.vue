<template xmlns:v-clipboard>
  <div>
    <v-container fluid grid-list-xl>
      <div id="typo" class="styleframe-scrollposition"></div>
      <!-- Überschrift Typografie -->
      <v-layout row wrap>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
        <v-flex d-flex  xs12 sm8 m8>
          <h1 class="styleframe-h1" style="color: #000000; display: flex; justify-content: center;">Typografie</h1>
        </v-flex>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
      </v-layout>
      <!-- Typografie  -->
      <v-layout row wrap class="div-position">
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
        <v-flex xs12 sm8 m8>
          <v-card class="dl-fnt-div-clp" v-clipboard:copy="pageTitle" v-clipboard:success="onCopy" v-clipboard:error="onError">
            <div class="v-card__text">
              <div class="layout" style="display: flex; justify-content:center; padding-top: 20px;">
                <p class="dl-fnt-page-title">DB Office, Bold, 40pt / 53px</p>
              </div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex caption body-2">
                  <span>Seitentitel</span>
                </div>
                <div class="flex text-xs-right caption">
                  <span>dl-fnt-page-title</span>
                </div>
              </div>
              <div class="layout">
                <div class="flex">
                  <span style="color: #6D757;">#6D757</span>
                </div>
                <div class="flex text-xs-right">
                  <span></span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-fnt-div-clp" v-clipboard:copy="h1" v-clipboard:success="onCopy" v-clipboard:error="onError">
            <div class="v-card__text">
              <div class="layout" style="display: flex; justify-content:center; padding-top: 20px;">
                <p class="dl-fnt-h1">DB Office, Regular, 36pt / 48px</p>
              </div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex caption body-2">
                  <span>h1</span>
                </div>
                <div class="flex text-xs-right caption">
                  <span>dl-fnt-h1</span>
                </div>
              </div>
              <div class="layout">
                <div class="flex">
                  <span style="color: #000000;">#000000</span>
                </div>
                <div class="flex text-xs-right">
                  <span></span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-fnt-div-clp" v-clipboard:copy="h2" v-clipboard:success="onCopy" v-clipboard:error="onError">
            <div class="v-card__text">
              <div class="layout" style="display: flex; justify-content:center; padding-top: 20px;">
                <p class="dl-fnt-h2">DB Office, Regular, 24pt / 32px</p>
              </div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex caption body-2">
                  <span>h2</span>
                </div>
                <div class="flex text-xs-right caption">
                  <span>dl-fnt-h2</span>
                </div>
              </div>
              <div class="layout">
                <div class="flex">
                  <span style="color: #FF0000;">#FF0000</span>
                </div>
                <div class="flex text-xs-right">
                  <span></span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-fnt-div-clp" v-clipboard:copy="p" v-clipboard:success="onCopy" v-clipboard:error="onError">
            <div class="v-card__text">
              <div class="layout" style="display: flex; justify-content:center; padding-top: 20px;">
                <p class="dl-fnt-text-regular">DB Office, Regular, 18pt / 24px</p>
              </div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex caption body-2">
                  <span>p</span>
                </div>
                <div class="flex text-xs-right caption">
                  <span>dl-fnt-text-regular</span>
                </div>
              </div>
              <div class="layout">
                <div class="flex">
                  <span style="color: #000000;">#000000</span>
                </div>
                <div class="flex text-xs-right">
                  <span></span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-fnt-div-clp" v-clipboard:copy="zusatzinfo" v-clipboard:success="onCopy" v-clipboard:error="onError">
            <div class="v-card__text">
              <div class="layout" style="display: flex; justify-content:center; padding-top: 20px;">
                <p class="dl-fnt-text-small">DB Office, Regular, 14pt / 19px</p>
              </div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex caption body-2">
                  <span>p</span>
                </div>
                <div class="flex text-xs-right caption">
                  <span>dl-fnt-text-small</span>
                </div>
              </div>
              <div class="layout">
                <div class="flex">
                  <span style="color: #000000;">#000000</span>
                </div>
                <div class="flex text-xs-right">
                  <span></span>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        pageTitle: 'dl-fnt-page-title',
        h1: 'dl-fnt-h1',
        h2: 'dl-fnt-h2',
        p: 'dl-fnt-text-regular',
        zusatzinfo: 'dl-fnt-text-small',
      }
    },
    methods: {
      onCopy: function (e) {
        alert('You just copied: ' + e.text)
      },
      onError: function (e) {
        alert('Failed to copy texts')
      }
    },
    name: "typografie"
  }
</script>

<style scoped>

</style>
