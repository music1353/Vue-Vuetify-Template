<template>
<div>
  <v-snackbar v-model="visible">
    {{ this.$store.state.snackbar.msg }}
    <v-btn v-if="showClose" :color="this.$store.state.snackbar.color" text @click="close">Close</v-btn>
  </v-snackbar>
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    visible() {
      return this.$store.state.snackbar.visible
    },
    showClose() {
      return this.$store.state.snackbar.showClose
    }
  },
  methods: {
    close() {
       this.$store.commit('closeSnack');
    }
  },
}
</script>