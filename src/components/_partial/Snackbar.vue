<template>
<div>
  <v-snackbar bottom v-model="this.$store.state.snackbar.visible">
    {{ this.$store.state.snackbar.msg }}
    <v-btn v-if="this.$store.state.snackbar.showClose" :color="this.$store.state.snackbar.color" text @click="close">Close</v-btn>
  </v-snackbar>
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    close() {
       this.$store.commit('snackbar/CLOSE_SNACKBAR')
    }
  },
}
</script>