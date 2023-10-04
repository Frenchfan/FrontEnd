<script>
import axios from "axios";

export default {
  props: ['isAuthorised'],
  data() {
    return {
      data: [],
      site: 'http://lkeep.ru/l/'
    }
  },
  mounted() {
    this.get_data()
  },
  methods: {
    get_data() {
      axios.get('http://127.0.0.1:8000/api/user_links/', {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')}
      }).then(res => {
        this.data = res.data
      })
    },
    delete_link(id) {
      axios.delete('http://127.0.0.1:8000/api/user_links/' + id, {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')}
      })
      location.reload()
    },
    copy_link(short_link) {
      console.log(this.site + short_link)
    }
  }
}
</script>

<template>
  <div class="text-container">
    <h2>Доступные ссылки</h2>
    <p></p>

    <ol v-if="data">
      <li v-for="link in data" :key="link.id"><a href="{{ link.full_link }}">{{ site }}{{ link.short_link }}</a>
        <span class="copy" @click="copy_link(link.short_link)">Копировать</span>
        <span class="delete" @click="delete_link(link.id)">Удалить</span>
      </li>
    </ol>

    <p v-else>Сокращённых ссылок не найдено</p>

  </div>
</template>

<style scoped>
.delete {
  color: pink;
  cursor: pointer;
  margin-left: 10px;
}

.delete:hover {
  text-decoration: underline;
}

.copy {
  cursor: pointer;
  margin-left: 10px;
}

.copy:hover {
  text-decoration: underline;
}
</style>