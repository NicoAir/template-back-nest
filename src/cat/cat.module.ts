import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schema/cat.schema';

@Module({
  controllers: [CatController],
  providers: [CatService],
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
})
export class CatModule {}
