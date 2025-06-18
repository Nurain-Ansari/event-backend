import { NextFunction, Request, Response } from 'express';

export const handleRegister = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const barcodeId = `CS-EVENT-2025-${Math.floor(10000 + Math.random() * 90000)}`;
    res.status(201).json({ barcodeId });
  } catch (error) {
    next(error); // ✅ Only forward error, don’t call next() after res
  }
};
