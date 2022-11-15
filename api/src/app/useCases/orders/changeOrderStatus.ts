import { Request, Response } from 'express';
import { z } from 'zod';

import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const changeOrderStatusParams = z.object({
      orderId: z.string(),
    });
    const changeOrderStatusBody = z.object({
      status: z.enum(['WAITING', 'IN_PRODUCTION', 'DONE']),
    });

    const { orderId } = changeOrderStatusParams.parse(req.params);
    const { status } = changeOrderStatusBody.parse(req.body);

    await Order.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);
  } catch (error: any) {
    console.log(error);

    if (error.issues) {
      const code = error.issues[0].code;

      if (code === 'invalid_enum_value') {
        res.status(400).json({
          error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE',
        });
      }
    }

    res.sendStatus(500);
  }
}
