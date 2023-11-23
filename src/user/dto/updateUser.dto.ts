import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class UpdateUserDto {

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    @IsDefined()
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    company: number;
}