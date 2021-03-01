export interface IOptions {
    rangeType?: string;
    dateType?: string;
    rangeMultiple?: number;
    fixedEndTime?: false;
}
export interface IRangeTypeListChildrenObject {
    get: string;
    set: string;
    unit: number;
}
export interface IRangeTypeList {
    millsecond: IRangeTypeListChildrenObject;
    second: IRangeTypeListChildrenObject;
    minute: IRangeTypeListChildrenObject;
    hour: IRangeTypeListChildrenObject;
    day: IRangeTypeListChildrenObject;
    week: IRangeTypeListChildrenObject;
    month: IRangeTypeListChildrenObject;
    year: IRangeTypeListChildrenObject;
}
