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
$('.jipiao>span').click(function () {
    $(this).addClass('leftr-one-name').siblings().removeClass('leftr-one-name')

})


$('.jipiao>span').click(function () {
    let index = $(this).index()

    $(this).parent().parent().children('div').eq(index).show().siblings('div').hide()

})

// $('.other').click(function () {
//     $(this).parent().parent().addClass('leftr-one-other')

// })
// $('.others').click(function () {
//     $(this).parent().parent().removeClass('leftr-one-other')

// })

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

//wangfan

$('.leftr-one-city>div').hover(function () {
    $(this).addClass('wangfan')
}, function () {
    $(this).removeClass('wangfan')
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

// 机票 下拉
$('.Passenger span').click(function () {
    $('.Passenger-list').toggle()
})


// 机票 人数

$(".Adult .decrease").click(function () {
    // let num = $('.Passenger>span:nth-child(1)').html()
    let num = $(this).next().val()
    num--
    if (num <= 1) {
        num = 1
        $('.Adult .decrease').next().val(num)
        $(".Adult .decrease").addClass('disabled')
    } else if (num < 9) {
        $('.tish').hide()
        $(".Adult .increase").removeClass('disableds')
    }
    $(this).next().val(num)
    let newnum = $(this).next().val()
    $('.Passenger>span:nth-child(1)').html(newnum)
})

$(".Adult .increase").click(function () {

    // var num = +$('.Passenger>span:nth-child(1)').html()
    let num = $(this).prev().val()
    num++
    let Num = +$('.Passenger span:nth-child(2)').html()
    // if (num+Num >= 9) {


    // }
    if (num + Num > 9) {
        num = 9 - Num
        $('.tish').show()
        $('.Adult .increase').prev().val(num)
        $(".Adult .increase").addClass('disableds')
        $(".children .increase").addClass('disableds')

    } else if (num >= 1) {
        $(".Adult .decrease").removeClass('disabled')
    } else {
        $('.tish').hide()
    }
    $(this).prev().val(num)
    let newnum = $(this).prev().val()

    $('.Passenger>span:nth-child(1)').html(newnum)

    // console.log(newnum);

})


$(".children .decrease").click(function () {
    // let num = $('.Passenger>span:nth-child(1)').html()
    let num = $(this).next().val()
    num--
    let Num = +$('.Passenger span:nth-child(1)').html()
    if (num + Num < 9) {
        $('.tish').hide()
    }

    let nums = $('.Adult .increase').prev().val() * 2
    if (num <= 0) {
        num = 0
        $('.children .decrease').next().val(num)
        $(".children .decrease").addClass('disabled')
    } else if (num < nums) {
        $('.tishs').hide()
        $(".children .increase").removeClass('disableds')
    }
    $(this).next().val(num)
    let newnum = $(this).next().val()
    $('.Passenger>span:nth-child(2)').html(newnum)
})

$(".children .increase").click(function () {

    // var num = +$('.Passenger>span:nth-child(1)').html()
    let num = $(this).prev().val()
    num++
    let Num = +$('.Passenger span:nth-child(1)').html()
    if (num + Num > 9) {
        num = 9 - Num
        $('.tish').show()
        // $('.Adult .increase').prev().val(num)
        $(".Adult .increase").addClass('disableds')
        $(".children .increase").addClass('disableds')
    }
    let nums = $('.Adult .increase').prev().val() * 2

    if (num >= nums) {
        // num = nums / 2
        $('.tishs').show()
        $(".Adult .decrease").addClass('disabled')

    }

    if (num >= nums) {

        num = nums
        // num = $('.Adult .increase').prev().val(num)*2
        $('.children .increase').prev().val(num)
        $(".children .increase").addClass('disableds')
    } else if (num > 0) {
        $(".children .decrease").removeClass('disabled')
    }

    $(this).prev().val(num)
    let newnum = $(this).prev().val()
    $('.Passenger>span:nth-child(2)').html(newnum)

    // console.log(newnum);

})


//火车票勾选
$(".setDef").click(function () {
    $(this).toggleClass('setDef-s')
})





//左侧切换

$('.nav-place-leftl li').click(function () {
    $(this).addClass('nav-place-leftl-tap').siblings().removeClass('nav-place-leftl-tap')
    let index = $(this).index()
    $('.nav-place-leftr>li').eq(index).show().siblings().hide()
})