import {ITag} from "./ITag.ts";

export interface IEvent {
    id: number,
    name: string,
    description: string,
    address: string,
    phoneNumber: string,
    rating: number,
    photoLink: string,
    tags: Array<ITag>
}