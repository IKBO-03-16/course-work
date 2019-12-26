import './kazhentsev.css';
import translitModule from './translitModule';
import countProcessor from './countProcessor';
import 'chart.js';
import React from 'react'
import ReactDOM from 'react-dom';

ReactDOM.render(
    React.createElement('div', null, 
        React.createElement('header', null,
            React.createElement('div', { id: 'header' }, 'Переводчик на транслит')
        ),
        React.createElement('section', null, 
            React.createElement('textarea', 
            { 
                id: 'input', 
                placeholder: 'Введите текст и нажмите на кнопку Транслит.' 
            }, null),
            React.createElement('p', null, null),
            React.createElement('input', 
            { 
                id: 'button', 
                type: "submit",
                value: "Транслит"
            }, null),
            React.createElement('p', null, null),
            React.createElement('textarea', 
            { 
                id: 'output', 
                placeholder: 'Тут будет результат.',
                disabled: true
            }, null),
        ),
        React.createElement('section', null, 
            React.createElement('h1', null, 'Числовая статистика по введенным словам'),
            React.createElement('h3', null, 'Символов:'),
            React.createElement('input', 
            { 
                id: 'symbols', 
                type: "text",
                placeholder: "Символов",
                disabled: true
            }, null),
            React.createElement('h3', null, 'Слов:'),
            React.createElement('input', 
            { 
                id: 'words', 
                type: "text",
                placeholder: "Слов",
                disabled: true
            }, null),
            React.createElement('h3', null, 'Предложений:'),
            React.createElement('input', 
            { 
                id: 'sentence', 
                type: "text",
                placeholder: "Предложений",
                disabled: true
            }, null),
        ),
        React.createElement('div', null,
            React.createElement('h1', null, 'Графики'),
            React.createElement('canvas', { 
                id: 'chart',
            }, null),
        )
    ),
    document.getElementById('root')
)

document.getElementById("button").onclick = buttonClick;

function buttonClick()
{
    //document.getElementById("loader-identity").style.display = "block";
    let word = document.getElementById("input").value;
    let phrase = translitModule.translitWithStats(word);
    let symbols = countProcessor.getSymbolsCount(word);
    let params = countProcessor.getParamsCount(word);
    //document.getElementById("loader-identity").style.display = "none";
    document.getElementById("output").value = phrase.answer;
    document.getElementById("symbols").value = symbols;
    document.getElementById("words").value = params.w;
    document.getElementById("sentence").value = params.s;

    console.log(phrase.retMap.keys());
    console.log(phrase.retMap.values());
    console.log(Array.from(phrase.retMap.keys()));
    console.log(Array.from(phrase.retMap.values()));

    //generate chart
    var ctx = document.getElementById("chart").getContext("2d");
    var chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: Array.from(phrase.retMap.keys()),
            datasets: [{
                label: "Итоговое число букв",
                data: Array.from(phrase.retMap.values()),
                borderWidth: 1,
                backgroundColor: '#333333',
                borderColor: '#333333'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: '#333333'
                }
            }
        }
    });
}