<template xmlns:v-clipboard>
  <div>
    <v-container fluid grid-list-xl>
      <div id="grautoene" class="styleframe-scrollposition"></div>
      <!-- Überschrift Unbunte -->
      <v-layout row wrap>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
        <v-flex d-flex  xs12 sm8 m8>
          <v-card>
            <div class="card card--tile" style="height: auto;">
              <div class="v-card__text text-md-center"><h3>Grautöne</h3>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
      </v-layout>
      <!-- Unbunte -->
      <v-layout row wrap>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
        <v-flex xs12 sm4 m4>
          <v-card>
            <div class="dl-clr dl-clr-tbl-lgt" style="height: auto;" v-clipboard:copy="tabellenZelleHell" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex caption">
                    <span>Tabellenzelle (Hell)</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-tbl-lgt</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#F9F9F2</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-tbl-drk" style="height: auto;"  v-clipboard:copy="tabellenZeileDunkel" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex caption">
                    <span>Seitenabschnitt-BG, Tabellenzeile (dunkel)</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-tbl-drk</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#F2F2F2</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-crd-otl" style="height: auto;" v-clipboard:copy="kartenOutline" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex caption">
                    <span>Karten-Outline</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-crd-otl</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#E6E6E6</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-btn" style="height: auto;" v-clipboard:copy="colorButtons" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex caption">
                    <span>Buttons</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-btn</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#DDDDDD</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-rgl-ln" style="height: auto;"  v-clipboard:copy="reglerLinie" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex caption">
                    <span>Regler-Linie, Buttons</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-btn</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#CCCCCC</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 m4>
          <v-card>
            <div class="dl-clr dl-clr-ftr-bg" style="height: auto;" v-clipboard:copy="footerBackground" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex caption">
                    <span>Footer-Background, Phasenlinien, Linien</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-ftr-bg</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#AEAEAE</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-tsr" style="height: auto;" v-clipboard:copy="teaser" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex caption">
                    <span>Text, Buttons, Teaser Kreis Outline</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-tsr</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#999999</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-ftr-bg-2" style="height: auto;" v-clipboard:copy="footerBackground2" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex caption">
                    <span>Footer-Background</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-ftr-bg-2</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#6D757D</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-nav-sub" style="height: auto;" v-clipboard:copy="navSubtext" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex caption">
                    <span>Navigation, Subtext, Icons</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-ftr-bg-2</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#6D757D</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-ill" style="height: auto;" v-clipboard:copy="illustration" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex caption">
                    <span>Illustration</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-ill</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#474747</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 sm2 m2>
        </v-flex>
      </v-layout>


    </v-container>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        tabellenZelleHell: 'dl-clr-tbl-lgt',
        tabellenZeileDunkel: 'dl-clr-tbl-drk',
        kartenOutline: 'dl-clr-crd-otl',
        colorButtons: 'dl-clr-btn',
        reglerLinie: 'dl-clr-rgl-ln',
        footerBackground: 'dl-clr-ftr-bg',
        footerBackground2: 'dl-clr-ftr-bg-2',
        teaser: 'dl-clr-tsr',
        navSubtext: 'dl-clr-nav-sub',
        illustration: 'dl-clr-ill',
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
    name: "unbunte"
  }
</script>

<style scoped>

</style>

