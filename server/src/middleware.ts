import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    const statusCode = req.statusCode ?? 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '' : err.stack
    });
};

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    const error = new Error('404 - Not Found');
    next(error);
};
