// your code, here
const couponButton = document.querySelector('#click-here');

onCouponClick = () => {
  const couponCode = document.querySelector('#coupon-code');
  couponCode.innerHTML = '50OFF-YOWZA!';
};

couponButton.addEventListener('click', onCouponClick);
