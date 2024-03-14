// src/ensure.ts
import { DEFAULT_PLACEHOLDER } from "./constant/default";
import isUndefined from "./isUndefined";
import isTrue from "./isTrue";
function ensure(value, failureCallback, successCallback) {
  if (!isTrue(value)) {
    if (failureCallback === null || isUndefined(failureCallback))
      return DEFAULT_PLACEHOLDER;
    return typeof failureCallback === "function" ? failureCallback() : failureCallback;
  }
  if (isUndefined(successCallback))
    return value;
  return typeof successCallback === "function" ? successCallback() : successCallback;
}
var ensure_default = ensure;
export {
  ensure_default as default
};
