import { AppDataSource } from "../data-source";
import { Franchise } from "../entities/Franchise";

export const franchiseRepository = AppDataSource.getRepository(Franchise);