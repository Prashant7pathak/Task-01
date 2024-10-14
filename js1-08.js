// Challenge-4

const score1=96;
const score2=108;
const score3=139;
const averageDolphins = (score1 + score2 + score3)/3;
const score4=96;
const score5=108;
const score6=89;
const averageKoalas = (score4 + score5 + score6)/3;
console.log(`Average score of Dolphins are:${averageDolphins}`);
console.log(`Average score of Koalas are:${averageKoalas}`);

if (averageDolphins > averageKoalas) {
      console.log('Dolphins win the trophy 🏆');
    } else if (averageKoalas > averageDolphins) {
      console.log('Koalas win the trophy 🏆');
    } else if (averageDolphins === averageKoalas) {
      console.log('Both win the trophy!');
    }


if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (averageKoalas > averageDolphins && averageKoalas>= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}
