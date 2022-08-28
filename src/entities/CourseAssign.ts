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
  import { Class } from './Classe';
  import { User } from './User';

@Entity('courseAssigns')
export class CourseAssign {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    course_id: string;

    @ManyToOne(() => Course)
    @JoinColumn({ name: 'course_id' })
    course: Course;

    @Column()
    class_id: string;

    @ManyToOne(() => Class)
    @JoinColumn({ name: 'couclass_idrse_id' })
    class: Class;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    role: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}