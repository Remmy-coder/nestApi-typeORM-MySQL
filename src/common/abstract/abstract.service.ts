import { Injectable } from '@nestjs/common';
import { DeepPartial, DeleteResult, Repository } from 'typeorm';

@Injectable()
export class AbstractService<T>{
    protected constructor(protected readonly repository: Repository<T>){}

    async create(data: DeepPartial<T>):Promise<T>{
        const newRecord = this.repository.create(data);
        return await this.repository.save(newRecord);
    }

    async findAll():Promise<T[]>{
        return await this.repository.find();
    }

    async findOne(id: any):Promise<T>{
        return await this.repository.findOne({where: id});
    }

    async update(id: any, data: DeepPartial<T>):Promise<T>{
        const record = this.repository.findOne({
            where: id
        });
        if (!record){
            throw new Error('Record not found.')
        }
        return await this.repository.save({id, ...data})
    }

    async delete(id: any):Promise<DeleteResult>{
        const record = this.repository.findOne({
            where: id
        });
        if (!record){
            throw new Error('Record not found.')
        }
        return await this.repository.delete(id)
    }
}
