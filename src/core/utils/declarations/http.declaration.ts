import { Request, Response, NextFunction } from 'express';

export interface HttpRequest extends Request {}
export interface HttpResponse extends Response {}
export interface HttpNextFunction extends NextFunction {}
