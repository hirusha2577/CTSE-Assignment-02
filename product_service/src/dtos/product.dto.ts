// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IsArray, IsEmpty, IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateProductDto {
  // @IsArray()
  public categoryId: Array<string>;

  // @IsArray()
  public subCategoryId: Array<string>;

  // @IsString()
  public name: string;

  // @IsString()
  public description: string;

  // @IsString()
  public price: string;

  // @IsObject()
  public image: string;
}
