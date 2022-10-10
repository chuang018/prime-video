import { MostPopularDetail } from "./mostpopulardetail";

export interface MostPopularData{
    errorMessage: string;
    items: Array<MostPopularDetail>;
}