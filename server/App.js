import express, { json } from "express";
const app = express();
const moviApi = [
  "https://i.ytimg.com/vi/6oKFao0aISA/mqdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZRYoo32lMbzQm15od2cNXItbye1zad5xEQ&usqp=CAU",
  "https://images.ottplay.com/images/indrajith-sukumaran-246.jpg",
  "https://media.gqindia.com/wp-content/uploads/2021/06/Thondimuthalum-Driksakshiyum-Poster-1920x1080.jpeg",
  "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbNVulM_-WNpyf5c9Q6pvbS30iztJ719-zRSUKC42Llu8cnHX8WiKhMuqCooQ4_-us8KLBdw7VIEBXeSJHDSvoK0NQGWunRX4wf7.jpg?r=51b",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYpMAxQx98NVquCPMW6TX_IyIXJBn7q-F1ZZdJSmC8SZ8yOQvyIYz2d2z-Xo9HvuTJtA&usqp=CAU",
];
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.get("/featuredImage", (req, res) => {
  res.send(
    "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/thalapathy-vijay-leo-tamil-poster-out-203320658-16x9.jpg?VersionId=be5LnvEqRvSA8OfSA8xD15TN_mLDkF0p"
  );
});
app.get("/featured", (req, res) => {
  res.json(moviApi);
});
app.listen(3000, () => {
  console.log("app listening on 3000");
});
