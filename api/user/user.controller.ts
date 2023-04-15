import { Request, Response } from 'express';
import { PrismaClient, TypeUser } from '@prisma/client';

const prisma = new PrismaClient();

export async function filterByAllUser(req: Request, res: Response) {
  const email = (req.query.email || '').toString();
  const type = req.query.typeUser as TypeUser;

  const page = Number(req.query.page);
  const pagination = Number(req.query.pagination || 10);

  try {
    // 1. Filtro para lista de user. "con paginacion"
    const response = await prisma.user.findMany({
      orderBy: [{ id: 'asc' }],
      skip: pagination * (page - 1),
      take: pagination,
      where: {
        email: { contains: email, mode: 'insensitive' },
        ...(type !== undefined && { type }),
        
      },
      include: { contents: true },
    });
    // 2. Filtro para lista de user. Sin paginacion, usado para mostrar total de busqueda
    const total = await prisma.user.findMany({
      orderBy: [{ id: 'asc' }],
      where: {
        email: { contains: email, mode: 'insensitive' },
        ...(type !== undefined && { type }),
      },
    });
    return res.status(200).json({
      message: { data: response, total: total.length },
    });
  } catch (err) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
}

export async function authenticateUser(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const response = await prisma.user.findMany({
      where: {
        email: { equals: (email || '').toString(), mode: 'insensitive' },
        password: { equals: (password || '').toString(), mode: 'insensitive' },
      },
    });
    return res.status(200).json({ message: response });
  } catch (err) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
}

export async function createOneUser(req: Request, res: Response) {
  const { email, type, password } = req.body;
  
  try {
    const response = await prisma.user.create({
      data: {
        email, password, type: type as TypeUser,
        updatedAt: new Date(),
      },
    });
    return res.status(200).json({ message: response });
  } catch (err) {
    console.log('err',err);
    
    return res.status(500).json({ message: err });
  }
}

export async function updateOneUser(req: Request, res: Response) {
  const { id, email, type, password } = req.body;

  try {
    const response = await prisma.user.update({
      where: { id },
      data: {
        email, password, type: type as TypeUser,
        updatedAt: new Date(),
      },
    });
    return res.status(200).json({ message: response });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

export async function deleteOneUser(req: Request, res: Response) {
  const { userId } = req.params;
  try {
    const response = await prisma.user.delete({
      where: { id: Number(userId) },
    });
    return res.status(200).json({ message: response });
  } catch (err) {
    return res.status(400).json({ message: 'Something went wrong' });
  }
}


/**
 * @openapi
 * components:
 *  schemas:
 *    ListUserResponse:
 *     type: array
 *     items:
 *        $ref: '#/components/schemas/CreateUserResponse'
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        password:
 *          type: string
 *        updatedAt:
 *          type: string
 *    AuthenticateRequest:
 *     type: object
 *     properties:
 *      email:
 *       type: string
 *      password:
 *       type: string
 *     required:
 *      - email
 *      - password
 *    CreateUserRequest:
 *     email:
 *       type: string
 *      password:
 *       type: string
 *      type:
 *       type: string
 *     required:
 *      - email
 *      - password
 *      - type
 *    DeleteOneUserInput:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          default: 0
 *      required:
 *        - id
 */