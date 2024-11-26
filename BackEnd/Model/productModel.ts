import { model, Schema } from "mongoose";

interface iSneaker {
  productName: string;
  productPrice: string;
  productSize: string;
  productDetail: string;
  category: string;
}

interface iSneakerData extends iSneaker, Document {}

const productModel = new Schema<iSneakerData>(
  {
    productName: {
      type: String,
    },
    productPrice: {
      type: String,
    },
    productSize: {
      type: String,
    },
    productDetail: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iSneakerData>("sneaker", productModel);
