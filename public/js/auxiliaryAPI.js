
// x is passed but celsius used as arg -> changed it to celsius to avoid ReferenceError

/**
 * [CelsiusToFahrenheit]
 * @param  {[int]} celsius [Temperature in °C]
 * @return {[int]}     [Temperature in °F]
 */
exports.celsiusToFahrenheit = function (celsius){
    // celsius*(9/5)+32 is the correct formula
    return celsius*(9/5)+32
}


/**
 * [FahrenheitToCelsius]
 * @param  {[int]} celsius [Temperature in °F]
 * @return {[int]}     [Temperature in °C]
 */
exports.fahrenheitToCelsius = function (fahrenheit){
    // swapped (5/9) to (9/5 == 1.8) to get correct results
    return ((fahrenheit-32)/(1.8))
}


exports.getGreetingDependOnTime =  function (myDate) {
    // What if "mydate" is no date object? Exception handling necessary!!: 
    if (!(myDate instanceof Date)) {
        throw new Error("Invalid input: expected a date object");
    }

    let timeBegin = '06:00';
    let timeEnd = '22:00';
    const dateBegin = new Date('2020-01-01 ' + timeBegin);
    const dateEnd = new Date('2020-01-01 ' + timeEnd);
    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours() + ":" + myDate.getMinutes());

    if (dateCurrent >= dateBegin && dateCurrent < dateEnd) {
        return "Guten Morgen";
    } else {
        return "Guten Abend";
    }
}
