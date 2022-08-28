import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne
  } from 'typeorm';

  import { Franchise } from './Franchise';

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    franchise_id: string;

    @ManyToOne(() => Franchise)
    @JoinColumn({ name: 'franchise_id' })
    franchise: Franchise;

    @Column()
    name: string;

    @Column()
    contents: string;

    @Column()
    workload: string;

    @Column()
    category: string;

    @Column()
    type: string;

    @Column()
    area: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}