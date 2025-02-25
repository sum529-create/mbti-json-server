// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// CORS 설정 추가
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Vercel 앱 도메인으로 제한하는 것이 좋음
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
