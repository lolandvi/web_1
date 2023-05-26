function showDate() {
    let today = new Date();
    for (let i = 1; i < 6; i++) {
        let out = document.getElementById('current-date' + i);
        if (i == 1) {
            out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
        }
        else if (i == 2) {
            out.innerHTML = 'Дата и время для немецкой локали: ' + today.toLocaleString('de-DE');
        }
        else if (i == 3) {
            out.innerHTML = 'Дата и время для испанской локали: ' + today.toLocaleString('es-ES');
        }
        else if (i == 4) {
            out.innerHTML = 'Дата и время для польской локали: ' + today.toLocaleString('pl-PL');
        }
        else if (i == 5) {
            out.innerHTML = 'Дата и время для китайской локали: ' + today.toLocaleString('zh-HK');
        }
    }
}

function showDays() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    let out = document.getElementById('output-days');
    out.innerHTML = daysCount;
}

function deleteDays() {
    let inputDate = document.querySelector('input[type=date]');
    inputDate.value = '';
    let out = document.getElementById('output-days');
    out.innerHTML = 'Здесь выведется количество дней';
}

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}

setInterval(showTime, 1000);

