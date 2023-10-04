<script>
import axios from "axios";

export default {
  props: ['isAuthorised'],
  data() {
    return {
      username: '',
      email: '',
      error: '',
      changeProfile: false,
      changePassword: false,
      password1: '',
      password2: ''
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/user_profile/', {
      headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')}
    }).then(res => {
      this.username = res.data.username
      this.email = res.data.email
    })
  },
  methods: {
    changeData() {
      if (this.username.length < 3)
        this.error = 'Имя не менее 3 символов'
      else if (!this.email.includes('@') || !this.email.includes('.'))
        this.error = 'Email неверного типа'
      else {
        this.error = ""

        const data = {
          'username': this.username,
          'email': this.email,
        }

        axios.post('http://127.0.0.1:8000/api/user_profile/', data, {
          headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')},
        }).then(res => {
          location.reload()
        })
      }
    },
    changePass() {
      if (this.password1 < 3 || this.password2 < 3)
        this.error = 'Пароль не менее 3 символов'
      else if (this.password1 !== this.password2)
        this.error = 'Пароль и подтверждение пароля не совпадают'
      else {
        this.error = ""

        const data = {
          'password1': this.password1,
          'password2': this.password2,
        }

        axios.put('http://127.0.0.1:8000/api/user_profile/', data, {
          headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')},
        }).then(res => {
          location.reload()
        })
      }
    },
    openDataForm() {
      this.changeProfile = true;
      this.changePassword = false
    },
    openPassForm() {
      this.changeProfile = false;
      this.changePassword = true
    }
  }
}
</script>

<template>
  <div class="form-container">
    <div class="main main-profile">
      <h2>Кабинет пользователя {{ this.username }}</h2>
      <p>{{ this.username }}<br>{{ this.email }}<br>
        <button class="edit_buttons" @click="openDataForm()">Изменить профиль</button>
        <button class="edit_buttons" @click="openPassForm()">Изменить пароль</button>
      </p>

      <form v-if="changeProfile">
        <label for="username">Имя пользователя</label>
        <input type="text" v-model="this.username" placeholder="Введите имя пользователя" id="username">
        <label for="email">Email</label>
        <input type="email" v-model="this.email" placeholder="Введите email" id="email">
        <button type="button" @click="changeData()">Сохранить изменения</button>
      </form>

      <form v-if="changePassword">
        <label for="password1">Новый пароль</label>
        <input type="password" v-model="password1" placeholder="Введите новый пароль" id="password1">
        <label for="password2">Повторите новый пароль</label>
        <input type="password" v-model="password2" placeholder="Повторите новый пароль" id="password2">
        <button type="button" @click="changePass()">Изменить пароль</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
button {
  margin-top: 20px;
}

.edit_buttons {
  margin-left: 10px;
  width: 200px;
  display: inline-block;
}

p {
  text-align: center;
  color: #fff;
  border: #8887FF 1px solid;
  width: 500px;
  margin: 0 auto;
}

.main-profile {
  width: 700px;
  height: 500px;
  margin-top: 60px;
  margin-bottom: 60px;
}

.main-profile label {
  margin-top: 20px;
  margin-bottom: 0;
}

</style>