import { Entity, ManyToOne, CreateDateColumn, UpdateDateColumn, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from './event';
import { Course } from './course';
import { Stage } from './stage';

@Entity()
export class CourseEvent {
  @PrimaryGeneratedColumn() id: number;

  @CreateDateColumn()
  createdDate: number;

  @UpdateDateColumn()
  updatedDate: number;

  @ManyToOne(_ => Event, (lecture: Event) => lecture.courseEvents)
  event: Event;

  @Column()
  eventId: number;

  @ManyToOne(_ => Course, (course: Course) => course.stages)
  course: Course;

  @Column()
  courseId: number;

  @ManyToOne(_ => Stage)
  stage: Stage;

  @Column()
  stageId: number;

  @Column({ type: 'date', nullable: true })
  date: string;

  @Column({ type: 'time with time zone', nullable: true })
  time: string;

  @Column({ nullable: true })
  place: string;

  @Column({ nullable: true })
  coordinator: string;

  @Column({ nullable: true })
  comment: string;
}
