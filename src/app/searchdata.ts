import { searchResult } from "./searchresult";

export interface searchData {
    SearchType:string;
    Expression:string;
    Results:Array<searchResult>;
    ErrorMessage:string;
}