import { Request, Response } from 'express';
import { PrismaClient, Category } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllTopic(req: Request, res: Response) {
    const name = (req.query.name || '').toString();
    const urlImage = (req.query.urlImage  || '').toString();
    
    const page = Number(req.query.page|| 1);
    const pagination = Number(req.query.pagination || 100);

    try {
        // 1. Filtro para lista de user. "con paginacion"
        const response = await prisma.topic.findMany({
          orderBy: [{ id: 'asc' }],
          skip: pagination * (page - 1),
          take: pagination,
          where: {
            name: { contains: name, mode: 'insensitive' },
            urlImage: { contains: urlImage, mode: 'insensitive' },
          },
        });
        // 2. Filtro para lista de user. Sin paginacion, usado para mostrar total de busqueda
        const total = await prisma.topic.findMany({
          orderBy: [{ id: 'asc' }],
          where: {
            name: { contains: name, mode: 'insensitive' },
            urlImage: { contains: urlImage, mode: 'insensitive' },
          },
        });
        return res.status(200).json({
          message: { data:response, total: total.length },
        });
      } catch (err) {
        
        return res.status(400).json({ message: 'Something went wrong' });
    }
}


export async function createOneTopic(req: Request, res: Response) {
    const { name, urlImage,categories } = req.body;
    try {
      const response = await prisma.topic.create({
        data: {
            name, urlImage, categories: categories as Category,
          updatedAt: new Date(),
        },
      });
      return res.status(200).json({ message: response });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }


  export async function updateOneTopic(req: Request, res: Response) {
    const { id, name, urlImage,categories } = req.body;
    try {
      const response = await prisma.topic.update({
        where: { id },
        data: {
            name, urlImage, categories: categories as Category,
          updatedAt: new Date(),
        },
      });
      return res.status(200).json({ message: response });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

export async function deleteOneTopic(req: Request, res: Response) {
    const { topicId } = req.params;
    try {
        const response = await prisma.topic.delete({
            where: { id: Number(topicId) },
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
 *    ListTopicResponse:
 *     type: array
 *     items:
 *        $ref: '#/components/schemas/CreateTopicResponse'
 *    CreateTopicResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        name:
 *          type: string
 *        urlImage:
 *          type: string
 *        categories:
 *          type: string
 *        updatedAt:
 *          type: string 
 *    CreateTopicRequest:
 *      name:
 *       type: string
 *      urlImage:
 *       type: string
 *      categories:
 *       type: string
 *     required:
 *      - name
 *      - urlImage
 *      - categories
 *    DeleteOneTopicInput:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          default: 0
 *      required:
 *        - id
 */