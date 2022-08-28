import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';

@Entity('franchises')
export class Franchise {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    cnpj: string;

    @Column()
    name: string;

    @Column({nullable: true})
    country: string;

    @Column({nullable: true})
    state: string;

    @Column({nullable: true})
    city: string;

    @Column({nullable: true})
    street: string;

    @Column({nullable: true})
    number: string;

    @Column({nullable: true})
    postal_code: string;

    @Column({nullable: true})
    district: string;

    @Column({nullable: true})
    complement: string;

    @Column({nullable: true})
    phone: string;

    @Column({nullable: true})
    email: string;

    @Column({nullable: true})
    director: string;

    @Column({nullable: true})
    director_email: string;

    @Column({nullable: true})
    director_phone: string;

    @Column({nullable: true})
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}