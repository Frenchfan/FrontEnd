<script>
export default {
  props: ['isAuthorised']
}
</script>

<template>
  <div class="header">
    <div class="container">
      <RouterLink to="/"><img src="/img/logo.png" width="312" height="53" alt="Logo LiKeep"/></RouterLink>
      <nav>
        <RouterLink to="/" active-class="active">Главная</RouterLink>
        <RouterLink to="/about" active-class="active">О сервисе</RouterLink>
        <RouterLink to="/contact" active-class="active">Контакт</RouterLink>

        <span v-if="isAuthorised">
          <RouterLink to="/profile" active-class="active">Личный кабинет</RouterLink>
          <RouterLink to="/links" active-class="active">Мои ссылки</RouterLink>
          <RouterLink to="/logout" active-class="active">Выйти</RouterLink>
        </span>

        <span v-else>
        <RouterLink to="/login" active-class="active">Войти</RouterLink>
        <RouterLink to="/register" active-class="active">Зарегистрироваться</RouterLink>
        </span>

      </nav>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  border-bottom: #A0B9F3 1px solid;
}

.header .container {
  width: 1000px;
  margin: 0 auto;
  padding: 10px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header .container nav a {
  color: #DDCFFF;
  font-size: 18px;
  text-decoration: none;
  transition: color 500ms ease;
  margin-left: 25px;
}

.header .container nav a:hover {
  color: #A0A2FF;
}
</style>