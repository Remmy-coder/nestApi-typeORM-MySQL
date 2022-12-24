import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { BrandModule } from './brand/brand.module';
import { Brand } from './brand/entities/brand.entity';
import { AbstractService } from './common/abstract/abstract.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'bobdreomeje65',
      database: 'nestjs_mysql_tutorial',
      entities: [User, Brand],
      synchronize: true,
    }),
    UsersModule,
    BrandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
