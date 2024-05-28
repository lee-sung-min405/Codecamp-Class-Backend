import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './apis/boards/entities/board.entity';
import { BoardsModule } from './apis/boards/boards.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

// interface TypeOrmConfig {
//   type: 'mysql';
//   host: string;
//   port: number;
//   username: string;
//   password: string;
//   database: string;
//   entities: ;
//   synchronize: boolean;
//   logging: boolean;
// }

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // ConfigModule을 임포트합니다.
      inject: [ConfigService], // ConfigService를 주입합니다.
      useFactory: (configService: ConfigService)  => ({
        // ConfigService를 사용하여 환경 변수에 접근합니다.
        // type: configService.get('DATABASE_TYPE') as 'mariadb',
        // host: configService.get('DATABASE_HOST'),
        // port: configService.get<number>('DATABASE_PORT'),
        // username: configService.get('DATABASE_USERNAME'),
        // password: configService.get('DATABASE_PASSWORD'),
        // database: configService.get('DATABASE_DATABASE'),
        // entities: [Board],
        // synchronize: true,
        // logging: true,

        type: process.env.DATABASE_TYPE as "mysql",
        host: process.env.DATABASE_HOST,
        port:  Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE,
        entities: [Board],
        synchronize: true,
        logging: true,
      }),
    }),
    BoardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
