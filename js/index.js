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




// nav-place 第三部分

// 机票切换
$('.jipiao span').click(function () {
    $(this).addClass('leftr-one-name').siblings().removeClass('leftr-one-name')
    $(this).find('i').addClass('leftr-one-gre')
    $(this).find('i').parent().siblings().find('i').removeClass('leftr-one-gre')
    // console.log($(this).find('i').parent().siblings().find('i'));
})

// $('.jipiao span').hover(function () {
//     $(this).css({
//         'color': '#ff5d3d',
//         "zIndex": 1
//     })
// }, function () {
//     $(this).siblings().css({
//         'color': '#666666',
//         // "zIndex": 1
//     })
// })

$('.jipiao span:nth-child(1)').click(function () {
    $('.leftr-one-domestic').show()
    $('.leftr-one-international').hide()
})

$('.jipiao span:nth-child(2)').click(function () {
    $('.leftr-one-domestic').hide()
    $('.leftr-one-international').show()
    $('.leftr-one').css({
        'height': '410px',
        'backgroundColor': 'white',
        'zIndex': '2'
    })

})

// 小圆点选择切换
$('.leftr-one-Choice s').click(function () {
    $(this).addClass('choice-but').parent().parent().siblings('dd').find('s').removeClass('choice-but')
})
$('.leftr-one-Choice span').click(function () {
    $(this).prev().addClass('choice-but').parent().parent().siblings('dd').find('s').removeClass('choice-but')

})

$('.leftr-one-domestic .return').click(function () {
    $('.leftr-one-date').show()
    $('.lone p').css('color', '#666666')
})

$('.leftr-one-domestic .second').click(function () {
    $('.leftr-one-date').show()
    $('.lone p').css('color', '#666666')
})

$('.leftr-one-domestic .dancheng').click(function () {
    $('.lone').hide()
})
$('.leftr-one-domestic .first').click(function () {
    $('.lone').hide()
})

$('.leftr-one-international .dancheng').click(function () {
    $('.pcol p').css('color', '#cccccc')
})
$('.leftr-one-international .first').click(function () {
    $('.pcol p').css('color', '#cccccc')
})

$('.leftr-one-international .return').click(function () {
    // $('.leftr-one-date').show()
    $('.pcol p').css('color', '#666666')
})

$('.leftr-one-international .second').click(function () {
    // $('.leftr-one-date').show()
    $('.pcol p').css('color', '#666666')
})


// 机票舱位等级

$('.cabintype').click(function () {
    $('.cabintype_list').toggle()
    $(this).find('em').toggleClass('cabintype-shang')

})

$('.cabintype_list li').click(function () {
    let content = $(this).html()
    $('.cabintype span').html(content)
})







