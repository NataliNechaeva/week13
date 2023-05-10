const sum = document.querySelector('.sum').value;
const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

let message;

console.log(`Ваш депозит на начало расчетного периода составлял ${deposit + " " + currency}`); // Ваш депозит на начало расчетного периода составлял 30000 руб
message = `Согласно вашему тарифу, вам была присвоена ставка ` + interestRate +`%`;

console.log(message); // Согласно вашему тарифу, вам была присвоена ставка 18.5%
message = `К концу расчетного прирост составил `+growth+
 " " + currency + ` на данный момент ваш депозит составляет ` + (Number(deposit) + Number(growth)) + " " + currency;
console.log(message); // К концу расчетного прирост составил 150 руб и на данный момент ваш депозит составляет 30150 руб

button.addEventListener('click', () => {
  const sum = document.querySelector('.sum').value;
  message = `Через год у вас будет ` + sum *1.07 + " " + currency + ` на счету`;
  total.textContent = (message); // Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
});