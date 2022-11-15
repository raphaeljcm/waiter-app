import { Request, Response } from 'express';
import { z } from 'zod';

import { Order } from '../../models/Order';

export async function cancelOrder(req: Request, res: Response) {
  try {
    const cancelOrderParams = z.object({
      orderId: z.string(),
    });
    const { orderId } = cancelOrderParams.parse(req.params);

    await Order.findByIdAndDelete(orderId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
