import { ApiBody, ApiTags } from "@nestjs/swagger";
import { IsString, Length, Min } from "class-validator";

export class CreateDepartmentDto {
    @IsString()
    @Length(3, 30)
    name: string
}
