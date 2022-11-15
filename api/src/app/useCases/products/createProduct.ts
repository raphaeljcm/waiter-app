import { Request, Response } from 'express';
import { z } from 'zod';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const createProductFile = z.object({
      filename: z.string(),
    });

    const createProductBody = z.object({
      name: z.string(),
      description: z.string(),
      price: z.string(),
      category: z.string(),
      ingredients: z.string(),
    });

    const imagePath = createProductFile.parse(req.file?.filename);
    const { name, description, price, category, ingredients } =
      createProductBody.parse(req.body);

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: JSON.parse(ingredients),
      imagePath,
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
