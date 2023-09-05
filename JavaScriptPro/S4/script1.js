const myPromise = new Promise((resolve, reject) => {
  //asyn code
});

console.log(myPromise);

myPromise
  .then((value) => {
    //действия в случае выполнения промиса
  })
  .catch((error) => {
    //действия в случае отклонения промиса
  });
//https://jsonplaceholder.typicode.com/

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then((response) => response.json())
    .then((data) =>console.log(data))
    .catch((error) => console.log(error));

const getData = (url) => 
    new Promise((resolve, reject) => {
        fetch (url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject())
    })

getData('https://jsonplaceholder.typicode.com/posts')
    .then((data) => console.log(data))
    .catch((error) => console.log('Something is wrong'));


    //более простой подход - это современный подход

    const getData2 = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    };
    
    try {
        const data = await getData2(url);
        console.log(data);
    } catch (error) {
        console.log('Something is wrong')
    }
    //https://axios-http.com/ru/docs/intro



