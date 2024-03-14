// src/toThousand.ts
function toThousand(num, sign = ",") {
  const [integer, decimals] = num.toString().split(".");
  const thousandInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, sign);
  return decimals ? `${thousandInteger}.${decimals}` : thousandInteger;
}
var toThousand_default = toThousand;
export {
  toThousand_default as default
};
