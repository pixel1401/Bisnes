$(document).ready(function () {

    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })


})

function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}


let newsBtn = document.querySelector('.news-top__row');

newsBtn.addEventListener('click' , function changeBtn (event) {
    let newsTitle = document.querySelectorAll('.news-top__column')
    if (event.target.classList.contains('news-top__column')) {
        let newsColumn = Array.from (document.querySelectorAll('.news-bottom__column'));
        for (let a of newsTitle) {
            if(a.classList.contains('active')) {
                a.classList.remove('active')
            }
        }
        for (let i of document.querySelectorAll('.news-bottom__list li:first-child')) {
            let parentNews = i.closest('div').parentNode.parentNode;
            parentNews.style.display = 'flex'
            
            if (event.target.innerHTML == 'All') {
            }
            
            else if (i.innerHTML === event.target.innerHTML) {
                
            }else {
                parentNews.style.display = 'none';
            }
        }
        event.target.classList.add('active');

    }
})


