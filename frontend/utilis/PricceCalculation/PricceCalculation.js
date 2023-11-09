export function PricceCalculation(orginalPrice, discountPrice) {
  const percentage = (orginalPrice - discountPrice / orginalPrice) * 100;
  return percentage;
}
