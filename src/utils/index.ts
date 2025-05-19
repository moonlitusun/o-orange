// Reason: number(null) = 0
export const toNumber = (target: any): number => {
  return target === null ? NaN : Number(target);
};
