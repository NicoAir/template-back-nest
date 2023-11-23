import { Injectable } from '@nestjs/common';
import { CatDto } from './dto/cat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schema/cat.schema';
import { Model } from 'mongoose';

@Injectable()
export class CatService {

  /**
   *
   */
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {
  }

  async create(createCatDto: CatDto) : Promise<Cat>{
    console.log( 'This action adds a new cat')
    return this.catModel.create(createCatDto);
  }

  async findAll() {
    console.log( `This action returns all cat`)
    return this.catModel.find();
  }

  async findOne(id: number) {
    console.log( `This action returns a #${id} cat`)
    return this.catModel.findById(id);
  }

  async update(id: number, updateCatDto: CatDto) {
    console.log( `This action updates a #${id} cat`)
    return this.catModel.findByIdAndUpdate(id, updateCatDto)
  }

  async remove(id: number) {
    console.log( `This action removes a #${id} cat`)
    return this.catModel.findByIdAndDelete(id);
  }
}
