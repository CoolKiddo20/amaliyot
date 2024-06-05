// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring

//Javob:
// let a = 10;
// let b = 20;
// console.log(a+b);


// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring

// let a = '12';
// let num = Number(a);
// console.log(num); 
// console.log(typeof num); 



// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering


// let randomNumber = Math.round(Math.random() * 100);
// alert(`Random number: ${randomNumber}`);

//     if (randomNumber % 2 == 0) {
//         alert(`${randomNumber}   - Juft raqam.`);
//     } else {
//         alert(`${randomNumber}   - Toq raqam.`);
//     }



// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin



// let mars = prompt(`biror so'z kiriting`)

// if (mars == 'Mars') {
//     alert(`Mars`)
// }else{
//     alert(`Mars It School`)
// }





// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi 
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring




// let words = ["apple", "banana", "cherry", "date", "elderberry"];
// let longWords = [];
// for (let i = 0; i < words.length; i++) {
//     if (words[i].length >= 5) {
//         longWords.push(words[i]);
//     }
// }
// console.log(longWords);





// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring



// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i}   - Juft raqam.`);
//     } else {
//         console.log(`${i}   - Toq raqam.`);
//     }
// }