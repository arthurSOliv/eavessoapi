import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
  } from 'typeorm';

  import { Franchise } from './Franchise';
  import { Company } from './Company';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    name: string;

    @Column()
    birthdate: string;

    @Column()
    password: string;

    @Column({nullable: true})
    gender: string;

    @Column({nullable: true})
    cpf: string;

    @Column({nullable: true})
    rg: string;

    @Column({nullable: true})
    rg_expire: string;

    @Column({nullable: true})
    birth_city: string;

    @Column({nullable: true})
    postal_code: string;

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
    district: string;

    @Column({nullable: true})
    complement: string;

    @Column({nullable: true})
    phone: string;

    @Column({nullable: true})
    cellphone: string;

    @Column({nullable: true})
    avatar: string;

    @Column()
    franchise_id: string;

    @ManyToOne(() => Franchise)
    @JoinColumn({ name: 'franchise_id' })
    franchise: Franchise;

    @Column({nullable: true})
    ethnicity: string;

    @Column({nullable: true})
    instituition: string;

    @Column({nullable: true})
    level: string;

    @Column({nullable: true})
    course: string;

    @Column({nullable: true})
    class: string;

    @Column({nullable: true})
    area: string;

    @Column({nullable: true})
    shift: string;

    @Column({nullable: true})
    schedule: string;

    @Column({nullable: true})
    habilities: string;

    @Column({nullable: true})
    speechs: string;

    @Column({nullable: true})
    project: string;

    @Column({nullable: true})
    project_shift: string;

    @Column({nullable: true})
    category: string;

    @Column({nullable: true})
    group: string;

    @Column({nullable: true})
    company_id: string;

    @ManyToOne(() => Company)
    @JoinColumn({ name: 'company_id' })
    company: Company;

    @Column({nullable: true})
    employer: string;

    @Column({nullable: true})
    practice: string;

    @Column({nullable: true})
    mother: string;

    @Column({nullable: true})
    father: string;

    @Column({nullable: true})
    ctps: string;

    @Column({nullable: true})
    ctps_serie: string;

    @Column({nullable: true})
    active: boolean;

    @Column({nullable: true})
    approved: boolean;

    @Column({nullable: true})
    discount: boolean;

    @Column({nullable: true})
    deadline: string;

    @Column({nullable: true})
    vale_bus: string;

    @Column({nullable: true})
    company_shift: string;

    @Column({nullable: true})
    sponsor: string;

    @Column({nullable: true})
    account: string;

    @Column({nullable: true})
    agency: string;

    @Column({nullable: true})
    bank: string;

    @Column({nullable: true})
    role: string;

    @Column({nullable: true})
    start_date: string;

    @Column({nullable: true})
    end_date: string;

    @Column({nullable: true})
    company_schedule: string;

    @Column({nullable: true})
    teorica: string;

    @Column({nullable: true})
    workload: string;

    @Column({nullable: true})
    salary: string;

    @Column({nullable: true})
    teorical_class: string;

    @Column({nullable: true})
    witness1: string;

    @Column({nullable: true})
    witness2: string;

    @Column({nullable: true})
    witness1_rg: string;

    @Column({nullable: true})
    witness2_rg: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}