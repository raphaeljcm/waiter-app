import { Request, Response } from 'express';
import { z } from 'zod';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const createCategoryBody = z.object({
      name: z.string(),
      icon: z.string(),
    });

    const { icon, name } = createCategoryBody.parse(req.body);

    if (!name) {
      return res.status(400).json({
        error: 'Name is required',
      });
    }

    const category = await Category.create({ icon, name });

    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
