import { Request, Response } from "express";
import { companyRepository } from "../repositories/companyRepository";

export class CompanyController {
    async create(req: Request, res: Response) {
        const {
            franchise_id,
            cnpj,
            name,
            email,
            phone,
            contact,
            role,
        } = req.body;

        try {
            const newCompany = companyRepository.create({
                franchise_id,
                cnpj,
                name,
                email,
                phone,
                contact,
                role,
            });

            await companyRepository.save(newCompany);

            return res.status(200).json(newCompany);
        } catch (err) {
            console.log(err);
            return res.status(500).json({error: "Internal Server Error"});
        }
    }
}