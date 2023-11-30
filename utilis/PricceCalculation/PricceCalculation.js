export default function pricceCalculation(orginalPrice, discountRate) {
  const discountPrice = orginalPrice - orginalPrice / discountRate;
  return parseInt(discountPrice);
}
