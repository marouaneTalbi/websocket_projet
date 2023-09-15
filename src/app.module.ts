import { Module } from '@nestjs/common';
import { MessageGateway } from './message/message.gateway';
import { MessageModule } from './message/message.module';

@Module({
  imports: [MessageModule],
  providers: [MessageGateway],
})
export class AppModule {}
