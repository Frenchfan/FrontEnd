/*
Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
*/
const apiUrl = 'https://dog.ceo/api/breeds/image/random';
const dogImagesElement = document.getElementById('dogImages');

async function fetchDogImage() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error(error);
  }
}

function renderDogImages(images) {
  dogImagesElement.innerHTML = '';
  images.forEach((imageUrl, index) => {
    setTimeout(() => {
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;

      dogImagesElement.appendChild(imageElement);
    }, index * 3000);
  });
}

(async () => {
  const dogImages = [];
  for (let i = 0; i < 10; i++) {
    const imageUrl = await fetchDogImage();
    dogImages.push(imageUrl);
  }
  renderDogImages(dogImages);
})();
