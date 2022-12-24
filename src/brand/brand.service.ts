import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandService extends AbstractService<Brand> {
  constructor(@InjectRepository(Brand) private brandRepository: Repository<Brand>){
    super(brandRepository);
  }
  
  // create(createBrandDto: CreateBrandDto) {
  //   return 'This action adds a new brand';
  // }

  // findAll() {
  //   return `This action returns all brand`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} brand`;
  // }

  // update(id: number, updateBrandDto: UpdateBrandDto) {
  //   return `This action updates a #${id} brand`;
  // }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
