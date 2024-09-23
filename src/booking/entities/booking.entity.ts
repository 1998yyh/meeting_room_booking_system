import { IS_NOT_EMPTY } from 'class-validator';
import { MeetingRoom } from 'src/meeting-room/entities/meeting-room.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '会议开始时间',
  })
  startTime: Date;

  @Column({
    comment: '会议结束时间',
  })
  endTime: Date;

  @Column({
    length: 20,
    comment: '状态（申请中、审批通过、审批驳回、已解除）',
    default: '申请中',
  })
  status: string;

  @Column({
    length: 20,
    comment: '备注',
    default: '',
  })
  note: string;

  @CreateDateColumn({
    comment: '创建时间',
  })
  createTime: Date;

  @UpdateDateColumn({
    comment: '更新时间',
  })
  updateTime: Date;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => MeetingRoom)
  room: MeetingRoom;
}
