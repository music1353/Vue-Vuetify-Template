<template>
<div>
<v-app>
  <section class="home-section">
    <div class="home-data">
      <div v-for="item in usersData">
        {{item}}
      </div>
    </div>
  </section>
</v-app>
</div>
</template>

<script>
export default {
  components: {},
  mounted() {
    this.userDetails();
  },
  data() {
    return {
      usersData: []
    }
  },
  methods: {
    userDetails() {
      this.$api.v1.users.detail().then((response) => {
        let res = response.data;
        this.usersData = res.result;
      }).catch((error) => {
        console.log(error.response.data.msg);
      });
    }
  }
}
</script>

<style lang="scss">
</style>