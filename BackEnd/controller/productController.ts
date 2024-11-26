import { Request, Response } from "express";
import productModel from "../Model/productModel";

export const createSneaker = async (req: Request, res: Response) => {
  try {
    const { productName, productPrice, productSize } = req.body;
    const sneaker = await productModel.create({
      productName,
      productPrice,
      productSize,
    });
    return res.status(201).json({
      message: "sneaker created successfully",
      status: 201,
      data: sneaker,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error creating",
      data: error,
      status: 404,
    });
  }
};

export const searchSneaker = async (req: Request, res: Response) => {
  try {
    const { productName, productPrice, productSize } = req.body;
    const sneaker = await productModel.find({
      productName,
      productPrice,
      productSize,
    });
    return res.status(201).json({
      message: "sneaker found",
      status: 201,
      data: sneaker,
    });
  } catch (error) {
    return res.status(404).json({
      message: "No sneaker found matching your criteria",
      data: error,
      status: 404,
    });
  }
};
