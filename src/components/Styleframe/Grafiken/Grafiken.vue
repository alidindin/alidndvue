<template>
  <div>
    <v-container fluid grid-list-xl grey lighten-5>
      <!-- Scroll Element -->
      <div id="grafiken" class="styleframe-scrollposition"></div>
      <!-- Überschrift Grafiken -->
      <v-layout row wrap>
        <v-flex d-flex xs12 sm2 m2>
        </v-flex>
        <v-flex d-flex xs12 sm8 m8>
          <h1 class="styleframe-h1" style="color: #000000; display: flex; justify-content: center;">Grafiken</h1>
          <br>
          <br>
        </v-flex>
        <v-flex d-flex xs12 sm2 m2>
        </v-flex>
      </v-layout>
      <!-- Grafiken -->
      <logos></logos>
      <icons></icons>
      <illustrationen></illustrationen>

    </v-container>
  </div>
</template>
<script type="text/javascript">

  import '../../../stylesheets/components/grafiken.css';

  import Logos from './Logos/Logos';
  import Icons from './Icons/Icons';
  import Illustrationen from './Illustrationen/Illustrationen';


  export default {
    data () {
      return {
        message: 'Copy These Text'
      }
    },
    components: {
      'logos': Logos,
      'icons': Icons,
      'illustrationen': Illustrationen
    },
    name: "grafiken"
  }
</script>

<style></style>
