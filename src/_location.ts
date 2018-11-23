const _location = new class {
  /**
   * @name normalizeSearch-格式化location.search
   * @param { string } key 需要查询的参数
   * @param { string } [type = brower] 类型 'brower' | 'hash'
   */
  public normalizeSearch(key: string, type: string = 'brower'): string | object {
    const { search, hash } = window.location;
    const typeVal: any = type === 'hash' ? hash : search;

    if (!typeVal) return;

    const result_brower: Array<any> | null = typeVal.match(new RegExp(`(\\?|\\&)${key}=([^\\&]+)`));

    if (result_brower) return result_brower[2];
    return;
  }
}();

export const normalizeSearch = _location.normalizeSearch;

export default _location;