export function generateTick(price: number, decimals0: number, decimals1: number) {
  // note the change of logarithmic base
  return Math.round(Math.log(price * Math.pow(10, decimals1 - decimals0)) / Math.log(1.0001));
}

export function tickToPrice(tick: number, decimals0: number, decimals1: number) {
  return tickToRawPrice(tick) / Math.pow(10, decimals1 - decimals0);
}

export function tickToRawPrice(tick: number) {
  return Math.pow(1.0001, tick);
}

export function priceBands(price: number, percent: number) {
  return [price * ((100 - percent)/100), price * ((100 + percent)/100)]
}

export function tickBands(tick: number, percent: number) {
  if (tick > 0) {
    return [tick * ((100 - percent)/100), tick * ((100 + percent)/100)]
  } else {
    return [tick * ((100 + percent)/100), tick * ((100 - percent)/100)]
  }
}

export function baseTicksFromCurrentTick(tick: number, decimals0: number, decimals1: number, tickSpacing: number, percent: number) {
  let lowerTick: number;
  let upperTick: number;
  [lowerTick, upperTick] = tickBands(tick, percent);
  return [roundTick(lowerTick, tickSpacing), roundTick(upperTick, tickSpacing)];
}

export function limitTicksFromCurrentTick(tick: number, decimals0: number, decimals1: number, tickSpacing: number, percent: number, above: boolean) {
  let price = tickToPrice(tick, decimals0, decimals1);
  let priceTick = generateTick(price, decimals0, decimals1);
  let lowerTick: number;
  let upperTick: number;
  [lowerTick, upperTick] = tickBands(tick, percent);

  let modulus = tick % tickSpacing;
  modulus = modulus < 0 ? modulus + tickSpacing : modulus;

  if (above) {
    return [tick + tickSpacing - modulus, roundTick(upperTick, tickSpacing)];
  } else {
    return [roundTick(lowerTick, tickSpacing), tick - modulus];
  }
}

export function positionTicksFromCurrentTick(tick: number, decimals0: number, decimals1: number, tickSpacing: number, percent: number, above: boolean) {
  let [baseLower, baseUpper] = baseTicksFromCurrentTick(tick, decimals0, decimals1, tickSpacing, percent);
  let [limitLower, limitUpper] = limitTicksFromCurrentTick(tick, decimals0, decimals1, tickSpacing, percent, above);
  return [baseLower, baseUpper, limitLower, limitUpper];
}

export function roundTick(tick: number, tickSpacing: number) {
  let modulus = tick % tickSpacing;
  modulus = modulus < 0 ? modulus + tickSpacing : modulus;
  return (modulus > tickSpacing/2) ?
            tick - modulus :
            tick + tickSpacing - modulus;
}
