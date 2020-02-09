<template>
<div>
<v-app @keyup.enter="login">
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-5">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title dark>登入</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>

            <v-card-text>
              <v-form class="login-form">
                <v-text-field v-model="loginForm.account" label="Account" required></v-text-field>
                <v-text-field v-model="loginForm.password" label="Password" required></v-text-field>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login">登入</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</v-app>
</div>
</template>

<script>
import {apiLogin} from '@/apis/base.js'

export default {
  components: {},
  data() {
    return {
      loginForm: {
        'account': '',
        'password': ''
      }
    }
  },
  methods: {
    login() {
      if (this.loginForm.account == '') {
        this.$store.dispatch('snackbar/openSnackbar', {
          "msg": "請輸入帳號"
        });
        return
      } else if (this.loginForm.password == '') {
        this.$store.dispatch('snackbar/openSnackbar', {
          "msg": "請輸入密碼"
        });
        return
      }

      apiLogin({
        account: this.loginForm.account,
        password: this.loginForm.password
      }).then((response) => {
        let res = response.data;
        let token = res.result.token;

        localStorage.setItem('token', token);
        this.$store.dispatch('auth/setAuth', {
          "token": token,
          "isLogin": true
        });

        this.$store.dispatch('snackbar/openSnackbar', {
          "msg": "登入成功！"
        });

        this.loginForm =  {
          'account': '',
          'password': ''
        }
      });
    }
  }
}
</script>

<style lang="scss">
  
</style>