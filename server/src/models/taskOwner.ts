import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { CourseTask } from './courseTask';
@Entity()

export class TaskOwner {
  @PrimaryGeneratedColumn() id: number;

  @OneToMany(_ => CourseTask, (courseTask: CourseTask) => courseTask.taskOwner, { nullable: true })
  courseTasks: CourseTask[] | null;

  @Column()
  userId: number;

  @Column()
  githubId: string;
}
