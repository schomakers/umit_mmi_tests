const powerButton = document.getElementById("display");

let temperature = 21, mode = "summer", level = 0, isOn = true;

// Konstanten groß schreiben
const DATEOBJ = document.getElementById("date");
const TEMPERATUREOBJ = document.getElementById("temperature");
const LEVELOBJ = document.getElementById("level");
const MODUSOBJ = document.getElementById("modus");

document.getElementById("on-off-button").addEventListener("click", turnOnOff);
document.getElementById("level-button").addEventListener("click", levelChange);
document.getElementById("mode-button").addEventListener("click", modeChange);
document.getElementById("plus-button").addEventListener("click", increaseTemperature);
document.getElementById("minus-button").addEventListener("click", decreaseTemperature);

const time = () => setInterval(updateTime, 1000)

function updateTime() {
    DATEOBJ.innerText = new Date().toLocaleString('en-GB', {timeZone: 'UTC'}) + " - "
        + getGreetingDependOnTime(new Date());
}

time();

function turnOnOff() {
    isOn = !isOn;
    updateDisplay();
}

function updateDisplay() {
    if (!isOn) {
        TEMPERATUREOBJ.innerText = `Temperatur: ${temperature} Celsius`
        LEVELOBJ.innerText = `Level: ${level}`
        MODUSOBJ.innerText = `Modus: ${mode}`
    } else {
        TEMPERATUREOBJ.innerText = ""
        LEVELOBJ.innerText = ""
        MODUSOBJ.innerText = ""
    }
}


// this should be a very helpful comment
getGreetingDependOnTime = function (myDate) {
    let timeBegin = '06:00';
    let timeEnd = '22:00';
    const dateBegin = new Date('2020-01-01 ' + timeBegin);
    const dateEnd = new Date('2020-01-01 ' + timeEnd);
    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours() + ":" + myDate.getMinutes());

    if (dateBegin.getTime() < dateCurrent.getTime()) { //"guten morgen"
        if (dateCurrent.getTime() >= dateEnd.getTime()) {

            return "Guten Morgen"
        }
        else {
            return "Guten Abend"
        }
    } else {
        newVariable = dateCurrent.getTime()
        console.log("For debugging: ") + dateBegin.getTime() + " " + dateCurrent.getTime() + " " + dateEnd.getTime()
        return "Guten Morgen"
    }
}



function increaseTemperature() {
    temperature--;
    updateDisplay();
}

function decreaseTemperature() {
    temperature++;
    updateDisplay();
}

function levelChange() {
    switch (level) {
        case 0:
            level = 1;
            break;
        case 1:
            level += 1;
            break;
        case 2:
            level++;
            break;
        default:
            level -= 3;
            break;
    }
    updateDisplay();
}

function modeChange() {
    mode == "summer" ? mode = "winter" : mode = "summer"
    updateDisplay();
}