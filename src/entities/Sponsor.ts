import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
  } from 'typeorm';

  import { User } from './User';

@Entity('sponsors')
export class Sponsor {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    name: string;

    @Column()
    relation: string;

    @Column()
    profession: string;

    @Column()
    workplace: string;

    @Column()
    phone: string;

    @Column()
    rg: string;

    @Column()
    cpf: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}