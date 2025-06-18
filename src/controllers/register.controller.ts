import { Request, Response } from 'express';
import Register, { RegisterType } from '../models/Register.model';

export const handleRegister = async (req: Request, res: Response) => {
  try {
    const formData: RegisterType = req.body;

    const barcodeId = `CS-EVENT-2025-${Math.floor(10000 + Math.random() * 90000)}`;

    const saved = await Register.create({ ...formData, barcodeId });

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: saved,
    });
  } catch {
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
};

export const handleUpdateRegister = async (req: Request, res: Response) => {
  try {
    const formData = req.body;

    if (!formData._id) {
      return res.status(400).json({
        success: false,
        message: 'Registration ID does not exist',
      });
    }

    const registration = await Register.findById(formData._id);

    if (!registration) {
      return res.status(404).json({
        success: false,
        message: 'No registration found with provided ID',
      });
    }

    Object.assign(registration, formData);
    await registration.save();

    return res.status(200).json({
      success: true,
      message: 'Registration updated successfully',
      data: registration,
    });
  } catch (error) {
    console.error('Update error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong while updating registration',
    });
  }
};
