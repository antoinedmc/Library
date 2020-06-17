import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly author: string;
  @ApiProperty()
  readonly pages: number;
}
