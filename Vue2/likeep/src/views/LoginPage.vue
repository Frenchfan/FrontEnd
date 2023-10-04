<script>
import axios from "axios";

export default {
  data() {
    return {
      error: '',
      username: '',
      password: '',
      access: '',
      refresh: ''
    }
  },
  methods: {
    sendData() {
      if (this.username === '')
        this.error = 'Не введено имя пользователя'
      else if (this.password === '')
        this.error = 'Не введён пароль'
      else {
        this.error = ""

        const data = {
          'username': this.username,
          'password': this.password
        }

        axios.post('http://127.0.0.1:8000/api/token/', data)
            .then(res => {
              if (res.data && res.data.access && res.data.refresh) {
                localStorage.setItem('access', res.data.access)
                localStorage.setItem('refresh', res.data.refresh)
                location.reload();
                location.href = '/';
              }
            })
            .catch(error => {
              if (error.response) {
                this.error = error.response.data.detail;
              }
            })
      }
    }
  }
}
</script>

<template>
  <div class="form-container">
    <div class="main main-login">
      <h2>Авторизация на сайте</h2>
      <form>
        <p v-if="error.length > 0" class="errors">{{ error }}</p>
        <label for="username">Имя пользователя</label>
        <input type="text" v-model="username" placeholder="Введите имя пользователя" id="username">
        <label for="password">Пароль</label>
        <input type="password" v-model="password" placeholder="Введите пароль" id="password">
        <button type="button" @click="sendData()">Войти</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
button {
  margin-top: 40px;
}

.main-login {
  width: 700px;
  min-height: 300px;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>