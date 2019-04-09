<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"

    hide-overlay
    temporary
    stateless
    fixed
    clipped

  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title to="http://alidnd.com">alidnd.com</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title" :to="item.link"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<style>
</style>
<script type="text/javascript">
  /* import Menu from './DndMenu.vue';

   export default {
       data() {
           return {
               drawer: null
           }
       }

       computed: {

           getProfileIcon() {

           }
       },
       mounted() {
       },
       methods: {
           routeHome() {
               this.$router.push("/home");
           }
       },
       components: {
           'menu-component': Menu
       }
   }*/

  export default {
      data () {
        return {
          drawer: true,
          items: [
            { title: 'Home', icon: 'dashboard', link: '/' },
            { title: 'dlab', icon: 'question_answer', link: '/Dnddlab' },
            { title: 'Styleframe', icon: 'question_answer', link: '/Styleframe' },
            { title: '404', icon: 'question_answer', link: '/lalal' }
          ],
          mini: true,
          right: null
        }
      },
    name: "dnd-menu"
    }




</script>
