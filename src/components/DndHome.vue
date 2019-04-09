<template>
  <div>


    <v-container fluid grid-list-xl>
    <!-- Title -->
    <v-layout row wrap>
      <v-flex d-flex  xs12 sm2 m2>
      </v-flex>
      <v-flex d-flex  xs12 sm8 m8>
        <div class="flex div-vcard">
      <h1>Praxissemester 2017/2018 | DB Vertrieb | d.lab </h1>
        </div>
      </v-flex>
      <v-flex d-flex  xs12 sm2 m2>
      </v-flex>
    </v-layout>

    <!-- 4 V-Cards -->
    <v-layout row wrap vcard-row-position>
      <v-flex d-flex  xs12 sm2 m2>
      </v-flex>
      <v-flex xs12 sm2 m2 vcard-margin-left>
        <v-card to="./Dnddlab" class="" :hover="true">
          <div class="div-vcard">
            <img src="../../src/assets/alidndvue/logo.png" style="max-width: 100%; max-height: auto;"/>
          </div>
          <v-card-title primary-title>
            <div class="flex vcard-dimensons" style="justify-content:center;">
              <p>d.lab</p>
              <div>Enstehung, Funktion,<br> das Lab</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm2 m2 vcard-margin>
        <v-card to="./Styleguide" :hover="true">
          <div class="div-vcard">
            <img src="../../src/assets/alidndvue/logo.png" style="max-width: 100%; max-height: auto;"/>
          </div>
          <v-card-title primary-title>
            <div class="flex vcard-dimensons" style="justify-content:center;">
              <p>Frühsport</p>
              <div>Videoschnitt, <br>Layout Arbeiten <br>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm2 m2 vcard-margin>
        <v-card :hover="true">
          <div class="div-vcard">
            <img src="../../src/assets/alidndvue/logo.png" style="max-width: 100%; max-height: auto;"/>
          </div>
          <v-card-title primary-title>
            <div class="flex vcard-dimensons" style="justify-content:center;">
              <p>d.Time</p>
              <div>Design Princples <br>
                Design Principles
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm2 m2 vcard-margin>
        <v-card to="./lalala":hover="true">
          <div class="div-vcard">
            <img src="../../src/assets/alidndvue/logo.png" style="max-width: 100%; max-height: auto;"/>
          </div>
          <v-card-title primary-title>
            <div class="flex vcard-dimensons" style="justify-content:center;">
              <p>d.frame</p>
              <div>Projektool der <br>
                Deutschen Bahn</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex d-flex  xs12 sm2 m2>
      </v-flex>
    </v-layout>
    </v-container>





  </div>

</template>
<style>

</style>
<script type="text/javascript">

 // import DndMenu from "./DndMenu";
//  import DndFooter from "./DndFooter";


  export default {
    data () {
      return {}
    },
    mounted () {

    },
    components: {



    }
  }

</script>
