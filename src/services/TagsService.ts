import $api from '../http';
import { AxiosResponse } from 'axios';
import {ITag} from "../models/ITag.ts";

export default class TagsService {
    static async getTags(): Promise<AxiosResponse<ITag[]>> {
        return $api.get('/tag');
    }
}
