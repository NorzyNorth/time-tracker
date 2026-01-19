import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TimeTracksType } from '../enums/time-tracks.enum';

@Entity('time_tracks')
export class TimeTracks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false
  })
  type: TimeTracksType;

  @Column({
    type: 'varchar',
    nullable: false
  })
  username: string;

  @CreateDateColumn({
    type: 'timestamptz',
    nullable: false,
    name: 'created_at',
    default: new Date()
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    nullable: false,
    name: 'updated_at',
    default: new Date()
  })
  updatedAt: Date;
}
