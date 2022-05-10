// Задание 2 - видео плеер
// В HTML есть <iframe> с видео для Vimeo плеера. Напиши скрипт который будет 
// сохранять текущее время воспроизведения видео в локальное хранилище и, 
// при перезагрузке страницы, продолжать воспроизводить видео с этого времени.


import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

    player.on('timeupdate', throttle(currentTime, 1000)); 
    
    function currentTime(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log('current time: ', data.seconds);
}

const timeWatch = localStorage.getItem('videoplayer-current-time');

    if (timeWatch) {
    player.setCurrentTime(timeWatch);
    localStorage.removeItem('videoplayer-current-time');
    }