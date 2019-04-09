<template>
  <div>

    <v-footer dark height="auto" absolute >
      <v-card
        class="flex"
        flat
        tile
      >


        <v-card-actions class="grey darken-3 justify-center">
          &copy;2019 — <strong>alidnd.com</strong>
        </v-card-actions>
      </v-card>
    </v-footer>

</div>
</template>
<style>

</style>
<script type="text/javascript">

  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    }),
    name: "dnd-footer"
  }
</script>
