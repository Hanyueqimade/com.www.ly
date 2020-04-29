// 头部·下拉

$('#language').hover(function () {
    $('#language div').stop().slideDown(100)
}, function () {
    $('#language div').stop().slideUp(100)
})

$('#city').hover(function () {
    $('#city div').stop().slideDown(100)
}, function () {
    $('#city div').stop().slideUp(100)
})

$('#service').hover(function () {
    $('#service div').stop().slideDown(100)
}, function () {
    $('#service div').stop().slideUp(100)
})

$('#cooperation').hover(function () {
    $('#cooperation div').stop().slideDown(100)
}, function () {
    $('#cooperation div').stop().slideUp(100)
})


$('#phone').hover(function () {
    $('#phone div').stop().slideDown(100)
}, function () {
    $('#phone div').stop().slideUp(100)
})

$('#Wechat').hover(function () {
    $('#Wechat div').stop().slideDown(100)
}, function () {
    $('#Wechat div').stop().slideUp(100)
})

//search-nav 


//搜索
$('.search-right input').on('focus', function () {
    $(this).removeAttr('placeholder')
    $('.adress').hide()
    $('.hot-search').show()

})
$('.search-right input').on('blur', function () {
    $(this).attr('placeholder', '请输入目的地/景点/酒店等')
    $('.adress').show()
    $('.hot-search').hide()
})

$('.search-xia').mouseover(function () {
    $('.recom-city').show()


})

$('.search-xia').mouseleave(function () {
    $('.recom-city').hide()

})

$('.recom-city').mouseleave(function () {
    $('.recom-city').hide()

})


$('.rcc-ban li').on('click', function () {
    $(this).addClass('rcc-at ').siblings().removeClass('rcc-at')
    let index = $(this).index()
    $('.recom-city>div').eq(index).removeClass('none').siblings().addClass('none')
})


$(('.nav-class-first li')).hover(function () {
    $(this).find('div').stop().fadeIn(100)
    $(this).find('b').stop().fadeIn(100)
}, function () {
    $(this).find('div').stop().fadeOut(100)
    $(this).find('b').stop().fadeOut(100)
})

// 搜索关键字
$('.sousuo input').on('focus', function () {
    $(this).removeAttr('placeholder')

})
$('.sousuo input').on('blur', function () {
    $(this).attr('placeholder', '请输入关键词，如：找回密码')
})

$('.main-left>ul>li').click(function () {
    $(this).children('ul').toggleClass().prev().toggleClass('jiacu').prev().toggleClass('daoli')

})


// tap切换
$('.main-right-top-tap>li').click(function () {
    let index = $(this).index()
    $(this).addClass('col').siblings().removeClass('col')
    $(".main-right-top-taps>li").eq(index).show().siblings().hide()
})



$(".main-right-center li>div").hover(function () {
    $(this).find('img').eq(0).hide()
    $(this).find('img').eq(1).show()
}, function () {
    $(this).find('img').eq(1).hide()
    $(this).find('img').eq(0).show()
})




$(document).scroll(function () {
    if ($(document).scrollTop() >= $('.nav-class').offset().top) {
        $('.a-g').show()
    } else {
        $('.a-g').hide()
    }
})


$(".back,.a-g").click(function () {

    let timer = setInterval(function () {
        let x = $(document).scrollTop() - 100
        $(document).scrollTop(x)
        if (x <= 0) {
            clearInterval(timer)
        }
    }, 10)

})