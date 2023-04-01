const { Axios, default: axios } = require("axios");

async function getData(number) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${number}`
  );
  const { data: post } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${number}`
  );
  console.log("User Data", { user, post });
}

getData(1);
