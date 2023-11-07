console.log(navigator.userAgent);
console.log(navigator.cookieEnabled);
console.log(navigator.doNotTrack);
console.log(navigator.geolocation);
// ○ userAgent — информация о браузере;
// ○ cookieEnabled — включены ли coockie;
// ○ doNotTrack — включена ли опция запрета на отслеживание;
// ○ platform — текущая ОС пользователя;
// ○ geolocation — геолокация, в данном случае не активированная.
// console.log(location);
// location.href = "./index.html";
//Напишите функцию findClosestCity(userLocation, cities), которая принимает текущее местоположение пользователя в формате {latitude, longitude} и массив городов с их координатами в формате {name: 'City', location: [latitude, longitude]}. Функция должна возвращать город, ближайший к местоположению пользователя.
function calculateDistance(location1, location2) {
  const [lat1, lon1] = location1; //разбивает координаты первого местоположения на широту и долготу
  const [lat2, lon2] = location2; //разбивает координаты второго местоположения на широту и долготу

  const toRad = (value) => (value * Math.PI) / 180; //преобразует градусы в радианы
  const R = 6371; //радиус Земли в километрах
  const dLat = toRad(lat2 - lat1); //разница между широтами в радианах
  const dLon = toRad(lon2 - lon1); //разница между долготами в радианах

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) + //вычисляет квадрат синуса половины разницы широты
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2); //вычисляет квадрат синуса половины разницы долготы и учитывает косинусы широт
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); //вычисляет центральный угол между двумя местоположениями
  const distance = R * c; //расстояние между двумя местоположениями на сфере Земли в километрах
  return distance;
}

function findFastestCity(cities) {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      //Проверяет подерживается ли геолокация
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          let closestCity = null; //Переменная для хранения ближайшего города
          let shortestDistance = Infinity; //Переменная для хранения расстояния до ближайшего города

          cities.forEach(city => {
            //Проходит по каждому городу
            const distance = calculateDistance(userLocation, city.location);
            if (distance < shortestDistance) {
              closestCity = city.name; //записывает ближайший город
              shortestDistance = distance; //записывает расстояние
            }
          });

          resolve(closestCity); //возвращает ближайший город
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            //если геолокация отключена
            reject(new Error("Геолокация отключена"));
          } else {
            reject(new Error("Ошибка получения геолокации"));
          }
        }
      );
    } else {
      reject(new Error("Геолокация не поддерживается браузером"));
    }
  });
}

//Пример использования
const cities = [
  { name: "Москва", location: [55.7522, 37.6156] },
  { name: "Лондон", location: [51.5085, -0.1257] },
  { name: "Токио", location: [35.6895, 139.6917] },
  { name: "Нью-Йорк", location: [40.7143, -74.006] },
];

findFastestCity(cities)
  .then((closestCity) => {
    console.log(closestCity);
  })
  .catch((error) => {
    console.log(error);
  });
