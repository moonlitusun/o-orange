// src/pagination.ts
function pagination(array, pageNum = 1, pageSize = 10) {
  const beginIndex = (pageNum - 1) * pageSize;
  const endIndex = pageNum * pageSize;
  return array.slice(beginIndex, endIndex);
}
var pagination_default = pagination;
export {
  pagination_default as default
};
