const elsPaymentPeriod = document.querySelectorAll('[name="payment-period"]'); //Inputlarning namesini topib olayapdi
const elsCurrentNumberValue = document.querySelectorAll('.current-number');//Switch bosilganda sotuv narxini o'zgartirish uchun narxlarning klasini topib olish uchun
const elsfeautureStroge = document.querySelectorAll('.type-feauture-item-stroge');//Switch bosilganda stroge qiymati o'zgartirish uchun narxlarning klasini topib olish uchun
const elsfeautureallow = document.querySelectorAll('.type-feauture-item-allow');//Switch bosilganda allow qiymati o'zgartirish uchun narxlarning klasini topib olish uchun
const elsfeauturesend = document.querySelectorAll('.type-feauture-item-send');//Switch bosilganda send qiymati o'zgartirish uchun narxlarning klasini topib olish uchun


elsPaymentPeriod.forEach(function (elPaymentPeriod) { //Inputlarning har bir namesi uchun funksiya kiritilayapdi
  elPaymentPeriod.addEventListener('change', function () {//inputning namesini o'zgarish hodisasiga quloq solinayapdi
    const period = elPaymentPeriod.value; //Inputning namesini period o'zgaruvchisiga saqlab qo'yayapmiz

   if (period === 'anually') { //Inputning valuesi anually bo'lsa
    elsCurrentNumberValue.forEach(function (elPrice) { //Narxlar clasini elPrice ga bog'layapdi
     elPrice.textContent = elPrice.closest('.pricing-list-item').dataset.paymentAnually; //elPricening textContenti eng yaqin avlodi bo'lgan ya'ni narxlarni oylik va yillik qiymati ni dataga bog'langan li elementini clasini closest orqali topib undagi anuallyga mos bo'lgan ma'lumotni dataset bilan topib ekranga chiqarayapdi
    });
   } else { //Inputning valuesi anually bo'lmasa
    elsCurrentNumberValue.forEach(function (elPrice) { //Narxlar clasini elPrice ga bog'layapdi
      elPrice.textContent = elPrice.closest('.pricing-list-item').dataset.paymentMonthly; //elPricening textContenti eng yaqin avlodi bo'lgan ya'ni narxlarni oylik va yillik qiymati ni dataga bog'langan li elementini clasini closest orqali topib undagi monthlyga mos bo'lgan ma'lumotni dataset bilan topib ekranga chiqarayapdi
    })
   }

   //Stroge uchun
   if (period === 'anually') { //Inputning valuesi anually bo'lsa
    elsfeautureStroge.forEach(function (elStroge) { //Narxlar clasini elStroge ga bog'layapdi
     elStroge.textContent = elStroge.closest('.pricing-list-item').dataset.strogeAnually; //elStrogening textContenti eng yaqin avlodi bo'lgan ya'ni narxlarni oylik va yillik qiymati ni dataga bog'langan li elementini clasini closest orqali topib undagi anuallyga mos bo'lgan ma'lumotni dataset bilan topib ekranga chiqarayapdi
    });
   } else { //Inputning valuesi anually bo'lmasa
    elsfeautureStroge.forEach(function (elStroge) {
      elStroge.textContent = elStroge.closest('.pricing-list-item').dataset.strogeMonthly;//elStrogening textContenti eng yaqin avlodi bo'lgan ya'ni narxlarni oylik va yillik qiymati ni dataga bog'langan li elementini clasini closest orqali topib undagi monthlyga mos bo'lgan ma'lumotni dataset bilan topib ekranga chiqarayapdi
    })
   }

  //  Allow uchun
  if (period === 'anually') { //Inputning valuesi anually bo'lsa
    elsfeautureallow.forEach(function (elAllow) { //Narxlar clasini elAllowge ga bog'layapdi
      elAllow.textContent = elAllow.closest('.pricing-list-item').dataset.allowAnually;//elAllowning textContenti eng yaqin avlodi bo'lgan ya'ni narxlarni oylik va yillik qiymati ni dataga bog'langan li elementini clasini closest orqali topib undagi anuallyga mos bo'lgan ma'lumotni dataset bilan topib ekranga chiqarayapdi
    });
   } else {//Inputning valuesi anually bo'lmasa
    elsfeautureallow.forEach(function (elAllow) { //Narxlar clasini elAllowge ga bog'layapdi
      elAllow.textContent = elAllow.closest('.pricing-list-item').dataset.allowMonthly; //elAllowning textContenti eng yaqin avlodi bo'lgan ya'ni narxlarni oylik va yillik qiymati ni dataga bog'langan li elementini clasini closest orqali topib undagi monthlyga mos bo'lgan ma'lumotni dataset bilan topib ekranga chiqarayapdi
    })
   }

   //Send uchun
   if (period === 'anually') { //Inputning valuesi anually bo'lsa
    elsfeauturesend.forEach(function (elSend) { //Narxlar clasini elSendge ga bog'layapdi
      elSend.textContent = elSend.closest('.pricing-list-item').dataset.sendAnually; //elSendning textContenti eng yaqin avlodi bo'lgan ya'ni narxlarni oylik va yillik qiymati ni dataga bog'langan li elementini clasini closest orqali topib undagi anuallyga mos bo'lgan ma'lumotni dataset bilan topib ekranga chiqarayapdi
    });
   } else { //Inputning valuesi anually bo'lmasa
    elsfeauturesend.forEach(function (elSend) { //Narxlar clasini elSendge ga bog'layapdi
      elSend.textContent = elSend.closest('.pricing-list-item').dataset.sendMonthly; //elSendning textContenti eng yaqin avlodi bo'lgan ya'ni narxlarni oylik va yillik qiymati ni dataga bog'langan li elementini clasini closest orqali topib undagi monthlyga mos bo'lgan ma'lumotni dataset bilan topib ekranga chiqarayapdi
    })
   }
  });
});