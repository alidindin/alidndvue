<template>
  <div id="errorDiv" class="container page">



    <div class="row">
      <div class="col-md-12">
        <div class="error-template">
          <h1>
            Oops!</h1>
          <h2>
            404 Not Found</h2>
          <div class="error-details">
            Die gesuchte Seite konnten wir leider nicht finden. :o(
          </div>
          <div class='row' style='margin: 1em 0'>

          </div>
          <div class="error-actions">
            <div class='row'>
              <div class="col-md col-xs-12">

              </div>
              <div class="col-md col-xs-12">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .error-template {
    padding: 40px 15px;
    text-align: center;
  }

  .error-actions {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .error-actions .btn {
    margin-right: 10px;
  }
</style>
<script type="text/javascript">

  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    }

  }
</script>
