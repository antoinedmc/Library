import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async findById(id: number): Promise<Book | null> {
    return await this.bookRepository.findOneOrFail(id);
  }

  async create(book: CreateBookDto): Promise<Book> {
    return await this.bookRepository.save(book);
  }

  async update(id: number, newValue: UpdateBookDto): Promise<Book | null> {
    const book = await this.bookRepository.findOneOrFail(id);
    if (!book.id) {
      console.error('Book does not exist');
    }
    await this.bookRepository.update(id, newValue);
    return await this.bookRepository.findOne(id);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.bookRepository.delete(id);
  }
}
