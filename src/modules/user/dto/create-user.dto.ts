import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { RoleEnum } from "src/common/enums/role.enum";
import { ID } from "src/common/types/type";

export class CreateUserDto {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ type: Number })
    @IsInt()
    @IsNotEmpty()
    balance: number;

    @ApiProperty({ type: String, enum: RoleEnum })
    @IsEnum(RoleEnum)
    @IsNotEmpty()
    role: RoleEnum

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsInt()
    avatar: ID
}
