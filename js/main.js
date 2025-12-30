$(function(){
    let pageof = $('.carsharing').offset().top

    $(window).resize(function(){
    pageof = $('.carsharing').offset().top

    })

    $(window).scroll(function(){


        let sc = $(window).scrollTop() >= pageof
        $('.fixed').toggleClass('on', sc)
    })




    // 메뉴 햄버거
    $('.fixed .headerwrap .burger').click(function(){
        $('.navbox').toggleClass('hm')
        $('.burger').toggle()
        $('body').toggleClass('fix')
    })

    $('.close img').click(function(){
        $('.navbox').removeClass('hm')
        $('.burger').show()
        $('body').removeClass('fix')
    })

    
})