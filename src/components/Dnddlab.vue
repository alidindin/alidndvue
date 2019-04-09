<template>
  <div>





          <div class="img-banner" :style="{'background-image': 'url(' + require('../assets/alidndvue/dlab_banner.jpg') + ')'}">
            <div class="content" style="color:white; padding:50px;">
              <h1>d.lab</h1>
              <p>DB Vertrieb<br/>
                Frankfurt am Main</p>
            </div>
          </div>
          <header class="major">

          </header>



  <!-- 4 V-Cards -->
      <v-container>
  <v-layout row wrap vcard-row-position style="padding-top:100px;">
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
      <v-card :hover="true">
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
      <v-card :hover="true">
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

    <v-parallax
      height="300"
      src="http://alidnd.com/assets/images/malie_banner.jpg"
    ></v-parallax>



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
        <v-card :hover="true">
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
        <v-card :hover="true">
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













  </div>
</template>

<script>
    export default {

        name: "Dnddlab"
    }
</script>


