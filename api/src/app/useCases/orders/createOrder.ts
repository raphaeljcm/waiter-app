import { Request, Response } from 'express';
import { z } from 'zod';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    const createOrderBody = z.object({
      table: z.string(),
      products: z.array(
        z.object({
          product: z.string(),
          quantity: z.number(),
        }),
      ),
    });

    const { table, products } = createOrderBody.parse(req.body);
    const order = await Order.create({ table, products });

    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
