import { JwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";
import { JwtPayload } from "src/helpers/types";
require('dotenv').config();

@Injectable()
export class Token {
    constructor(
        private jwtService: JwtService,
    ) { }

    async generateRefreshToken(jwtPayload: JwtPayload) {
        const expirationTimeInSeconds = '30d';
        const token = await this.jwtService.signAsync(jwtPayload, {
            secret: process.env.RT_SECRET,
            expiresIn: expirationTimeInSeconds,
        });
        return token;
    }
    async generateAcessToken(jwtPayload: JwtPayload) {
        const expirationTimeInSeconds = '5m';
        const token = await this.jwtService.signAsync(jwtPayload, {
            secret: process.env.AT_SECRET,
            expiresIn: expirationTimeInSeconds,
        });
        return token;
    }
}