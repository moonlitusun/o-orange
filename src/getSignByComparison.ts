import { stringNumber } from './types/common/type';
import { toNumber } from './utils';

interface GetSignByComparisonOptions {
  equalSign?: string;
  raiseSign?: string;
  declineSign?: string;
  balance?: number;
}

export default function GetSignByComparison(
  num: stringNumber,
  options: GetSignByComparisonOptions = {}
) {
  const {
    equalSign = undefined,
    raiseSign = 'price-raise',
    declineSign = 'price-decline',
    balance = 0,
  } = options;
  const pureNum = toNumber(num);
  if (isNaN(pureNum) || !isFinite(pureNum)) return equalSign;

  if (pureNum > balance) return raiseSign;
  if (pureNum < balance) return declineSign;

  return equalSign;
}
