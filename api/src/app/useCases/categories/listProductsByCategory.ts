import { Request, Response } from 'express';
import { z } from 'zod';

import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const listProductsByCategoryParams = z.object({
      categoryId: z.string(),
    });
    const { categoryId } = listProductsByCategoryParams.parse(req.params);

    const products = await Product.find().where('category').equals(categoryId);

    res.json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
