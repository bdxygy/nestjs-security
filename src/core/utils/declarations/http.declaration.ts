// import { Request, Response, NextFunction } from 'express';
import { FastifyRequest as Request, FastifyReply as Response } from 'fastify';

export type HttpRequest = Request;
export type HttpResponse = Response;
export type HttpNextFunction = () => void;
