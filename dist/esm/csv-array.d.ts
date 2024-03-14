/**
 * 转换 csv 数组为对象数组
 */
export declare function csvArrayToObjects<Result extends Record<string, any>>(arr: any[][], renameMap?: Record<string, string>): Result[];
/**
 * 转换 csv 数组为对象数组, 但另外指定keys名称
 */
export declare function csvArrayWithoutKeysToObjects<Result extends Record<string, any>>(arr: any[][], keys: string[], renameMap?: Record<string, string>): Result[];
