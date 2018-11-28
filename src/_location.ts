const _location = new class {
  /**
   * normalize location.search
   * 
   * @param { string } key 
   * @param { string } [type = brower] 'brower' | 'hash'
   * @since 0.0.1
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