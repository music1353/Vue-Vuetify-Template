<template>
<div>
  <div class="dentco-doctor-card">
    <div class="doctor-card-header">
      <b-row>
        <b-col class="header-img" cols="5">
          <img src="https://placekitten.com/300/300">
        </b-col>
        <b-col class="header-info" cols="7">
          <div class="info-name">
            <span class="name-label">{{ data.name }}</span>
            <span class="position-label">醫師</span>
          </div>
          <div class="info-rating">
            <b-form-rating
              class="rating"
              :value="4.8"
              no-border
              inline
              readonly
              variant="warning"
            />
          </div>
          <div class="info-judgement">
            {{ data.judgementCount }} 則評論<b-icon icon="arrow-up-right" font-scale="0.9"></b-icon>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="doctor-card-content">
      <b-row class="content-treatments">
        <b-col cols="12">
          <b-badge class="treatment-badge" pill variant="light" v-for="(treat, idx) in data.treatments" :key="idx">{{ treat }}</b-badge>
        </b-col>
      </b-row>
    </div>
    <div class="doctor-card-actions">
      <b-row>
        <b-col cols="12" align="right">
          <b-button class="mr-2" variant="outline-primary">詳細資訊</b-button>
          <b-button variant="primary">立即預約</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['data'],
  components: {},
  data() {
    return {}
  }
}
</script>