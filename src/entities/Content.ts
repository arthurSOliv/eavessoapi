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
  import { Subject } from './Subject';

@Entity('subjects')
export class Content {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    course_id: string;

    @ManyToOne(() => Course)
    @JoinColumn({ name: 'course_id' })
    course: Course;

    @Column()
    subject_id: string;

    @ManyToOne(() => Subject)
    @JoinColumn({ name: 'subject_id' })
    subject: Subject;

    @Column()
    name: string;
    
    @Column()
    workload: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}