import {ITag} from "./ITag.ts";

export interface IEvent {
    id: number,
    name: string,
    description: string,
    address: string,
    phoneNumber: string,
    rating: 4,
    photoLink: string,
    tags: Array<ITag>
}