import { Application, Request, Response } from "express";

export const mainApp = async (app: Application) => {
  try {
    app.use("/", (req: Request, res: Response) => {
      try {
        res.json({
          message: "welcome to my API",
        });
      } catch (error) {
        res.status(404).json({
          message: "error",
        });
      }
    });
  } catch (error) {
    return error;
  }
};
