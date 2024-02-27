const elsPaymentPeriod = document.querySelectorAll('[name="payment-period"]');
const elsCurrentNumberValue = document.querySelectorAll('.current-number');
const elsfeautureStroge = document.querySelectorAll('.type-feauture-item-stroge');
const elsfeautureallow = document.querySelectorAll('.type-feauture-item-allow');
const elsfeauturesend = document.querySelectorAll('.type-feauture-item-send');


elsPaymentPeriod.forEach(function (elPaymentPeriod) {
  elPaymentPeriod.addEventListener('change', function () {
    const period = elPaymentPeriod.value;

   if (period === 'anually') {
    elsCurrentNumberValue.forEach(function (elPrice) {
     elPrice.textContent = elPrice.closest('.pricing-list-item').dataset.paymentAnually;
    });
   } else {
    elsCurrentNumberValue.forEach(function (elPrice) {
      elPrice.textContent = elPrice.closest('.pricing-list-item').dataset.paymentMonthly;
    })
   }

   //Stroge uchun
   if (period === 'anually') {
    elsfeautureStroge.forEach(function (elStroge) {
     elStroge.textContent = elStroge.closest('.pricing-list-item').dataset.strogeAnually;
    });
   } else {
    elsfeautureStroge.forEach(function (elStroge) {
      elStroge.textContent = elStroge.closest('.pricing-list-item').dataset.strogeMonthly;
    })
   }

  //  Allow uchun
  if (period === 'anually') {
    elsfeautureallow.forEach(function (elAllow) {
      elAllow.textContent = elAllow.closest('.pricing-list-item').dataset.allowAnually;
    });
   } else {
    elsfeautureallow.forEach(function (elAllow) {
      elAllow.textContent = elAllow.closest('.pricing-list-item').dataset.allowMonthly;
    })
   }

   //Send uchun
   if (period === 'anually') {
    elsfeauturesend.forEach(function (elSend) {
      elSend.textContent = elSend.closest('.pricing-list-item').dataset.sendAnually;
    });
   } else {
    elsfeauturesend.forEach(function (elSend) {
      elSend.textContent = elSend.closest('.pricing-list-item').dataset.sendMonthly;
    })
   }
  });
});