<template>
  <v-app id="inspire">



        <dnd-menu></dnd-menu>
          <transition name="router-anim" enter-active-class="animated bounceInRight" leave-active-class="bounceInLeft">
           <router-view></router-view>
         </transition>

        <dnd-footer></dnd-footer>


  </v-app>
</template>


<script type="text/javascript">
 // import {router} from '../main';
  import DndMenu from "./DndMenu";
  import DndFooter from "./DndFooter";


  export default {
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {},
    beforeCreate: function () {

    },
    mounted: function () {

    },
    destroyed: function () {

    },
    components: {
      DndFooter,
      DndMenu

    }
  }


</script>
