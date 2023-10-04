<script>
import axios from "axios";
import router from "@/router";

export default {
  data() {
    return {
      error: '',
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    sendData() {
      if (this.username === '')
        this.error = 'Не введено имя пользователя'
      else if (this.password === '')
        this.error = 'Не введён пароль'
      else if (!this.email.includes('@') || !this.email.includes('.'))
        this.error = 'Email неверного типа'
      else {
        this.error = ""

        const data = {
          'username': this.username,
          'email': this.email,
          'password': this.password,
        }

        axios.post('http://127.0.0.1:8000/api/register/', data)
            .then(res => {
              router.push('/login')
            })
            .catch(error => {
              if (error.response.data.username)
                this.error = error.response.data.username.toString();
              else if (error.response.data.email)
                this.error = error.response.data.email.toString();
              else if (error.response.data.password)
                this.error = error.response.data.password.toString();
            })
      }
    }
  }
}
</script>

<template>
  <div class="form-container">
    <div class="main main-register">
      <h2>Регистрация на сайте</h2>
      <form>
        <!--        <p class="errors">{{ error }}</p>-->
        <p v-if="error.length > 0" class="errors">{{ error }}</p>
        <label for="username">Имя пользователя</label>
        <input type="text" v-model="username" placeholder="Введите имя пользователя" id="username">
        <label for="email">Email</label>
        <input type="email" v-model="email" placeholder="Введите email" id="email">
        <label for="password">Пароль</label>
        <input type="password" v-model="password" placeholder="Введите пароль" id="password">
        <button type="button" @click="sendData()">Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
button {
  margin-top: 40px;
}

.main-register {
  width: 700px;
  height: 640px;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>