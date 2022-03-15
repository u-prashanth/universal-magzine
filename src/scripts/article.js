import $ from 'jquery';

$( document ).ready(function() {
    renderHeader();
})

function renderHeader()
{
    $('header').append('<div></div')
    $('header > div').addClass('brand-wrapper grid').append('<div></div>')
    $('header > div > div').append('<p>Universal</p>')

    $('header > div > div').append('<div></div>')
    $('header > div > div > div').append('<p>Monday, January 1, 2018</p>').addClass('bw-date')
    $('header > div > div > div > p').addClass('bw-date')

    $('header > div > div > div').append('<p><i class="lni lni-sun"></i>  -23° C</p>').addClass('bw-weather')
    $('header > div > div > div > p').addClass('bw-weather')

    $('header').append('<div class="navigation"></div')
    $('.navigation').append('<nav></nav>')
    $('.navigation > nav').addClass('grid')
    $('.navigation > nav').append('<ul class="header-categories"></ul>')

    let categories = [ "News", "Opinion", "Science", "Life", "Travel", "Moneys", "Art & Design", "Sports", "People", "Health", "Education" ];

    categories.forEach(category => {
        $('.header-categories').append(`<li>${category}</li>`)
    })
}