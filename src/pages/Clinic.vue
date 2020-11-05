<template>
<div>
  <Nav-Header></Nav-Header>

  <section class="dentco-clinic-section">
    <div class="clinic-header">
      <b-container fluid>
        <b-row class="header-row">
          <b-carousel
            class="haeder-photo-carousel"
            v-model="slide"
            :interval="4000"
            controls
            indicators
          >
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52" />
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54" />
          </b-carousel>

          <div class="header-statement d-none d-sm-block">
            <span class="statement-label">看診理念</span>
            <span class="statement-content">我們堅持用最熱潮的服務，給客人帶來最美好的體驗</span>
          </div>
        </b-row>
      </b-container>
    </div>

    <div class="clinic-info-header">
      <b-container class="dentco-container" fluid>
        <b-row>
          <b-col class="info-header-img d-none d-sm-block" md="2">
            <b-avatar src="https://dentco.s3.us-east-2.amazonaws.com/clinic/uEDVFGp5C981GlRq.jpg" size="6.5rem"></b-avatar>
          </b-col>
          <b-col class="info-header-content" sm="12" md="10">
            <div class="content-title">皇家牙醫診所
              <b-badge class="title-business-status" pill variant="primary">營業中</b-badge>
            </div>
            <div class="content-rating">
              <b-form-rating
                class="rating"
                :value="4.5"
                no-border
                inline
                readonly
                variant="warning"
              />
            </div>
            <div class="content-judgement">27則評論</div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    
    <div class="clinic-main dentco-block">
      <b-container class="dentco-container" fluid>
        <b-row>
          <b-col sm="12" md="8">
            <div class="dentco-block-title">駐診醫師</div>
            <div class="main-doctor-cards">
              <b-row>
                <b-col sm="12" md="6" v-for="doc in doctorData" :key="doc.id">
                  <Doctor-Card :data="doc"></Doctor-Card>
                </b-col>

                <b-col sm="12" md="6">
                  <Doctor-Card-Anon/>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col sm="12" md="4">
            <div class="dentco-block-title">看診資訊</div>

            <div class="main-clinic-feature-card dentco-normal-card">
              <div class="normal-card-title">診所評價</div>
              <div class="normal-card-text">
                <div class="feature-line">
                  <span class="highlight">95%</span>的客人認為服務人員<span class="highlight">態度親切</span>
                </div>
                <div class="feature-line">
                  <span class="highlight">80%</span>的客人認為該診所<span class="highlight">環境整潔</span>
                </div>
                <div class="feature-line">
                  <span class="highlight">80%</span>的客人認為該診所<span class="highlight">交通便利</span>
                </div>
              </div>
            </div>

            <div class="main-clinic-timetalbe-card dentco-normal-card">
              <div class="normal-card-title">看診時間</div>
              <div class="normal-card-text">
                <table class="timetable">
                  <thead>
                    <tr class="timetable-tr">
                      <th></th>
                      <th>一</th>
                      <th>二</th>
                      <th>三</th>
                      <th>四</th>
                      <th>五</th>
                      <th>六</th>
                      <th>七</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="timetable-tr" v-for="timeSlot in Object.keys(timeData)">
                      <td class="px-2" width="30px">
                        <span class="timetable-time-label">{{ timeSlotMapper(timeSlot) }}</span>
                        <span class="timetable-time">{{ timeData[timeSlot].time }}</span>
                      </td>
                      <td v-for="(status, idx) in timeData[timeSlot].status" :key="idx">
                        <b-icon v-if="status" icon="circle-fill" variant="primary"></b-icon>
                        <b-icon v-else icon="dash"></b-icon>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="card-text-description mt-1" align="right">詳細時間及國定假日請電洽診所確認</div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="clinic-detail dentco-block">
      <b-container class="dentco-container" fluid>
        <b-row>
          <b-col cols="12">
            <div class="dentco-block-title">更多資訊</div>
          </b-col>
          <b-col sm="12" md="8">
            <div class="dentco-normal-card pb-0">
              <div class="normal-card-title">案例相簿</div>

              <div class="detail-gallery normal-card-text fluid">
                <div class="detail-gallery-overlay" v-if="!showPhoto">
                  <div class="overlay-message">
                    <div class="message-content">
                      <b-icon icon="eye" scale="3" style="margin:0 auto;"></b-icon>
                      <div class="mt-5 mb-3">診療過程可能包含部分令您不適的圖像</div>
                      <span class="message-action" @click="showMePhoto">點擊觀看</span>
                    </div>
                    
                  </div>
                </div>

                <b-container fluid>
                  <b-row>
                    <b-col class="p-0" cols="6" v-for="(img, idx) in casePhotoData.slice(0, 4)" :key="idx">
                      <img class="gallery-img" :src="img.src" @click="showCasePhotoCarouselModal(idx)">
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </div>
          </b-col>
          <b-col sm="12" md="4">
            <div class="dentco-normal-card">
              <div class="normal-card-title">看診理念</div>
              <div class="normal-card-text">
                我們堅持用最熱忱的服務，給客人帶來最美好的體驗。我們堅持用最熱忱的服務，給客人帶來最美好的體驗。我們堅持用最熱忱的服務，給客人帶來最美好的體驗。我們堅持用最熱忱的服務，給客人帶來最美好的體驗。
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="clinic-basic-info dentco-block">
      <b-container class="dentco-container" fluid>
        <b-row>
          <b-col cols="12">
            <div class="dentco-block-title">診所基本資訊</div>
          </b-col>
          <b-col class="basic-info-content" col="12">
            <b-row>
              <b-col sm="12" md="4">
                <div class="content-item">
                  <b-icon class="mr-3" icon="telephone-fill" variant="primary"></b-icon>02-2662-9511
                </div>
                <div class="content-item">
                  <b-icon class="mr-3" icon="geo-alt-fill" variant="primary"></b-icon>新北市深坑區北深路3段26號
                </div>
              </b-col>
              
              <b-col sm="12" md="4">
                <div class="content-item">
                  <b-icon class="mr-3" icon="display" variant="primary"></b-icon>www.banqiaodental.com
                </div>
                <div class="content-item">
                  <img class="mr-3" width="18px" src="@/assets/icons/facebook-circle.svg" alt="">www.facebook.com/clinicName
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>

      <div class="basic-info-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928582.7742497163!2d120.57176036014333!3d24.614154619133732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aac3b883f5a3%3A0x258a6a8c007a6925!2z55qH5a6254mZ6Yar!5e0!3m2!1szh-TW!2stw!4v1604464266411!5m2!1szh-TW!2stw" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>


    <!-- case photo modal -->
    <b-modal id="case-photo-carousel-modal" ref="casePhotoCarouselModal" size="lg" title="案例相簿" hide-footer>
      <b-carousel
        class="case-photo-carousel"
        v-model="casePhotoCarouselSlide"
        controls
        indicators
      >
        <b-carousel-slide v-for="(img, idx) in casePhotoData" :key="idx" :img-src="img.src" />
      </b-carousel>
    </b-modal>
  </section>

  <Nav-Footer></Nav-Footer>
</div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import DoctorCard from '@/components/Clinic/DoctorCard'
import DoctorCardAnon from '@/components/Clinic/DoctorCardAnon'

export default {
  components: {
    NavHeader,
    NavFooter,
    DoctorCard,
    DoctorCardAnon
  },
  data() {
    return {
      // slide
      slide: 0,
      sliding: null,

      doctorData: [{
        id: '0000',
        name: '史提夫',
        judgementCount: '25',
        treatments: ['兒童專科', '假牙安裝', '齒顎矯正科', '牙周專科', '口腔顎面外科']
      }, {
        id: '0001',
        name: '林一為',
        judgementCount: '12',
        treatments: ['牙周專科', '口腔顎面外科']
      }, {
        id: '0002',
        name: '周大偉',
        judgementCount: '23',
        treatments: ['齒顎矯正科', '口腔顎面外科']
      }],

      timeData: {
        morning: {
          time: '10:15~12:30',
          status: [true, false, false, true, true, true, false]
        },
        afternoon: {
          time: '14:00~17:30',
          status: [true, true, true, true, true, true, true]
        },
        night: {
          time: '18:00~21:30',
          status: [true, true, true, true, true, true, false]
        }
      },

      /* case photo */
      showPhoto: false, // overlay
      casePhotoCarouselSlide: 0,
      casePhotoData: [{
        src: 'https://picsum.photos/1024/480/?image=66'
      }, {
        src: 'https://picsum.photos/1024/480/?image=67'
      }, {
        src: 'https://picsum.photos/1024/480/?image=68'
      }, {
        src: 'https://picsum.photos/1024/480/?image=69'
      }, {
        src: 'https://picsum.photos/1024/480/?image=70'
      }, {
        src: 'https://picsum.photos/1024/480/?image=71'
      }]
    }
  },
  methods: {
    // slide
    // onSlideStart(slide) {
    //   this.sliding = true
    // },
    // onSlideEnd(slide) {
    //   this.sliding = false
    // },

    // timetable
    timeSlotMapper(timeSlot) {
      let mapper = {
        morning: '上午',
        afternoon: '下午',
        night: '晚上'
      }
      return mapper[timeSlot]
    },

    /* case photo */
    // overlay
    showMePhoto() {
      this.showPhoto = true;
    },
    // case photo carousel
    showCasePhotoCarouselModal(idx) {
      this.casePhotoCarouselSlide = idx;
      this.$refs['casePhotoCarouselModal'].show()
    },
  }
}
</script>

<style lang="scss">
.dentco-clinic-section {
  margin-top: 45px;

  .clinic-header {
    margin-bottom: 40px;

    .header-row {
      position: relative;
    }

    .haeder-photo-carousel {
      width: 100%;
      height: 250px !important;
      overflow: hidden;

      /* md */
      @media screen and (min-width: 992px) {
        height: 55vh !important;
      }

      img {
        height: 250px !important;
        background-size: cover !important;

        /* md */
        @media screen and (min-width: 992px) {
          height: 55vh !important;
        }
      }
    }

    .header-statement {
      position: absolute;
      right: 30px;
      bottom: 30px;
      border-radius: 30px;
      background: white;
      padding-right: 20px;
      padding-left: 20px;
      padding-top: 3px;
      padding-bottom: 3px;

      .statement-label {
        font-size: 0.825rem;
        padding-right: 8px;
        font-weight: bold;
        display: inline-block;
        color: #33B6B0;
      }

      .statement-content {
        letter-spacing: 0.05rem;
      }
    }
  }

  .clinic-info-header {
    margin-top: 0px;

    /* md */
    @media screen and (min-width: 992px) {
      margin-top: 30px;
    }

    .info-header-img {
      text-align: center;
    }
    .info-header-content {
      .content-title {
        color: #212121;
        font-size: 2.2rem;
        letter-spacing: 1.2px;
        font-weight: bold;

        .title-business-status {
          font-size: 0.825rem;
          font-weight: 500;
        }
      }
      .content-rating {
        display: inline-block;
        .rating {
          height: 30px !important;
          box-shadow: none;
          display: inline-block !important;
          padding: 0;
          margin-top: 5px;
          font-size: 1.5rem;
        }
      }
      
      .content-judgement {
        display: inline-block;
        height: 40px;
        vertical-align: middle;
        margin-left: 10px;
      }
    }
  }

  .clinic-main {
    // margin-top: 50px;
    /* .main-title {
      color: #424242;
      font-size: 1.5rem;
      font-weight: 550;
      letter-spacing: 1.2px;
      margin-bottom: 15px;
    } */

    .main-clinic-feature-card {
      .feature-line {
        margin-bottom: 4px;
        .highlight {
          color: #33B6B0;
          font-weight: bold;
        }
      }
    }

    .main-clinic-timetalbe-card {
      .timetable {
        width: 100%;
        border: 1px solid #E0E0E0;
        text-align: center;
        color: #333333;

        th, td {
          border: 1px solid #E0E0E0;
          padding-top: 5px;
          padding-bottom: 5px;
        }

        .timetable-tr {
          font-size: 0.825rem;

          .timetable-time-label {
            display: block;
            font-size: 0.825rem;
          }
          .timetable-time {
            display: block;
            font-size: 0.625rem;
          }
        }
      }
    }
  }

  .clinic-detail {
    .detail-gallery {
      position: relative;
      .gallery-img {
        cursor: pointer;
        width: 100% !important;
        height: 130px;

        /* md */
        @media screen and (min-width: 992px) {
          height: 30vh;
        }
      }
    }

    .detail-gallery-overlay {
      z-index: 2;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .7);

      .overlay-message {
        width: 100%;
        height: 100%;
        font-size: 0.825rem;
        color: white;
        text-align: center;
        vertical-align: middle;
        display: flex;
        flex-direction: column;
        justify-content: center;

        /* md */
        @media screen and (min-width: 992px) {
          font-size: 1.2rem;
        }

        .message-content {
          .message-action {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
  }

  .clinic-basic-info {
    .basic-info-content {
      .content-item {
        margin-bottom: 6px;
      }
    }

    .basic-info-map {
      margin-top: 20px;
      height: 300px;

      /* md */
      @media screen and (min-width: 992px) {
        height: 60vh;
      }
    }
  }

}


</style>