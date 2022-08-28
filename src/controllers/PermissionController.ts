import { Request, Response } from "express";
import { permissionRepository } from "../repositories/permissionRepository";

export class PermissionController {
    async create(req: Request, res: Response) {
        const {
            user_id,
            permission
        } = req.body;

        try {
            const newFranchise = permissionRepository.create({
                user_id,
                permission
            });

            await permissionRepository.save(newFranchise);

            return res.status(200).json(newFranchise);
        } catch (err) {
            console.log(err);
            return res.status(500).json({error: "Internal Server Error"});
        }
    }
}