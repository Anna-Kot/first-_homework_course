console.table(countries);

function getAvaragePopulation() {
    //в каждой стране есть поле population, вернуть из функции среднее арифм.
    // return countries.map(country => country.population);
    let sum = countries.reduce ((sum, el) => sum + el.population, 0);
    console.log(sum);
    return (sum/countries.length).toFixed(2);
}
console.log(getAvaragePopulation());
function getNames() {
    //вернуть список (массив) имен стран (поле name)
    return countries.map (country => country.name);
}
console.log(getNames());
function findCountry() {
    //ввод через prompt название страны, вернуть true если такая страна нашлась по имени, false если не нашлась. можно использовать для этого getNames выше + indexOf
    let nameCountry = prompt("Ввeдіть назву країни");
    if (getNames().indexOf(nameCountry) >=1 ) {
        return true;
    }
    return false;
}
// console.log(findCountry());

function getCountryByCode() {
    //пользователь вводит через prompt трехбуквенный код. если введенная строка не 3 символа длиной - выдать сообщение о неправильном вводе.
    //по введенной строке (трехбуквенный код) найти страну (должно совпадать с alpha3Code, которое есть у каждой страны).
    //и вернуть из функции либо объект с найденной страной, либо false


    let code = prompt("Ввeдіть трехбуквенный code");
    return countries.filter (country => country.alpha3Code === code);
    
    // countries.filter(function(country) {
    //     if (country.alpha3Code === code) {
    //      return country.alpha3Code;
    //     }
    //     else {
    //         return "false";
    //     }
    // });
    
}
console.log(getCountryByCode());
//Удачи.