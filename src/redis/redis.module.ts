import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { createClient } from 'redis';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [
    RedisService,
    {
      provide: 'REDIS_CLIENT',
      inject: [ConfigService],
      async useFactory(ConfigService: ConfigService) {
        const client = createClient({
          socket: {
            host: ConfigService.get('redis_server_host'),
            port: ConfigService.get('redis_server_post'),
          },
          database: ConfigService.get('redis_server_db'),
        });
        await client.connect();
        return client;
      },
    },
  ],
  exports: [RedisService],
})
export class RedisModule {}
