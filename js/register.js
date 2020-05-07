
    $(".scan_box").on("mouseenter", function () {
        $(this)
            .children(".app_qr_code")
            .animate(
                {
                    marginLeft: "0px",
                },
                500,
                function () {
                    $(".phone_scan").show();
                }
            );
      });
      $(".scan_box").on("mouseleave", function () {
        $(".phone_scan").hide();

        $(".app_qr_code").animate(
          {
        marginLeft: "66px",
          },
          500
        );
      });
      var flags = true;
      $(".switch_corner").click(function () {
        if (flags) {
        $(this).css({
            backgroundPosition: "-10px -120px",
            width: 55,
            height: 55,
        });
          $(".login_app").hide();
          $(".login_con").show();
          flags = false;
        } else {
        $(this).css({
            backgroundPosition: "-10px -120px",
            width: 55,
            height: 55,
        });
          $(".login_app").show();
          $(".login_con").hide();
          flags = true;
        }
      });

      $(".login_app_bottom a:first-child").click(function () {
        $(".switch_corner").css({
            backgroundPosition: "-10px -120px",
            width: 55,
            height: 55,
        });
        $(".login_app").hide();
        $(".login_con").show();
        flags = false;
      });
      let flag = true;
      $(".auto_login").click(function () {
        if (flag) {
        $(this).css("backgroundPosition", "0px -20px");
          flag = false;
        } else {
        $(this).css("backgroundPosition", "0px 0px");
          flag = true;
        }
      });
      $(".zh").click(function () {
        $(this).addClass("at");
        $(".yzm").removeClass("at");
        $(".login_wrapper").show();
        $(".login_wrappers").hide();
      });

      $(".yzm").click(function () {
        $(this).addClass("at");
        $(".zh").removeClass("at");
        $(".login_wrappers").show();
        $(".login_wrapper").hide();
      });

      $("input").focus(function () {
        $(this).css("borderColor", "#8ca3be");
      });
      $("input").blur(function () {
        $(this).css("borderColor", "#ddd");
      });

      // 倒计时
      // 1.获取元素: 按钮
      let oBtn = document.querySelector(".btn");
      // 2.设置倒计时总时间
      let time = 60;
      // 3.设置定时器的名字
      let timer = null;
      // 4.给按钮添加点击事件
      oBtn.onclick = function () {
        // 4.1 按钮就要禁用了
        this.disabled = true;
        // 4.2 开始定时器了
        timer = setInterval(function () {
          // 4.2.1 判断总时间是不是倒计时到0了 如果倒计时到0   停定时器  按钮恢复原状
          if (time <= 0) {
        // 按钮不禁用
        // console.log(this);
        oBtn.disabled = false;
            // 清除定时器
            clearInterval(timer);
            // 按钮恢复原状
            oBtn.innerHTML = "获取验证码";
            // bug解决: 如果为0了 再次点击会不动 复原总的时间
            time = 60;
          } else {
        // 4.2.2 如果没到0 倒计时 递减  还要告诉用户还剩多少秒
        oBtn.innerHTML = `还剩下${time}秒`;
            time--;
          }
        }, 1000);
      };