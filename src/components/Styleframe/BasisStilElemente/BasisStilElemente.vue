<template>
  <div>
    <v-container fluid grid-list-md grey lighten-5>
      <!-- Scroll Element -->
      <div id="basis-stilelemente" class="styleframe-scrollposition"></div>
      <!-- Überschrift Basis-Stilelemente -->
      <v-layout row wrap>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
        <v-flex d-flex  xs12 sm8 m8>
          <h3 class="styleframe-h1" style="color: #000000; display: flex; justify-content: center;">Basis-Stilelemente</h3>
          <br>
          <br>
        </v-flex>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
      </v-layout>
      <!-- Überschrift Farben -->
      <v-layout row wrap>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
        <v-flex d-flex  xs12 sm8 m8>
          <h3 class="styleframe-h1" style="color: #000000; display: flex; justify-content: center;">Farben</h3>
          <br>
          <br>
        </v-flex>
        <v-flex d-flex  xs12 sm2 m2>
        </v-flex>
      </v-layout>
      <primaere-farben></primaere-farben>
      <sekundaere-farben></sekundaere-farben>
      <unbunte></unbunte>
      <typografie></typografie>




    </v-container>
  </div>
</template>

<script type="text/javascript">

  import '../../../stylesheets/components/basis-stilelemente.css';

  import PrimaereFarben from "./Farben/Primaere/PrimaereFarben";
  import SekundaereFarben from "./Farben/Sekundaere/SekundaereFarben";
  import Unbunte from "./Farben/Unbunte/UnbunteFarben";
  import Typografie from "./Typografie/Typografie";

  export default {
    components: {
      'primaere-farben': PrimaereFarben,
      'sekundaere-farben': SekundaereFarben,
      'unbunte': Unbunte,
      'typografie': Typografie
    },
    data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }),
    name: "basis-stilelemente"
  }
</script>

<style>
</style>
