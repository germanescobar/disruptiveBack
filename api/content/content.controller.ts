import { Request, Response } from 'express';
import { PrismaClient, Category } from '@prisma/client';

const prisma = new PrismaClient();

export async function filterByAllContent(req: Request, res: Response) {
    const name = (req.query.search || '').toString();
    const topicId = Number(req.query.topicId || 0);

    const page = Number(req.query.page);
    const pagination = Number(req.query.pagination || 100);

    try {
        // 1. Filtro para lista de user. "con paginacion"
        const response = await prisma.content.findMany({
            orderBy: [{ id: 'asc' }],
            skip: pagination * (page - 1),
            take: pagination,
            where: {
                name: { contains: name, mode: 'insensitive' },
                ...(topicId !== 0 && { topicId }),
            },
        });
        // 2. Filtro para lista de user. Sin paginacion, usado para mostrar total de busqueda
        const total = await prisma.content.findMany({
            orderBy: [{ id: 'asc' }],
            where: {
                name: { contains: name, mode: 'insensitive' },
                ...(topicId !== 0 && { topicId }),
            },
        });
        return res.status(200).json({
            message: { data: response, total: total.length },
        });
    } catch (err) {
        console.log("err", err);

        return res.status(400).json({ message: 'Something went wrong' });
    }
}


export async function createOneContent(req: Request, res: Response) {
    const { userId, name, description, urlImage, url } = req.body;
    const category = (req.query.category || '') as Category;

    try {
        const response = await prisma.user.update({
            where: { id: userId },
            data: {
                contents: {
                    create:
                    {
                        name, description, urlImage,
                        url, updatedAt: new Date(), category
                    },
                },
            },
        });
        return res.status(200).json({ message: response });
    } catch (err) {
        return res.status(400).json({ message: 'Something went wrong' });
    }
}


export async function updateOneContent(req: Request, res: Response) {
    const { contentId, name, description, urlImage, url } = req.body;
    const category = (req.query.category || '') as Category;

    try {
        const response = await prisma.content.update({
            where: { id: Number(contentId) },
            data: {
                name, description, urlImage,
                url, updatedAt: new Date(), category
            },
        });
        return res.status(200).json({ message: response });
    } catch (err) {
        return res.status(400).json({ message: 'Something went wrong' });
    }
}

export async function deleteOneContent(req: Request, res: Response) {
    const { contentId } = req.params;
    try {
        const response = await prisma.content.delete({
            where: { id: Number(contentId) },
        });
        return res.status(200).json({ message: response });
    } catch (err) {
        return res.status(400).json({ message: 'Something went wrong' });
    }
}
