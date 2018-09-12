//single.js
$(document).ready(function(){
	
	$(window).on("load resize",function(){
		var ww=$(window).width();
		var hh=$(window).height();
		var beerimghh=$(".beer .beercenter img").height();
		var brehh=$(".bre .breleft").height();
		//console.log(brehh)

		//$(".header").css({"width":ww,"height":hh})
		$("#brevi, .brecenter .breright").css("height",brehh)
		//$(".section .beer .beerbox iframe").css("height",beerimghh)
		
			$(window).scroll(function(){
				if ($(this).scrollTop()>=hh/5 && ww>480)
				{
					$(".fixgnb").slideDown(0);
				} else {
					$(".fixgnb").hide();
				}
			});//scroll header fixed
		
		
		var hh1=$(".header").height();
		var hh2=$(".story").height();
		var hh3=$(".beer").height();
		var hh4=$(".bre").height();
		var hh5=$(".tour").height();
		var hh6=$(".reser").height();
		console.log(hh1,hh2,hh3,hh4,hh5,hh6)

		var docpos=new Array(0,hh1,hh1+hh2,hh1+hh2+hh3,hh1+hh2+hh3+hh4,hh1+hh2+hh3+hh4+hh5,hh1+hh2+hh3+hh4+hh5+hh6);
	
		$(".header .gnb li").click(function(){
			var idx=$(".header .gnb li").index($(this));
			$("html,body").animate({scrollTop:docpos[idx+1]});
		});//header mv

		$(".header .fixgnb li a").click(function(){
			var idx=$(".header .fixgnb li a").index($(this));
			$("html,body").animate({scrollTop:docpos[idx]});
			$(this).addClass("active").parents().siblings().find("a").removeClass("active");
		});//fix header mv and add class

		$(".header #arrow").click(function(){
			$("html,body").animate({scrollTop:docpos[1]});
		});//arrow mv

		$(".mmenu ul li a").click(function(){
			var idx=$(".header .fixgnb li a").index($(this));
			$("html,body").animate({scrollTop:docpos[idx]});
			$(this).addClass("active").parents().siblings().find("a").removeClass("active");
		});//mheader mv and add class

		$(".mmenu ul li a").click(function(){
			var idx=$(".mmenu ul li a").index($(this));
			$("html,body").animate({scrollTop:docpos[idx]});
			$(this).addClass("active").parents().siblings().find("a").removeClass("active");
			$(".mmenu").fadeOut();
			$(".mheader .mline:nth-child(1)").css({"transform":"rotate(0deg)","top":"0px"})
			$(".mheader .mline:nth-child(2)").css("opacity","1")
			$(".mheader .mline:nth-child(3)").css({"transform":"rotate(0deg)","top":"0px"})
		});//m menu mv and add class

		$(".pagi .pbar").click(function(){
			var idxp=$(".pagi .pbar").index($(this));
			$("html,body").animate({scrollTop:docpos[idxp]});
			$(this).addClass("activePagi").siblings().removeClass("activePagi");
		});//pagination mv and add class

		$(".section .bre #tourbtn").click(function(){
			$("html,body").animate({scrollTop:docpos[5]});
		});

	

		$(window).scroll(function(){
			if ($(this).scrollTop()>=hh1+hh2+hh3+hh4+hh5+hh6)
			{
				$(".header .fixgnb li a").eq(6).addClass("active").parents().siblings().find("a").removeClass("active");
				$(".mmenu ul li a").eq(6).addClass("active2").parents().siblings().find("a").removeClass("active2");
				$(".pagi .pbar").eq(6).addClass("activePagi").siblings().removeClass("activePagi");
				$("#scrollmv option").html("CONTACT US");
			} else if ($(this).scrollTop()>=hh1+hh2+hh3+hh4+hh5)
			{
				$(".header .fixgnb li a").eq(5).addClass("active").parents().siblings().find("a").removeClass("active");
				$(".mmenu ul li a").eq(5).addClass("active2").parents().siblings().find("a").removeClass("active2");
				$(".pagi .pbar").eq(5).addClass("activePagi").siblings().removeClass("activePagi");
				$("#scrollmv option").html("RESEVATION");
			} else if ($(this).scrollTop()>=hh1+hh2+hh3+hh4)
			{
				$(".header .fixgnb li a").eq(4).addClass("active").parents().siblings().find("a").removeClass("active");
				$(".mmenu ul li a").eq(4).addClass("active2").parents().siblings().find("a").removeClass("active2");
				$(".pagi .pbar").eq(4).addClass("activePagi").siblings().removeClass("activePagi");
				$("#scrollmv option").html("TOUR");
			} else if ($(this).scrollTop()>=hh1+hh2+hh3)
			{
				$(".header .fixgnb li a").eq(3).addClass("active").parents().siblings().find("a").removeClass("active");
				$(".mmenu ul li a").eq(3).addClass("active2").parents().siblings().find("a").removeClass("active2");
				$(".pagi .pbar").eq(3).addClass("activePagi").siblings().removeClass("activePagi");
				$("#scrollmv option").html("BREWERY");
			} else if ($(this).scrollTop()>=hh1+hh2)
			{
				$(".header .fixgnb li a").eq(2).addClass("active").parents().siblings().find("a").removeClass("active");
				$(".mmenu ul li a").eq(2).addClass("active2").parents().siblings().find("a").removeClass("active2");
				$(".pagi .pbar").eq(2).addClass("activePagi").siblings().removeClass("activePagi");
				$("#scrollmv option").html("JEJU BEER");
			} else if ($(this).scrollTop()>=hh1)
			{
				$(".header .fixgnb li a").eq(1).addClass("active").parents().siblings().find("a").removeClass("active");
				$(".mmenu ul li a").eq(1).addClass("active2").parents().siblings().find("a").removeClass("active2");
				$(".pagi .pbar").eq(1).addClass("activePagi").siblings().removeClass("activePagi");
				$("#scrollmv option").html("STORY");
			} else if ($(this).scrollTop()<hh1)
			{
				$(".header .fixgnb li a").eq(0).addClass("active").parents().siblings().find("a").removeClass("active");
				$(".mmenu ul li a").eq(0).addClass("active2").parents().siblings().find("a").removeClass("active2");
				$(".pagi .pbar").eq(0).addClass("activePagi").siblings().removeClass("activePagi");
				$("#scrollmv option").html("MAIN");
			}
		});


		$(window).scroll(function(){
			if ($(this).scrollTop()>=hh1+hh2+hh3+hh4+hh5+hh6/5)
			{
				$(".section .contact .parallax").css({"opacity":1,"transition":"0.8s","bottom":0});
			} else if ($(this).scrollTop()>=hh1+hh2+hh3+hh4+hh5/1.3)
			{
				$(".section .reser .reserwrap").css({"opacity":1,"transition":"0.8s","bottom":0});
			} else if ($(this).scrollTop()>=hh1+hh2+hh3+hh4/1.6)
			{
				$(".section .tour .tourwrap").css({"opacity":1,"transition":"0.8s","bottom":0});
			} else if ($(this).scrollTop()>=hh1+hh2+hh3/1.3)
			{
				$(".section .bre .brewrap").css({"opacity":1,"transition":"0.8s","bottom":0});
			} else if ($(this).scrollTop()>=hh1+hh2/2)
			{
				$(".section .beer .beerwrap").css({"opacity":1,"transition":"0.8s","bottom":0});
			} else if ($(this).scrollTop()>=hh1/1.5)
			{
				$(".section .story .storywrap").css({"opacity":1,"transition":"0.8s","bottom":0});	
			}
		});//content opacity

	});//load resize

	$("li a").click(function(){
		event.preventDefault();
	});


// mobile menu -----------------------------------------------------------------------------------
		$(".mheader").click(function(){
			if ($(".mmenu").css("display")==("none"))
			{	
				$(".mheader .mline:nth-child(1)").css({"transform":"rotate(45deg)","top":"10px"})
				$(".mheader .mline:nth-child(2)").css("opacity","0")
				$(".mheader .mline:nth-child(3)").css({"transform":"rotate(-45deg)","top":"-9px"})
				//$(".mmenu").show();
			} else {
				$(".mheader .mline:nth-child(1)").css({"transform":"rotate(0deg)","top":"0px"})
				$(".mheader .mline:nth-child(2)").css("opacity","1")
				$(".mheader .mline:nth-child(3)").css({"transform":"rotate(0deg)","top":"0px"})
				//$(".mmenu").hide();
			}
			 $(".mmenu").toggle();
		});//
/*
$(".mheader").click(function(){
    
  });//
*/

// bre slide -----------------------------------------------------------------------------------
	var brepg=0;
	var brebw=$(".breleft .container .slider .item").width();
	var brebc=$(".breleft .container .slider .item").length;

	function bremv(){
		$(".breleft .container .slider").animate({"left":-brebw*brepg},200);
	};
		$(".breleft .container .prevbtn").click(function(){
		if (brepg>0)
		{
			brepg--
		} else{
			brepg=brebc-1
		};
		bremv();
	});//breleft slide
	$(".breleft .container .nextbtn").click(function(){
		if (brebc-1>brepg)
		{
			brepg++
		} else{
			brepg=0
		};
		bremv();
	});//breleft slide


// tour left slide -----------------------------------------------------------------------------------
	var tlpg=0;
	var tlbw=$(".tourleft .container .slider .item").width();
	var tlbc=$(".tourleft .container .slider .item").length;

	function tlmv(){
		$(".tourleft .container .slider").animate({"left":-tlbw*tlpg},250);
	};

	$(".tourleft .container .prevbtn").click(function(){
		if (tlpg>0)
		{
			tlpg--
		} else{
			tlpg=tlbc-1
		};
		tlmv();
	});
	$(".tourleft .container .nextbtn").click(function(){
		if (tlbc-1>tlpg)
		{
			tlpg++
		} else{
			tlpg=0
		};
		tlmv();
	});

// tour center slide -----------------------------------------------------------------------------------
	var tcpg=0;
	var tcbw=$(".tourcenter .container .slider .item").width();
	var tcbc=$(".tourcenter .container .slider .item").length;

	function tcmv(){
		$(".tourcenter .container .slider").animate({"left":-tcbw*tcpg},250);
	};

	$(".tourcenter .container .prevbtn").click(function(){
		if (tcpg>0)
		{
			tcpg--
		} else{
			tcpg=tcbc-1
		};
		tcmv();
	});
	$(".tourcenter .container .nextbtn").click(function(){
		if (tcbc-1>tcpg)
		{
			tcpg++
		} else{
			tcpg=0
		};
		tcmv();
	});

// tour right slide -----------------------------------------------------------------------------------
	var trpg=0;
	var trbw=$(".tourright .container .slider .item").width();
	var trbc=$(".tourright .container .slider .item").length;

	function trmv(){
		$(".tourright .container .slider").animate({"left":-trbw*trpg},250);
	};

	$(".tourright .container .prevbtn").click(function(){
		if (trpg>0)
		{
			trpg--
		} else{
			trpg=trbc-1
		};
		trmv();
	});
	$(".tourright .container .nextbtn").click(function(){
		if (trbc-1>trpg)
		{
			trpg++
		} else{
			trpg=0
		};
		trmv();
	});

// FAQ acco -----------------------------------------------------------------------------------	
	$(".reser .reright .acco dd:first").show();
	$(".reser .reright .acco dt").click(function(){
		if ($(this).next().css("display")==("none"))
		{
			$(".reser .reright .acco dd").slideUp();
			$(".reser .reright .acco dt span").text("+");
			$(this).find("span").text("-")
			$(this).next().slideDown();
			$(".reser .reright .acco dt").removeClass("activeacco");
			$(".reser .reright .acco dd").removeClass("activeacco");
			$(this).addClass("activeacco");
			$(this).next().addClass("activeacco");
			
		} else {
			$(this).find("span").text("+")
			$(this).next().slideUp();
			$(this).removeClass("activeacco");
			$(this).next().removeClass("activeacco");
		}
	});//acco menu 


// CONTACT US naver map -----------------------------------------------------------------------------------	
	  var map = new naver.maps.Map('map', {
        scaleControl: false,
        logoControl: false,
        mapDataControl: false,
        zoomControl: true,
        minZoom: 1
    });
      var myaddress = ' 금능농공길 62-11';// 도로명 주소나 지번 주소만 가능 (건물명 불가!!!!)
      naver.maps.Service.geocode({address: myaddress}, function(status, response) {
          if (status !== naver.maps.Service.Status.OK) {
              return alert(myaddress + '의 검색 결과가 없거나 기타 네트워크 에러');
          }
          var result = response.result;
          // 검색 결과 갯수: result.total
          // 첫번째 결과 결과 주소: result.items[0].address
          // 첫번째 검색 결과 좌표: result.items[0].point.y, result.items[0].point.x
          var myaddr = new naver.maps.Point(result.items[0].point.x, result.items[0].point.y);
          map.setCenter(myaddr); // 검색된 좌표로 지도 이동
          // 마커 표시
          var marker = new naver.maps.Marker({
            position: myaddr,
            map: map
          });
          // 마커 클릭 이벤트 처리
          naver.maps.Event.addListener(marker, "click", function(e) {
            if (infowindow.getMap()) {
                infowindow.close();
            } else {
                infowindow.open(map, marker);
            }
          });
          // 마크 클릭시 인포윈도우 오픈
          var infowindow = new naver.maps.InfoWindow({
              content: '<h4> [JEJU BEER COMPANY]</h4><p>제주시 한림읍 금능농공길 62-11</p><a href="https://jejubeer.co.kr" target="_blank"><img src="imgs/6contact/logo.png"></a>'
          });
      });//naver map

});//doc


/*
1. 준비
	메뉴의 각 항목을 클릭했을 때 문서가 이동할 수직위치 숫자를
	배열에 저장(배열이름 docpos)
2. 메뉴 클릭 이벤트(.nav a)
	1) 클릭한 a 태그의 내부번호(index)를 찾아 변수 저장 (idx)
	2) html과 body가 배열번호를 idx와 맞추어 해당 방 번호의
	숫자만큼 애니메이트
	3) 메뉴의 빨간색 부분의 이미지가 보이도록 한 액티브 클래스를 적용
	4) a 태그의 링크 속성을 제거

3. 메뉴 중 로고 클릭 시 런처플래닛이 클릭된 것 처럼 빨간색 표기
	.nav a 중에서 로고의 내부번호 0번이 클릭되면
	트리거 메서드를 이용해 .nav a 중에서 런처플래닛 번호인
	1이 트리거되어 빨간색으로 보이게 함

4. 에스카드2의 빨간색 화살표를 클릭하면
	html, body가 해당위치까지 움직이도록 코딩(70+700+700)

5. 윈도개체의 스크롤바의 탑 위치를 찾아
	700보다 작으면 메뉴 중 내부번호 1이 빨간색으로,
	770 이상이고 2170보다 작으면 메뉴 중 내부번호 2가 빨간색으로,
	2170 이상이면 메뉴 중 내부번호 3이 빨간색으로 보이게 함
	==> if문은 큰 것부터 쓴다
*/