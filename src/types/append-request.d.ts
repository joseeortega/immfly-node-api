import { ParsedUrlQuery } from "querystring";

export interface AppendRequest extends ParsedUrlQuery{
    start: string;
    end: string;
}