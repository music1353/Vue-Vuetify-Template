<template>
  <div id="app">
  <v-app>
    <router-view/>

    <Snackbar style="height:0"></Snackbar>
  </v-app>
  </div>
</template>

<script>
import '@/assets/scss/app.scss'

import Snackbar from '@/components/_partial/Snackbar'

export default {
  components: {
    Snackbar
  }
}
</script>
