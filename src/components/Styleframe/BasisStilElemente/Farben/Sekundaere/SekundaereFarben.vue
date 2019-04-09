<template xmlns:v-clipboard>
  <div>
    <v-container fluid grid-list-xl>

      <div id="sekundaer" class="styleframe-scrollposition"></div>
      <!-- Überschrift Sekundäre -->
      <v-layout row wrap>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
        <v-flex d-flex  xs12 sm8 m8>
          <v-card>
            <div class="card card--tile" style="height: auto;">
              <div class="v-card__text text-md-center"><h3>Sekundäre Farben</h3>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
      </v-layout>


      <!-- Sekundäre Farben -->
      <v-layout row wrap >
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
        <v-flex xs12 sm4 m4>
          <v-card>
            <div class="card card--tile" style="height:50px;">
              <div class="v-card__text text-md-center"><h3>D.Frame Phasen</h3>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-sec-phase0 text-white" style="height: auto;" v-clipboard:copy="phase0" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 0</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-sec-phase0</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#ADADAD</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span>#858585</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-sec-phase1 text-white" style="height: auto;"  v-clipboard:copy="phase1" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 1</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-sec-phase1</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#E5007E</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span>#C2006B</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-sec-phase2 text-white" style="height:auto;"  v-clipboard:copy="phase2" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 2</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-sec-phase2</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#E20613</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span>#BF0D0D</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-sec-phase3 text-white" style="height:auto;" v-clipboard:copy="phase3" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 3</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-sec-phase3</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#F29100</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span>#CD7D00</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-sec-phase4 text-white" style="height:auto;" v-clipboard:copy="phase4" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 4</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-sec-phase4</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#EECD00</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span>#DABC00</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-sec-phase5 text-white" style="height:auto;" v-clipboard:copy="phase5" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 5</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-sec-phase5</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#93C01F</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span>#749619</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-sec-phase6 text-white" style="height:auto;" v-clipboard:copy="phase6" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 6</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-sec-phase6</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#00A099</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span>#007F79</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-sec-phase7 text-white" style="height:auto;" v-clipboard:copy="phase7" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 7</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-sec-phase7</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#1D70B7</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span>#1A588E</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-sec-phase8 text-white" style="height:auto;" v-clipboard:copy="phase8" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 8</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-sec-phase8</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#6E278C</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span>#4B2261</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-sec-phase9 text-white" style="height:auto;" v-clipboard:copy="phase9" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 9</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-sec-phase9</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#666666</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span>#474747</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <!-- Inactive -->
        <v-flex xs12 sm4 m4>
          <v-card>
            <div class="card card--tile" style="height: 50px;">
              <div class="v-card__text text-md-center"><h3>Inactive</h3>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-inact-phase0 text-white" style="height:auto;">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 0</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-sec-phase0</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#ADADAD</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span>#858585</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-inact-phase1 text-black" style="height: auto;"  v-clipboard:copy="inactPhase1" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 1</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-inact-phase1</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#F8DBEB</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-inact-phase2 text-black" style="height:auto;"  v-clipboard:copy="inactPhase2" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 2</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-inact-phase2</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#F9DBDB</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-inact-phase3 text-black" style="height:auto;" v-clipboard:copy="inactPhase3" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 3</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-inact-phase3</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#FAE4D7</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-inact-phase4 text-black" style="height:auto;" v-clipboard:copy="inactPhase4" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 4</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-inact-phase4</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#F6F6D4</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-inact-phase5 text-black" style="height:auto;" v-clipboard:copy="inactPhase5" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 5</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-inact-phase5</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#DEEDDA</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-inact-phase6 text-black" style="height:auto;" v-clipboard:copy="inactPhase6" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 6</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-inact-phase6</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#DBEEED</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-inact-phase7 text-black" style="height:auto;" v-clipboard:copy="inactPhase7" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 7</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-inact-phase7</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#DCE4F0</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-inact-phase8 text-black" style="height:auto;" v-clipboard:copy="inactPhase8" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 8</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-inact-phase8</span>
                  </div>
                </div>
                <div class="layout">
                  <div class="flex">
                    <span>#E5E2ED</span>
                  </div>
                  <div class="flex text-xs-right">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
          <v-card>
            <div class="dl-clr dl-clr-inact-phase9 text-black" style="height:auto;" v-clipboard:copy="inactPhase9" v-clipboard:success="onCopy" v-clipboard:error="onError">
              <div class="v-card__text">
                <div class="layout">
                  <div class="flex  body-2">
                    <span>Phase 9</span>
                  </div>
                  <div class="flex text-xs-right caption">
                    <span>dl-clr-inact-phase9</span>
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
        phase0: 'dl-clr-sec-phase0',
        phase1: 'dl-clr-sec-phase1',
        phase2: 'dl-clr-sec-phase2',
        phase3: 'dl-clr-sec-phase3',
        phase4: 'dl-clr-sec-phase4',
        phase5: 'dl-clr-sec-phase5',
        phase6: 'dl-clr-sec-phase6',
        phase7: 'dl-clr-sec-phase7',
        phase8: 'dl-clr-sec-phase8',
        phase9: 'dl-clr-sec-phase9',
        inactPhase1:'dl-clr-inact-phase1',
        inactPhase2:'dl-clr-inact-phase2',
        inactPhase3:'dl-clr-inact-phase3',
        inactPhase4:'dl-clr-inact-phase4',
        inactPhase5:'dl-clr-inact-phase5',
        inactPhase6:'dl-clr-inact-phase6',
        inactPhase7:'dl-clr-inact-phase7',
        inactPhase8:'dl-clr-inact-phase8',
        inactPhase9:'dl-clr-inact-phase9',
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
    name: "sekundare-farben"
  }
</script>

<style scoped>
</style>
