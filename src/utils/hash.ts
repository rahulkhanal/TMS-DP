import { Injectable } from "@nestjs/common";
import * as argon from "argon2";

@Injectable()
export class hash {
    async value(value) {
        return await argon.hash(value);
    }

    async verifyHashing(originalData, newData): Promise<boolean> {
        return await argon.verify(originalData, newData)
    }
}