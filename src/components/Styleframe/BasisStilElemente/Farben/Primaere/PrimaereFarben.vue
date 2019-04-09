<template>
  <div>

    <v-container fluid grid-list-xl>
      <div id="primaer" class="styleframe-scrollposition"></div>
      <!-- Überschrift Primäre Farben -->
      <v-layout row wrap>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
        <v-flex d-flex  xs12 sm8 m8>
          <v-card>
            <div class="card card--tile" style="height: auto;">
              <div class="v-card__text text-md-center"><h3>Primäre Farben</h3>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
      </v-layout>

      <!-- Primäre Farben -->
      <v-layout row wrap class="div-position">
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
        <v-flex xs12 sm4 m4 >
          <v-card>
            <div class="dl-clr dl-clr-pri-base-white" style="height: auto;" v-clipboard:copy="baseWhite" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex caption">
                    <span>Text, Buttons, Icons</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-pri-base-white</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#FFFFFF</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-pri-base-gray text-white" style="height:auto;" v-clipboard:copy="baseGray" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex caption">
                    <span>Logo, Seitentitel</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-pri-base-gray</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#6D757A</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 m4>
          <v-card>
            <div class="dl-clr dl-clr-pri-base-black white--text" style="height:auto;" v-clipboard:copy="baseBlack" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex caption">
                    <span>Text, Buttons, Icons</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-pri-base-black</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#000000</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-pri-base-red text-white" style="height:auto;" v-clipboard:copy="baseRed" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex text-white caption">
                    <span>Logo, Text, Buttons, Illustrationen</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-pri-base-red</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#FF0000</span>
                  </div>
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
        baseWhite: 'dl-clr-base-white',
        baseGray: 'dl-clr-base-gray',
        baseBlack: 'dl-clr-base-black',
        baseRed: 'dl-clr-base-red',
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
    name: "primaere-farben"
  }
</script>

<style scoped>

</style>
