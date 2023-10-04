<script>
export default {
  mounted() {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    location.reload()
  }
}
</script>

<template>
  <div class="form-container">
    <div class="main main-logout">
      <h2>Вы успешно вышли из аккаунта</h2>
      <RouterLink to="/login" active-class="active" class="button">Войти снова</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.main-logout {
  width: 700px;
  height: 300px;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>