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

@Entity('tutorials')
export class Tutorial {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    franchise_id: string;

    @ManyToOne(() => Franchise)
    @JoinColumn({ name: 'franchise_id' })
    franchise: Franchise;

    @Column()
    question: string;

    @Column()
    answer: string;

    @Column()
    category: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}