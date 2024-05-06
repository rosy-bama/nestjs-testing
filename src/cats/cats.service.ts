import { Injectable } from "@nestjs/common";
import { Cat } from "./cats.interface";

@Injectable()
export class CatsService {
    private readonly cats: string[] = [];

    create(cat: string) {
        this.cats.push(cat);
    }

    findAll(): string[] {
        return this.cats;
    }
}