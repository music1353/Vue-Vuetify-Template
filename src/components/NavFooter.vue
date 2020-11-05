<template>
<div>
  <footer class="dentco-nav-footer">
    <b-container class="dentco-container footer-container" fluid>
      <b-row style="height: 100%;">
        <b-col sm="12" md="3">
          <img width="100vw" src="../assets/images/dentco.png" alt="">
          <div class="footer-text stick-bottom d-none d-sm-block">© 2017 Dent&Co. All Rights Reserved.</div>
        </b-col>

        <b-col cols="4" md="2" offset-md="3">
          <div class="footer-title">服務內容</div>
          <div class="footer-actions">
            <div class="action-item">為何需要Dent&Co</div>
          </div>
        </b-col>

        <b-col cols="4" md="2">
          <div class="footer-title">關於我們</div>
          <div class="footer-actions">
            <div class="action-item"></div>
          </div>
        </b-col>

        <b-col cols="4" md="2">
          <div class="footer-title">聯絡我們</div>
          <div class="footer-actions">
            <div class="action-item d-inline-block">
              <img class="mr-3 item-icon" width="28px" src="@/assets/icons/line.svg" alt="">
            </div>
            <div class="action-item d-inline-block">
              <img class="mr-3 item-icon" width="28px" src="@/assets/icons/facebook.svg" alt="">
            </div>
            <div class="action-item d-inline-block">
              <img class="mr-3 item-icon" width="28px" src="@/assets/icons/gmail.svg" alt="">
            </div>
          </div>
        </b-col>

        <b-col cols="12">
          <div class="footer-text text-center w-100 mt-4 d-block d-sm-none">© 2017 Dent&Co. All Rights Reserved.</div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
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