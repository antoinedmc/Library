import { Book } from './books.entity';
import { EntityRepository, Repository } from 'typeorm';
import { BookDto } from './dtos/book.dto';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
    createBook = async (bookDto: BookDto) => {
        return await this.save(bookDto);
    };
}