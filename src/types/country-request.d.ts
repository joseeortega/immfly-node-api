import { ParsedUrlQuery } from "querystring";

export interface CountryRequest extends ParsedUrlQuery {
  filter?: string;
  order?: 'asc' | 'desc';
}