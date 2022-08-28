import { Request, Response } from "express";
import { hash, compare } from 'bcryptjs';

import { userRepository } from "../repositories/userRepository";
import { permissionRepository } from "../repositories/permissionRepository";

export class UserController {
    async create(req: Request, res: Response) {
        const {
            email,
            username,
            name,
            birthdate,
            password,
            gender,
            cpf,
            rg,
            rg_expire,
            birth_city,
            postal_code,
            country,
            state,
            street,
            number,
            district,
            complement,
            phone,
            cellphone,
            avatar,
            franchise_id,
            franchise,
            ethnicity,
            instituition,
            level,
            course,
            className,
            area,
            shift,
            schedule,
            habilities,
            speechs,
            project,
            project_shift,
            category,
            group,
            company_id,
            employer,
            practice,
            mother,
            father,
            ctps,
            ctps_serie,
            active,
            approved,
            discount,
            deadline,
            vale_bus,
            company_shift,
            sponsor,
            account,
            agency,
            bank,
            role,
            start_date,
            end_date,
            company_schedule,
            teorica,
            workload,
            salary,
            teorical_class,
            witness1,
            witness2,
            witness1_rg,
            witness2_rg,
            permission
        } = req.body;

        try {
            const hashedPassword = await hash(password, 8);

            const findUserByEmail = await userRepository.findOneBy({
                email
            });

            if (findUserByEmail) {
                return res.status(300).json({error: "Email ou senha incorretos!"});
            }

            const newUser = userRepository.create({
                email,
                username,
                name,
                birthdate,
                password: hashedPassword,
                gender,
                cpf,
                rg,
                rg_expire,
                birth_city,
                postal_code,
                country,
                state,
                street,
                number,
                district,
                complement,
                phone,
                cellphone,
                avatar,
                franchise_id,
                franchise,
                ethnicity,
                instituition,
                level,
                course,
                class: className,
                area,
                shift,
                schedule,
                habilities,
                speechs,
                project,
                project_shift,
                category,
                group,
                company_id,
                employer,
                practice,
                mother,
                father,
                ctps,
                ctps_serie,
                active,
                approved,
                discount,
                deadline,
                vale_bus,
                company_shift,
                sponsor,
                account,
                agency,
                bank,
                role,
                start_date,
                end_date,
                company_schedule,
                teorica,
                workload,
                salary,
                teorical_class,
                witness1,
                witness2,
                witness1_rg,
                witness2_rg
            });

            const newPermission = permissionRepository.create({user_id: newUser.id, permission});

            await userRepository.save(newUser);
            await permissionRepository.save(newPermission);

            return res.status(200).json(newUser);
        } catch (err) {
            console.log(err);
            return res.status(500).json({error: "Internal Server Error"});
        }
    }

    async find(req: Request, res: Response) {
        const {
            email,
            password
        } = req.body;

        try {
            const user = await userRepository.findOneBy({
                email
            });

            if(!user) {
                return res.status(401).json({error: "Email ou senha incorretos!"});
            }

            const passwordMatched = await compare(password, user.password);

            if(!passwordMatched) {
                return res.status(401).json({error: "Email ou senha incorretos!"});
            }

            return res.status(200).json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json({error: "Internal Server Error"});
        }
    }
}