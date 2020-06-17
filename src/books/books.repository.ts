import { Book } from './books.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateBookDto } from './dtos/create-book.dto';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  createBook = async (bookDto: CreateBookDto) => {
    return await this.save(bookDto);
  };

  findBooks = async () => {
    return await this.find();
  };
}
