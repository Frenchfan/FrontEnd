<script>
export default {
  props: ['isAuthorised'],
}
</script>

<template>
  <div class="text-container mt">
    <h1>Links Keeper</h1>
    <h2>Быстро
      сократим любую длинную ссылку для вашего проекта</h2>
    <a href="#" class="button" v-if="isAuthorised">Кабинет пользователя</a>

    <div v-if="isAuthorised">
      <div class="form-container">
        <div class="main main-addlink">
          <h2>Укоротитель ссылок</h2>
          <form>
            <label for="full_link">Длинная ссылка</label>
            <input type="text" placeholder="Введите длинную ссылку" id="full_link">

            <label for="short_link">Короткая ссылка</label>
            <input type="text" placeholder="Введите короткую ссылку" id="short_link">
            <button type="submit">Генерировать</button>

            <label for="check">UTF-метка</label>
            <input type="checkbox" placeholder="Введите короткую ссылку" id="check">
            <span>
              <label for="utm_source">UTM Source</label>
              <input type="text" id="utm_source">
              <label for="utm_medium">UTM Medium</label>
              <input type="text" id="utm_medium">
              <label for="utm_campaign">UTM Campaign</label>
              <input type="text" id="utm_campaign">
            </span>

            <button type="submit">Укоротить и сохранить</button>
          </form>
        </div>
      </div>
    </div>

    <span v-else>
    <RouterLink to="/login" class="button">Войти</RouterLink>
    <RouterLink to="/register" class="button">Зарегистрироваться</RouterLink>
    </span>

  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 30px;
  font-size: 72px;
  text-align: center;
  line-height: 48px;
}

h2 {
  margin-bottom: 30px;
  font-size: 36px;
  text-align: center;
  line-height: 42px;
  color: #A0B9F3;
}

.mt {
  min-height: 500px;
  margin-top: 50px;
}

.main-addlink {
  width: 700px;
  height: 300px;
  margin-top: 60px;
}
</style>