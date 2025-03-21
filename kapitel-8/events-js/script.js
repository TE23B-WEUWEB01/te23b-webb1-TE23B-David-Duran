// while (true) {
//     let namn = prompt("Ange ditt namn:");   // Popup-ruta att skriva i
//     let lösenord = prompt("Ange ditt lösenord:");   //Popup-ruta att skriva i 

//     // Kontrollera att namn är alex och lösen är 12345
//     if (namn == "alex" && lösenord == "12345") {
//         document.writeln("Hej Alex, du är inloggad!<br>");
//         break;
//     } else {
//         document.writeln("Fel uppgifter, försök igen <br>");
        
//     }
// }
// let ålder = prompt("Hur gammal är du?");
// // document.writeln(`Hej ${namn} du är ${ålder}`);

// Lär in ett heltal 5-10
// Skriv ut så många rader som heltalet i webbläsaren, tex:
// rad 1 
// rad 2..
let heltal = parseInt(prompt("Skriv ett heltal 5-10:"));
for (let i = 0; i < heltal; i++) {
    document.writeln(`rad ${i}<br>`);
}