import { Router, Request, Response } from "express";
const router = Router();

const healthChecker = (req: Request, res: Response) => {
  res.json({
    api: "is green",
  });
};

const get404 = (req: Request, res: Response) => {
  res.status(404).send("No know route");
};

router.get("/", healthChecker);

export { router as base, get404 };
