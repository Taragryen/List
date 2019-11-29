$(window).on("load",function(){
  let key =sessionStorage.key('loginUserEmail')
  // let loginUserEmail = sessionStorage.getItem(key)
  let loginUserEmail = '2429747506@qq.com'
  // let loginUserEmail = '20172005046@m.scnu.edu.cn'
  if(loginUserEmail)
  {
    this.flash()
    this.AllFinished()
  }
  else
  {
    alert("请登录后再访问~")
    window.location.href = "login.html"
  } 
})

$("#addbtn").click(function(){
  let key =sessionStorage.key('loginUserEmail')
  // let loginUserEmail = sessionStorage.getItem(key)
  let loginUserEmail = '2429747506@qq.com'
  var title = $("#title").val()
  var hour = $("#hour").val()
  var minute = $("#minute").val()
  var time = hour*100 + minute*1
  var detail = $("#detail").val()
  if(title.length == 0)
  {
    alert("请输入标题~")
    $("#title").focus()
    return
  }
  if(hour.length == 0)
  {
    alert("请输入时间~")
    $("#hour").focus()
    return
  }
  if(minute.length == 0)
  {
    alert("请输入时间~")
    $("#minute").focus()
    return
  }
  if(detail.length == 0)
  {
    alert("请输入描述~")
    $("#detail").focus()
    return
  }
  $.ajax({
    method: 'POST',
    // url: 'http://ricardo.applinzi.com/add',
    url: 'http://127.0.0.1:5050/user/add',
    data: `title=${title}&time=${time}&detail=${detail}&email=${loginUserEmail}`,
    success:function(data,msg,xhr)
    {
      console.log('异步请求添加API成功：')
      alert(data.msg)
      $("#title").val("")
      $("#detail").val("")
      $("#hour").val("")
      $("#minute").val("")
      flash()
    },
    error:function(xhr,err)
    {
      console.log('异步请求登录API失败：')
      alert(err)
    }
  })
})


function setDataActive()
{
  const elBackgrounds = Array.from(document.querySelectorAll(".background"));
  const elArticles = Array.from(document.querySelectorAll(".article"));
  const bg = elBackgrounds[0]
  const art = elArticles[0]
  bg.setAttribute("data-active", true)
  art.setAttribute("data-active", true)

  const elBackgrounds2 = Array.from(document.querySelectorAll(".background2"));
  const elArticles2 = Array.from(document.querySelectorAll(".article2"));
  const bg2 = elBackgrounds2[0]
  const art2 = elArticles2[0]
  bg2.setAttribute("data-active", true)
  art2.setAttribute("data-active", true)

  const elBackgrounds3 = Array.from(document.querySelectorAll(".background3"));
  const elArticles3 = Array.from(document.querySelectorAll(".article3"));
  const bg3 = elBackgrounds3[0]
  const art3 = elArticles3[0]
  bg3.setAttribute("data-active", true)
  art3.setAttribute("data-active", true)
}

function flash()
{
  let key =sessionStorage.key('loginUserEmail')
  // let loginUserEmail = sessionStorage.getItem(key)
  let loginUserEmail = '2429747506@qq.com'
  // let loginUserEmail = '20172005046@m.scnu.edu.cn'
  $.ajax({
    method: 'get',
    url: 'http://127.0.0.1:5050/user/list',
    data: `email=${loginUserEmail}`,
    success:function(data,msg,xhr)
    {
      console.log('异步请求信息API成功：')
      if(data.length != 0)
      {
        let strm1 = ''
        let stra1 = ''
        let stre1 = ''
        let strm2 = ''
        let stra2 = ''
        let stre2 = ''
        let stra3 = `<div
                        class="background2"  
                        style="--primary: var(--orange); --secondary: var(--pink)">
                     </div>`
        let stre3 = `<div
                        class="background3"  
                        style="--primary: var(--deep-blue); --secondary: var(--deeper-blue)">
                     </div>`
        let strm3 = `<div
                        class="background"  
                        style="--primary: var(--green); --secondary: var(--cyan)">
                     </div>`
        let m = 0
        let a = 0
        let e = 0
        for(var i=0;i<data.length;i++)
        {
          if(data.list[i].time >= 600 && data.list[i].time < 1200)
          {
            m++
            strm1 += strm3
            strm2 += `<article class="article">
                        <header>
                          <h1>${data.list[i].time}</h1>
                          <h1>${data.list[i].title}</h1>
                        </header>
                        <p>${data.list[i].detail}</p>
                        <p style="display:none">${data.list[i].pid}</p>
                        <button type="button" class="finished" onclick="finished(${data.list[i].pid})">
                          <svg t="1574763739071" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2091" width="32" height="32"><path d="M12.8 512c0 275.2512 223.9488 499.2 499.2 499.2s499.2-223.9488 499.2-499.2a502.1184 502.1184 0 0 0-282.88-449.9968 38.4 38.4 0 1 0-33.28 69.2224A424.96 424.96 0 0 1 934.4 512c0 232.9088-189.4912 422.4-422.4 422.4S89.6 744.9088 89.6 512 279.0912 89.6 512 89.6a38.4 38.4 0 0 0 0-76.8C236.7488 12.8 12.8 236.7488 12.8 512z" fill="#ffffff" p-id="2092"></path><path d="M285.7472 466.7392a38.4 38.4 0 1 0-54.3232 54.3232l180.992 180.992a38.2976 38.2976 0 0 0 54.272 0l325.8368-325.7856a38.4 38.4 0 1 0-54.3232-54.3232l-298.7008 298.6496-153.7536-153.856z" fill="#ffffff" p-id="2093"></path></svg>
                        </button>
                      </article>`
            
          }
          if(data.list[i].time >= 1200 && data.list[i].time < 1800)
          {
            a++
            stra1 += stra3
            stra2 += `<article class="article2">
                        <header>
                          <h1>${data.list[i].time}</h1>
                          <h1>${data.list[i].title}</h1>
                        </header>
                        <p>${data.list[i].detail}</p>
                        <p style="display:none">${data.list[i].pid}</p>
                        <button type="button" class="finished" onclick="finished(${data.list[i].pid})">
                          <svg t="1574763739071" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2091" width="32" height="32"><path d="M12.8 512c0 275.2512 223.9488 499.2 499.2 499.2s499.2-223.9488 499.2-499.2a502.1184 502.1184 0 0 0-282.88-449.9968 38.4 38.4 0 1 0-33.28 69.2224A424.96 424.96 0 0 1 934.4 512c0 232.9088-189.4912 422.4-422.4 422.4S89.6 744.9088 89.6 512 279.0912 89.6 512 89.6a38.4 38.4 0 0 0 0-76.8C236.7488 12.8 12.8 236.7488 12.8 512z" fill="#ffffff" p-id="2092"></path><path d="M285.7472 466.7392a38.4 38.4 0 1 0-54.3232 54.3232l180.992 180.992a38.2976 38.2976 0 0 0 54.272 0l325.8368-325.7856a38.4 38.4 0 1 0-54.3232-54.3232l-298.7008 298.6496-153.7536-153.856z" fill="#ffffff" p-id="2093"></path></svg>
                        </button>
                      </article>`
          }
          if(data.list[i].time >= 1800 && data.list[i].time < 2400)
          {
            e++
            stre1 +=stre3
            stre2 += `<article class="article3">
                        <header>
                          <h1>${data.list[i].time}</h1>
                          <h1>${data.list[i].title}</h1>
                        </header>
                        <p>${data.list[i].detail}</p>
                        <p style="display:none">${data.list[i].pid}</p>
                        <button type="button" class="finished" onclick="finished(${data.list[i].pid})">
                          <svg t="1574763739071" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2091" width="32" height="32"><path d="M12.8 512c0 275.2512 223.9488 499.2 499.2 499.2s499.2-223.9488 499.2-499.2a502.1184 502.1184 0 0 0-282.88-449.9968 38.4 38.4 0 1 0-33.28 69.2224A424.96 424.96 0 0 1 934.4 512c0 232.9088-189.4912 422.4-422.4 422.4S89.6 744.9088 89.6 512 279.0912 89.6 512 89.6a38.4 38.4 0 0 0 0-76.8C236.7488 12.8 12.8 236.7488 12.8 512z" fill="#ffffff" p-id="2092"></path><path d="M285.7472 466.7392a38.4 38.4 0 1 0-54.3232 54.3232l180.992 180.992a38.2976 38.2976 0 0 0 54.272 0l325.8368-325.7856a38.4 38.4 0 1 0-54.3232-54.3232l-298.7008 298.6496-153.7536-153.856z" fill="#ffffff" p-id="2093"></path></svg>                        </button>
                      </article>`
          }
        }
        if(m>0)
        {
          $("#app-section1").html(strm1)
          $("#app-section2").html(strm2)
        }
        else
        {
          let strm4 = `<article class="article">
                        <header>
                          <h1>上午</h1>
                          <h1>清单</h1>
                        </header>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos corporis dolor.</p>
                      </article>`
          $("#app-section1").html(strm3)
          $("#app-section2").html(strm4)
        }
        if(a>0)
        {
          $("#app2-section1").html(stra1)
          $("#app2-section2").html(stra2)
        }
        else
        {
          let stra4 = `<article class="article2">
                        <header>
                          <h1>下午</h1>
                          <h1>清单</h1>
                        </header>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos corporis dolor.</p>
                      </article>`
          $("#app2-section1").html(stra3)
          $("#app2-section2").html(stra4)
        }
        if(e>0)
        {
          $("#app3-section1").html(stre1)
          $("#app3-section2").html(stre2)
        }
        else
        {
          let stre4 = `<article class="article3">
                        <header>
                          <h1>晚上</h1>
                          <h1>清单</h1>
                        </header>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos corporis dolor.</p>
                      </article>`
          $("#app3-section1").html(stre3)
          $("#app3-section2").html(stre4)
        }
        setDataActive()
        clickNext()
      }
    }
  })
}


function clickNext()
{
  //实现卡片点击
  const elApp = document.querySelector("#app");
  const elApp2 = document.querySelector("#app2");
  const elApp3 = document.querySelector("#app3");
  const elBackgrounds = Array.from(document.querySelectorAll(".background"));
  const elBackgrounds2 = Array.from(document.querySelectorAll(".background2"));
  const elBackgrounds3 = Array.from(document.querySelectorAll(".background3"));
  const elArticles = Array.from(document.querySelectorAll(".article"));
  const elArticles2 = Array.from(document.querySelectorAll(".article2"));
  const elArticles3 = Array.from(document.querySelectorAll(".article3"));

  elArticles.forEach(article => {
    article.addEventListener("click", e => {
      const index = elArticles.indexOf(article);
      const bg = elBackgrounds[index];
      
      // Remove all data-active
      elApp.querySelectorAll("[data-active]").forEach(el => {
        el.removeAttribute("data-active");
      });
      
      article.setAttribute("data-active", true);
      bg.setAttribute('data-active', true);
    });
  });

  elArticles2.forEach(article2 => {
    article2.addEventListener("click", e => {
      const index = elArticles2.indexOf(article2);
      const bg = elBackgrounds2[index];
      
      // Remove all data-active
      elApp2.querySelectorAll("[data-active]").forEach(el => {
        el.removeAttribute("data-active");
      });
      
      article2.setAttribute("data-active", true);
      bg.setAttribute('data-active', true);
    });
  });

  elArticles3.forEach(article3 => {
    article3.addEventListener("click", e => {
      const index = elArticles3.indexOf(article3);
      const bg = elBackgrounds3[index];
      
      // Remove all data-active
      elApp3.querySelectorAll("[data-active]").forEach(el => {
        el.removeAttribute("data-active");
      });
      
      article3.setAttribute("data-active", true);
      bg.setAttribute('data-active', true);
    });
  });
}

$(".show-btn").click(function(){
  $(".sm-menu").fadeToggle("fast")
})

$("#add-btn").click(function(){
  $(".modal").fadeIn("fast")
})

$(".close").click(function(){
  $(".modal").fadeOut("fast")
})

function finished(pid)
{
  $.ajax({
    method: 'GET',
    url: 'http://127.0.0.1:5050/user/finished',
    data: `pid=${pid}`,
    success:function(data,msg,xhr)
    {
      console.log('异步请求完成API成功：')
      alert(data.msg)
      flash()
      AllFinished()
    },
    error:function(xhr,err)
    {
      console.log('异步请求完成API失败：')
      alert(err)
    }
  })
}

function unfinished(pid)
{
  $.ajax({
    method: 'GET',
    url: 'http://127.0.0.1:5050/user/unfinished',
    data: `pid=${pid}`,
    success:function(data,msg,xhr)
    {
      console.log('异步请求未完成API成功：')
      alert(data.msg)
      flash()
      AllFinished()
    },
    error:function(xhr,err)
    {
      console.log('异步请求未完成API失败：')
      alert(err)
    }
  })
}

function AllFinished()
{
  let key =sessionStorage.key('loginUserEmail')
  // let loginUserEmail = sessionStorage.getItem(key)
  let loginUserEmail = '2429747506@qq.com'
  // let loginUserEmail = '20172005046@m.scnu.edu.cn
  $.ajax({
    method: 'GET',
    url: 'http://127.0.0.1:5050/user/allfinished',
    data: `email=${loginUserEmail}`,
    success:function(data,msg,xhr)
    {
      if(data.length!=0)
      {
        let str = ''
        console.log('异步请求已完成列表API成功：')
        for(var i=0;i<data.length;i++)
        {
          str += `<div class="task" style="vertical-align: middle;text-align: center;margin-top: 10px;">
                    <span style="font-size: 25px;">${data.list[i].time}</span>
                    <span style="font-size: 25px;">${data.list[i].title}</span>
                    <button type="button" class="unfinished" onclick="unfinished(${data.list[i].pid})">
                      <svg t="1574763702056" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1146" width="32" height="32"><path d="M683.1 328.1c16 16 16 41.9 0 57.9L375.8 693.3c-16 16-41.9 16-57.9 0s-16-41.9 0-57.9l307.2-307.2c16-16.1 42-16.1 58-0.1z" fill="#ffffff" p-id="1147"></path><path d="M683.1 693.3c-16 16-41.9 16-57.9 0L317.9 386.1c-16-16-16-41.9 0-57.9s41.9-16 57.9 0L683 635.4c16 16 16 41.9 0.1 57.9z" fill="#ffffff" p-id="1148"></path><path d="M108.5 687.4m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z" fill="#ffffff" p-id="1149"></path><path d="M253.6 862.6m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z" fill="#ffffff" p-id="1150"></path><path d="M499.2 42.6C239.9 42.6 29.8 252.7 29.8 512c0 69 14.9 134.6 41.7 193.6l74.2-35.4C124.1 621.8 112 568.3 112 512c0-213.8 173.3-387.2 387.2-387.2S886.3 298.1 886.3 512 713 899.1 499.2 899.1c-81.9 0-157.9-25.4-220.4-68.8l-51.2 57.2c1.5 0.7 2.5 2.1 2.5 3.6s0.3 3.2-1.2 3.9c76.7 54.5 169.2 86.2 270.4 86.2 259.2 0 469.4-210.1 469.4-469.4S758.4 42.6 499.2 42.6z" fill="#ffffff" p-id="1151"></path></svg>
                    </button>
                  </div>`
        }
        $(".completed").html(str)
        $(".badge").text(data.length)
      }
      
    },
    error:function(xhr,err)
    {
      console.log('异步请求已完成列表API失败：')
      alert(err)
    }
  })
}