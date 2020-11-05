<template>
<div>
  <b-navbar class="dentco-nav-header" toggleable="sm" color="#33B6B0" fixed="top">
    <b-navbar-brand class="header-logo">
      <img width="70px" src="../assets/images/dentco.png" alt="">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="header-actions ml-auto">
        <b-nav-item class="action-link" href="#">服務內容</b-nav-item>
        <b-nav-item class="action-link" href="#">關於我們</b-nav-item>
        <b-nav-item class="action-link" href="#">線上客服</b-nav-item>

        <div class="divider-vertical d-none d-sm-block"></div>

        <b-nav-item class="action-link">
          <b-button class="link-btn" pill variant="primary" size="sm">登入/註冊</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  }
}
</script>