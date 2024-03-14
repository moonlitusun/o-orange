// src/toPlaceholder.ts
import isTrue from "./isTrue";
import { DEFAULT_PLACEHOLDER } from "./constant/default";
function toPlaceholder(num) {
  return isTrue(num) ? num : DEFAULT_PLACEHOLDER;
}
var toPlaceholder_default = toPlaceholder;
export {
  toPlaceholder_default as default
};
