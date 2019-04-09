<template xmlns:v-clipboard>
  <div>
    <v-container fluid grid-list-xl>
      <div id="logos" class="styleframe-scrollposition"></div>
      <!-- Überschrift Logos -->
      <v-layout row wrap>
        <v-flex d-flex xs12 sm2 m2>
        </v-flex>
        <v-flex d-flex xs12 sm8 m8>
          <h3 class="styleframe-h1" style="color: #000000; display: flex; justify-content: center;">Logos</h3>
          <br>
          <br>
        </v-flex>
      </v-layout>
      <!-- Logos -->
      <v-layout row wrap class="div-position">
        <v-flex d-flex xs12 sm2 m2>
        </v-flex>
        <v-flex xs12 sm4 m4>
          <v-card  class="logo-position dl-logo-clp-div" v-clipboard:copy="dlabLogo" v-clipboard:success="onCopy" v-clipboard:error="onError">
            <div style="display:flex; justify-content: center;">
              <div class="dl-logo dl-logo-dlab">
              </div>
            </div>
            <div class="card__text">
              <div class="layout">
                <div class="flex">
                  <span style="color: #ff0000;">#FF0000</span>
                </div>
                <div class="flex text-xs-right caption">
                  <span>dl-logo-dlab</span>
                </div>
              </div>
              <div class="layout">
                <div class="flex">
                  <span style="color: #6D757A;">#6D757D</span>
                </div>
                <div class="flex text-xs-right">
                  <span></span>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 m4>
          <v-card  class="logo-position dl-logo-clp-div" v-clipboard:copy="dframeLogo" v-clipboard:success="onCopy" v-clipboard:error="onError">
            <div style="display:flex; justify-content: center;">
              <div class="dl-logo dl-logo-dframe">
              </div>
            </div>
            <div class="card__text">
              <div class="layout">
                <div class="flex">
                  <span style="color: #ff0000;">#FF0000</span>
                </div>
                <div class="flex text-xs-right caption">
                  <span>dl-logo-dframe</span>
                </div>
              </div>
              <div class="layout">
                <div class="flex">
                  <span style="color: #6D757A;">#6D757D</span>
                </div>
                <div class="flex text-xs-right">
                  <span></span>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm2 m2>
        </v-flex>
      </v-layout>


    </v-container>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        dlabLogo: 'dl-logo-dlab',
        dframeLogo: 'dl-logo-dframe',
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
    name: "logos"
  }
</script>

<style scoped>

</style>
