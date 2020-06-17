import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getBooks() {
    return this.bookService.findAll();
  }

  @Get(':id')
  getBook(@Param() id: number) {
    return this.bookService.findById(id);
  }

  @Post()
  createBook(@Body() bookDto: CreateBookDto) {
    return this.bookService.create(bookDto);
  }

  @Put(':id')
  updateBook(@Param() id: number, @Body() newValue: UpdateBookDto) {
    return this.bookService.update(id, newValue);
  }

  @Delete(':id')
  deleteBook(@Param() id: number) {
    return this.bookService.delete(id);
  }
}
