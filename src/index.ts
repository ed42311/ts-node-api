import express from "express";
import helmet from "helmet";
import cors, { CorsOptions } from "cors";
import { config } from "dotenv";

config();

// Utils
import { basicLogger } from "./utils";

// Routers
import { base, products } from "./routes";

// Set the operating variables
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === "production";
// const corsOptions: CorsOptions = {
//   methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
// };

// Instantiating the app
const app = express();

// Top Level Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Our Custom logging middleware
app.use(basicLogger);

// Attach Routers
app.use("/health", base);
app.use("/products", products);

app.listen(port, () => {
  console.log("Server runnings on port: " + port);
});
