import { Request, Response } from 'express';
import { PrismaClient, Category } from '@prisma/client';

const prisma = new PrismaClient();

export async function filterByAllLibrary(req: Request, res: Response) {
    const topic = (req.query.search || '').toString();
    const status = (req.query.category  || '') as Category;
    
    const page = Number(req.query.page);
    const pagination = Number(req.query.pagination || 100);

    try {
        // 1. Filtro para lista de aplicaciones. Usado en vista adminDetails "con paginacion"
        const response = await prisma.user.findMany({
            where: { id },
            select: {
                email: true,
                name: true,
                id: true,
                applications: {
                    skip: pagination * (page - 1),
                    take: pagination,
                    orderBy: [{ updatedAt: 'desc' }],
                    include: { applicationLogs: { orderBy: [{ createdAt: 'desc' }] } },
                    where: {
                        OR: [
                            { company: { contains: search, mode: 'insensitive' } },
                            { role: { contains: search, mode: 'insensitive' } },
                        ],
                        ...(status !== undefined && { status }),
                    },
                },
            },

        });
        // 2. Filtro para lista de Aplicacion. "Sin paginacion", usado para mostrar total de busqueda
        const total = await prisma.user.findMany({
            where: { id },
            select: {
                email: true,
                applications: {
                    where: {
                        OR: [
                            { company: { contains: search, mode: 'insensitive' } },
                            { role: { contains: search, mode: 'insensitive' } },
                        ],
                        ...(status !== undefined && { status }),
                    },
                },
            },

        });
        return res.status(200).json({
            message: { ...response[0], total: total[0].applications.length },
        });
    } catch (err) {
        return res.status(400).json({ message: 'Something went wrong' });
    }
}


export async function createOneApplication(req: Request, res: Response) {
    const { makerId, company, role, description, url,} = req.body;

    try {
        const response = await prisma.user.update({
            where: { id: makerId },
            data: {
                applications: {
                    create:
                    // Creacion de primer log, al crear aplicacion
                    {
                        company,
                        role,
                        description,
                        url,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        applicationLogs: {
                            create: {
                                type: ApplicationLogType.NOTE,
                                fromStatus: ApplicationStatus.APPLIED,
                                toStatus: ApplicationStatus.APPLIED,
                                message: 'Create application',
                            },
                        },
                    },
                },
            },
        });
        return res.status(200).json({ message: response });
    } catch (err) {
        return res.status(400).json({ message: 'Something went wrong' });
    }
}


export async function deleteOneApplication(req: Request, res: Response) {
    const { makerId } = req.params;
    try {
        const response = await prisma.application.delete({
            where: { id: Number(makerId) },
        });
        return res.status(200).json({ message: response });
    } catch (err) {
        return res.status(400).json({ message: 'Something went wrong' });
    }
}