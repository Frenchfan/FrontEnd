<script>
export default {
  name: "TaskDescription",
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    setVisible() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<template>
  <div class="task">
    <button class="task__btn"
            @click="setVisible">{{ isVisible ? "Hide Task" : "Show Task" }}
    </button>
    <div class="task__box"
         v-if="isVisible">
      <p class="task__text"
      >Вы разрабатываете приложение для интернет-магазина и у вас есть
        компонент Vue под названием "ProductDetails".
        Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.</p>
      <p class="task__text">Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим
        информацию о продукте.
        Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг,
        указывающий на доступность продукта).</p>
      <p class="task__text">Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать
        форматированную цену
        продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку
        "$99.99".</p>
      <p class="task__text">В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и
        статус
        доступности.</p>
      <p class="task__text">Если продукт доступен, отобразите текст "Available", в противном случае - "Out of
        stock".</p></div>
  </div>
</template>


<style scoped
       lang="scss">
.task {
  padding: 2rem;
  border: 2px solid teal;
  border-radius: 2rem;

  &__text {
    text-align: justify;
    margin-bottom: 0.5rem;
  }
}
</style>
