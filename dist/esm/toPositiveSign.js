// src/toPositiveSign.ts
import { DEFAULT_PLACEHOLDER } from "./constant/default";
import isTrue from "./isTrue";
function toPositiveSign(target, option = {}) {
  const { canEqual = false, balance = 0, placeholder = DEFAULT_PLACEHOLDER, parseFloat = true } = option;
  const parserTarget = parseFloat ? Number.parseFloat(target) : Number(target);
  if (!isTrue(target))
    return placeholder;
  const isMoreThan = canEqual ? parserTarget >= balance : parserTarget > balance;
  return isMoreThan ? `+${target}` : target.toString();
}
var toPositiveSign_default = toPositiveSign;
export {
  toPositiveSign_default as default
};
