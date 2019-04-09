<template>
  <div>

   <basis-stil-elemente></basis-stil-elemente>
    <grafiken></grafiken>

  </div>
</template>

<script>



    import BasisStilElemente from "./Styleframe/BasisStilElemente/BasisStilElemente";
    import Grafiken from "./Styleframe/Grafiken/Grafiken";

    export default {

      components: {
        "basis-stil-elemente": BasisStilElemente,
        "grafiken": Grafiken

        },
      name: "styleframe"
    }
</script>

<style scoped>

</style>
