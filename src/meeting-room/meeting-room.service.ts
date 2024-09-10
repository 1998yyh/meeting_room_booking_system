import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMeetingRoomDto } from './dto/create-meeting-room.dto';
import { UpdateMeetingRoomDto } from './dto/update-meeting-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MeetingRoom } from './entities/meeting-room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MeetingRoomService {
  @InjectRepository(MeetingRoom)
  private repository: Repository<MeetingRoom>;

  async find(pageNo: number, pageSize: number) {
    if (pageNo < 1) {
      throw new BadRequestException('页面最小为1');
    }

    const skip = (pageNo - 1) * pageSize;

    const [meetingRooms, totalCount] = await this.repository.findAndCount({
      skip,
      take: pageSize,
    });

    return {
      meetingRooms,
      totalCount,
    };
  }

  async create(meetingRoomDto: CreateMeetingRoomDto) {
    console.log(meetingRoomDto);

    const meetingRoom = new MeetingRoom();

    // meetingRoom.createTime = Date.now();
  }
}
