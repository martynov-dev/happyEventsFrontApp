import $api from '../http';
import { AxiosResponse } from 'axios';
import {IEvent} from "../models/IEvent.ts";

export default class PlaceService {
    static async getPlaces(): Promise<AxiosResponse<IEvent[]>> {
        return $api.get('/place');
    }
    static async searchPlacesByTag(tagQuery: Array<{id: number}>): Promise<AxiosResponse<IEvent[]>> {
        return $api.post('/place', tagQuery);
    }
}
