/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    emal: string;
    
    @ApiProperty()
    phone: string;
    
    @ApiProperty()
    password: string;
}