import { Request, Response } from "express";
import { franchiseRepository } from "../repositories/franchiseRepository";

export class FranchiseController {
    async create(req: Request, res: Response) {
        const {
            cnpj,
            name,
            country,
            state,
            street,
            number,
            postal_code,
            district,
            complement,
            phone,
            email,
            director,
            director_email,
            director_phone,
            avatar,
        } = req.body;

        try {
            const newFranchise = franchiseRepository.create({
                cnpj,
                name,
                country,
                state,
                street,
                number,
                postal_code,
                district,
                complement,
                phone,
                email,
                director,
                director_email,
                director_phone,
                avatar,
            });

            await franchiseRepository.save(newFranchise);

            return res.status(200).json(newFranchise);
        } catch (err) {
            console.log(err);
            return res.status(500).json({error: "Internal Server Error"});
        }
    }
}