import axios from "axios";

const historyApi = axios.create({
  baseURL: "https://data.mongodb-api.com/app/data-myhok/endpoint/data/beta/action",
});

export const getHistoryByRoom = (roomname) => {
  return historyApi.post(
    `/find`,
    {
      collection: "chatHistory",
      database: "My_test_project",
      dataSource: "Cluster0",
      filter: { roomname: `${roomname}` },
      projection: { _id: 0, username: 1, text: 1 },
      sort: { timestamp: 1 },
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "api-key": "61ad0774c8ddac9f9582aea9",
      },
    }
  );
};

// const data = JSON.stringify({
//   collection: "chatHistory",
//   database: "My_test_project",
//   dataSource: "Cluster_0",
//   filter: { roomname: `${roomname}` },
//   projection: { _id: 0, username: 1, text: 1 },
//   sort: { timestamp: 1 },
// });

// const config = {
//   method: "post",
//   url: "https://data.mongodb-api.com/app/data-myhok/endpoint/data/beta/action/find",
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Request-Headers": "*",
//     "api-key": "61ad0774c8ddac9f9582aea9",
//   },
//   data: data,
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
