import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCarDto {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    index: string;

    @ApiPropertyOptional({ type: Object })
    @IsOptional()
    docs: object;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsInt()
    ownerId: number;
}
