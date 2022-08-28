import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne
  } from 'typeorm';

  import { Course } from './Course';

@Entity('subjects')
export class Subject {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    course_id: string;

    @ManyToOne(() => Course)
    @JoinColumn({ name: 'course_id' })
    course: Course;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}