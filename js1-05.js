const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
// comparison of BMI between two persons
if (BMIMark>BMIJohn) {
    console.log(`BMI of Mark is more than Jhon and it is about: ${BMIMark}`);
}else{
    console.log(`BMI of Jhon is more than Mark and it is about: ${BMIMark}`);
}