import { MigrationInterface, QueryRunner } from 'typeorm';

export class Data1727665738026 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO `users` VALUES (1,'yanghao','123456','','532438158',NULL,'13994228172',0,1,'2024-09-29 10:40:33.678913','2024-09-29 10:40:33.678913'),(2,'wangfeifan','e10adc3949ba59abbe56e057f20f883e','团子','532438158@qq.com',NULL,NULL,0,0,'2024-09-29 10:42:17.384041','2024-09-29 10:42:17.384041');",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE booking');
  }
}
