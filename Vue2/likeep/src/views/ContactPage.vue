<script>
import axios from "axios";

export default {
  data() {
    return {
      error: "",
      success: "",
      name: "",
      subject: "",
      message: "",
    }
  },
  methods: {
    sendData() {
      if (this.name.length < 3)
        this.error = 'Имя не менее 3 символов'
      else if (this.subject.length < 3)
        this.error = 'Тема не менее 3 символов'
      else if (this.message.length < 3)
        this.error = 'Сообщение не менее 3 символов'
      else {
        this.error = ''

        const data = {
          'name': this.name,
          'subject': this.subject,
          'message': this.message
        }

        axios.post('http://127.0.0.1:8000/api/send_contact/', data)
            .then(res => {
              if (res.request.status === 200) {
                this.success = 'Сообщение успешно отправлено';
              } else {
                this.error = 'Возникла ошибка при отправке';
              }
            });

        this.name = ''
        this.subject = ''
        this.message = ''
      }
    }
  }
}
</script>

<template>
  <div class="form-container">
    <div class="main main-contact">
      <h2>Форма связи</h2>
      <form>
        <p v-if="error.length > 0" class="errors">{{ error }}</p>
        <p v-if="success.length > 0" class="success">{{ success }}</p>
        <label for="name">Ваше имя</label>
        <input type="text" v-model="name" maxlength="100" placeholder="Введите ваше имя" id="name">
        <label for="subject">Тема сообщения</label>
        <input type="text" v-model="subject" maxlength="200" placeholder="Введите тему сообщения" id="subject">
        <label for="message">Текст сообщения</label>
        <textarea v-model="message" placeholder="Введите ваше сообщение" id="message"/>
        <button type="button" @click="sendData()">Отправить</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
button {
  margin-top: 20px;
}

.main-contact textarea {
  margin-left: 130px;
  width: 60%;
  height: 150px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  background: #e0dede;
}

.main-contact {
  width: 700px;
  height: 670px;
  margin-top: 60px;
  margin-bottom: 60px;
}

.main-contact label {
  margin-top: 30px;
  margin-bottom: 0;
}

.main-contact div {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 0;
}
</style>