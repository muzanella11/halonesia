var enem = (function ($) {
    
    var enemProjectName = 'halonesia',
        enemTestElement = '<div class="enem_test_element" style="position:fixed; color:white; z-index:9999; bottom:0; right:0; background:tomato; padding:8px 15px;"></div>';
  
	var bismillah = function() {
        console.log('alhamdulillah');
    }
    
    var uhuy = function() {
		console.log('hello :)');
	}
    
    var smoothScroll = function () {
        var $window = $(window);		//Window object
//        var $window = $('body');
		
		var scrollTime = .7;			//Scroll time
		var scrollDistance = 170;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
			
		$window.on("mousewheel DOMMouseScroll", function(event){
			
			//event.preventDefault();	
											
			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
			var scrollTop = $window.scrollTop();
			var finalScroll = scrollTop - parseInt(delta*scrollDistance);
				
			TweenMax.to($window, scrollTime, {
				scrollTo : { y: finalScroll, autoKill:true },
					ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
					autoKill: true,
					overwrite: 5							
				});
						
		});
    }
    
    var normalSlide = function () {
        var enem_width = '100%',
            enem_height = '100%',
            enem_slideJssor = $('.enem_slide div');
        
        var en = enem_slideJssor.attr('u');
        
        $('.enem_slide').css({
            'position' : 'relative',
            'width' : enem_width,
            'height' : enem_height,
        });
        
        if(en === 'slides') {
            en.css({
                'position' : 'relative'
            });
        }
    }
    
    var detectImage = function () {
        var image = $('.enem_detect img'),
            imageWidth = image.width(),
            imageHeight = image.height();
        if(imageWidth > imageHeight) {
            image.css({
//                'width' : '100%',
//                'height' : '100%',
                'width' : '100%',
                'height' : 'auto'
            });
        } else {
            image.css({
//                'height' : '100%',
                'height' : 'auto',
            });
        }
    }
    
    var progressBar = function () {
        $.ajax({
          xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            //Upload progress
            xhr.upload.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total;
                //Do something with upload progress
                console.log(percentComplete);
              }
            }, false);
            //Download progress
            xhr.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total;
                //Do something with download progress
                console.log(percentComplete);
              }
            }, false);
            return xhr;
          },
          type: 'POST',
          url: "/",
          data: {},
          success: function(data){
            //Do something success-ish
          }
        });
    }
    
    var enemSecret = function() {
        enem_secret = '68a7998c07429dead3debb730cf0f17c'; 
        return enem_secret;
    }
    
    var enemDownload = function(elem) {
        var fileName = enemGetLinkDownload(elem);
        fpost.filename.value = fileName;
        fpost.submit();
        
        function enemGetLinkDownloadImage(elem) {
            var link = elem.attr('src');
            return link;
        }
    }
    
    var enemVideoHome = function() {

        // The API will call this function when the page has finished downloading the JavaScript for the player API
        function onYouTubePlayerAPIReady() {

            // Initialise the fancyBox after the DOM is loaded
            $(".fancybox")
            .attr('rel', 'gallery')
            .fancybox({
                openEffect  : 'none',
                closeEffect : 'none',
                nextEffect  : 'none',
                prevEffect  : 'none',
                padding     : 0,
                margin      : 50,
                beforeShow  : function() {
                    // Find the iframe ID
                    var id = $.fancybox.inner.find('iframe').attr('id');

                    // Create video player object and add event listeners
                    var player = new YT.Player(id, {
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
            });

        }
    }
    
    var powerModalFix = function() {
        var enemWindow = $(window),
            enemWindowWidth = enemWindow.width(),
            enemWindowHeight = enemWindow.height(),
            enemModalElBody = $('.enem_container_body_modal'),
            enemModalBodyHeight = parseInt(enemModalElBody.height()),
            enemHeightWindowNow = Math.round(enemWindowHeight * 30 / 100),
            enemMaxHeightBodyModal = enemWindowHeight - enemHeightWindowNow,
            enemBodyContentModal = $('.enem_body_content_modal'),
            enemBodyContentWidth = enemBodyContentModal.width(),
            enemWrapperContentModalEl = $('.enem_wrapper_content_modal'),
            enemWidMinWrapperContentModal = enemWindowWidth - 80;
        
        powerTest('Width: ' + enemWindowWidth + '<br>' + ' Height: ' + enemWindowHeight + '<br>' + ' HaWeNo: ' + enemHeightWindowNow);
        
        if(enemWindowWidth > 620) {
            enemModalElBody.css({
                'max-height' : enemMaxHeightBodyModal
            });
            setTimeout(function(){
                if(enemBodyContentWidth > enemWindowWidth) {
                    enemWrapperContentModalEl.css({
                        'min-width' : enemWidMinWrapperContentModal
                    });
                }
            },20);
        } else {
            enemModalElBody.css({
                'max-height' : enemWindowHeight - 90
            });
        }
        
        $(window).resize(function(){
            var enemWindow = $(window),
                enemWindowWidth = enemWindow.width(),
                enemWindowHeight = enemWindow.height(),
                enemModalElBody = $('.enem_container_body_modal');

            powerTest('Width: ' + enemWindowWidth + '<br>' + ' Height: ' + enemWindowHeight);
            
            if(enemWindowWidth < 620) {
                enemModalElBody.css({
                    'height' : enemWindowHeight
                });
            } else {
                enemModalElBody.css({
                    'max-height' : enemWindowHeight - 90
                });
            }
            
        });
        
    }
    
    var powerTest = function(content) {
        $('body').append(enemTestElement);
        if(content.length) {
            $('.enem_test_element').html(content);
        } else {
            console.error('Check your content. Your content is: ' + content);
        }
    }
    
    var powerScreen = function() {
        var enemWindow = $(window),
            enemWidth = enemWindow.width(),
            enemHeight = enemWindow.height();
        
        $('body').append(enemTestElement);
        console.info('w : ' + enemWidth + ' ' + 'h : ' + enemHeight);
        if(enemWidth && enemHeight) {
            var dataScreen = {
                'enemWidth' : enemWidth,
                'enemHeight' : enemHeight,
            };
            var dataContent = 'width : ' + dataScreen.enemWidth + '<br>' + 'height : ' + dataScreen.enemHeight;
            $('.enem_test_element').html(dataContent);
        } else {
            console.error('Check your content. Your content is: ' + dataContent);
        }
    }
    
    var powerRatio = function(dataRatio) {
        var enemTypeof = powerGetType(dataRatio).enemTypeof;
        if(enemTypeof === 'object') {
            var enemPowerRatioWidth = dataRatio.width,
                enemPowerRatioHeight = dataRatio.height;
            
        } else {
            console.error('Data must be object. Your data is: ' + dataRatio);
        }
    }
    
    var powerSpeed = function() {
        window.onload = function(){
          setTimeout(function(){
            var t = performance.timing;
            console.log(t.loadEventEnd - t.responseEnd);
          }, 0);
        }
    }
    
    var powerResponsive = function(dataWindow, callback) {
//        console.info(dataWindow);
//        if(dataWindow.powerWidth >= 2000) {
//            console.info('2000 an');
//            powerRunCallback(callback);
//        } else if(dataWindow.powerWidth >= 1200) {
//            console.info('1200 an');
//            powerRunCallback(callback);
//        } else if(dataWindow.powerWidth >= 768) {
//            console.info('700 an');
//        } else {
//            console.info(':)');
//        }
//        
//        return {
//            powerWidth: dataWindow.powerWidth,
//        }
    }
    
    var powerGetType = function(dataTitle){
        var enemTypeof = typeof(dataTitle);
        return {
            enemTypeof: enemTypeof,
        }
    }
    
    var powerRunCallback = function(callback) {
        if (callback) {
            var enemTypeof = powerGetType(callback).enemTypeof;
//            console.info(callback);
            if(enemTypeof === "function"){
                callback();
            } else {
                console.error('Sorry, check your callback. Your type is : ' + enemTypeof + ' :)');
            }
        } else {
            console.error('Sorry :)');
			console.error('Error in powerRunCallback');
		}
    }
    
    var powerSlider = function(dataSlider) {
//        console.info(dataSlider);
        var enemTypeof = powerGetType(dataSlider).enemTypeof;
//            console.info(callback);
        // dataSlider must object
        // dataSlider.sliderType = For type of slider
        // dataSlider.element = For element of slider
        // dataSlider.setting = For setting slider. this data is optional
        if(enemTypeof === "object"){
            
            if($(dataSlider.element)[0]) {
                
                if(dataSlider.sliderType === 'banner') {
                    
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            pagination: '.swiper-pagination',
                //            nextButton: '.swiper-button-next',
                //            prevButton: '.swiper-button-prev',
                            paginationClickable: true,
                            spaceBetween: 30,
                            centeredSlides: true,
                            autoplay: 5000,
                            parallax: true,
                            autoplayDisableOnInteraction: false,
                        });
                    } 
                    
                } else if(dataSlider.sliderType === 'sliderList') {
                    
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            //pagination: '.swiper-pagination',
                            slidesPerView: 7,
                            paginationClickable: true,
                            spaceBetween: 40,
                            freeMode: true,
                            grabCursor: true,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            // Responsive breakpoints
                            breakpoints: {
                                // when window width is <= 320px
                                320: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 10
                                },
                                // when window width is <= 480px
                                480: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 20
                                },
                                // when window width is <= 640px
                                768: {
                                  slidesPerView: 3,
                                  spaceBetweenSlides: 30
                                },

                                1024: {
                                  slidesPerView: 3,
                                  spaceBetweenSlides: 30
                                },

                                1250: {
                                  slidesPerView: 5,
                                  spaceBetweenSlides: 30
                                }
                            },
                            autoplay: 2500,
                            autoplayDisableOnInteraction: false
                        });
                    }
                    
                } else if(dataSlider.sliderType === 'sliderOtherVideo') {
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            //pagination: '.swiper-pagination',
                            slidesPerView: 2,
                            paginationClickable: true,
                            spaceBetween: 50,
                            freeMode: true,
                            grabCursor: true,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            // Responsive breakpoints
                            breakpoints: {
                                // when window width is <= 320px
                                320: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 10
                                },
                                // when window width is <= 480px
                                480: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 20
                                },
                                // when window width is <= 640px
                                768: {
                                  slidesPerView: 3,
                                  spaceBetweenSlides: 30
                                },
                                1024: {
                                  slidesPerView: 3,
                                  spaceBetweenSlides: 30
                                },
                            }
                        });
                    }
                    
                } else if(dataSlider.sliderType === 'sliderStruktur') {
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            //pagination: '.swiper-pagination',
                            slidesPerView: 3,
                            paginationClickable: true,
                            spaceBetween: 30,
                            freeMode: true,
                            grabCursor: true,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            // Responsive breakpoints
                            breakpoints: {
                //                // when window width is <= 320px
                //                320: {
                //                  slidesPerView: 1,
                //                  spaceBetweenSlides: 10
                //                },
                                // when window width is <= 480px
                //                480: {
                //                  slidesPerView: 2,
                //                  spaceBetweenSlides: 20
                //                },
                                // when window width is <= 640px
                                768: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 10
                                }
                            }
                        }); 
                    }
                } else if(dataSlider.sliderType === 'sliderTab') {
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            //pagination: '.swiper-pagination',
                            slidesPerView: 1,
                            paginationClickable: true,
                            spaceBetween: 30,
                            freeMode: true,
                            grabCursor: true,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            // Responsive breakpoints
                            breakpoints: {
                //                // when window width is <= 320px
                //                320: {
                //                  slidesPerView: 1,
                //                  spaceBetweenSlides: 10
                //                },
                                // when window width is <= 480px
                //                480: {
                //                  slidesPerView: 2,
                //                  spaceBetweenSlides: 20
                //                },
                                // when window width is <= 640px
                                768: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 10
                                }
                            }
                        });
                    }
                } else {
                    console.error('Sorry, check your sliderType. Your type is : ' + dataSlider.sliderType + ' :)');
                }
                
            } else {
                console.error('Sorry, check your element. Your element is : ' + dataSlider.element + ' :)');
            }
            
        } else {
            console.error('Sorry, check your dataSlider. Your type is : ' + enemTypeof + ' :)');
        }
        
    }
    
    var powerToggle = function(powerOfToggle, dataToggle) {
        // dataToggle.targetId buat elemen yg mau di off. Mencari berdasarkan Toggle namenya. Jadi Toggle Id dan Toggle name harus sama
        // dataToggle.targetActive buat elemen yg mau di on
//        console.info('hahahahahaha');
        if(powerOfToggle === 'off') {
            $(dataToggle.targetId).slideUp(700);
            $(dataToggle.targetId).removeClass('toggle-active');
        } else if(powerOfToggle === 'on') {
            $(dataToggle.targetId).hide();
            $(dataToggle.targetId).removeClass('toggle-active');
            $(dataToggle.targetActive).slideDown(700);
            $(dataToggle.targetActive).addClass('toggle-active');
        } else {
            console.error('Sorry :)');
        }
    }
    
    var powerHash = function(enemHash, activeClass, clbk) {
        if(enemHash) {
            if($('[data-enem-hash='+ enemHash +']')[0]) {
                if(activeClass) {
                    var enemTargetEl = $('[data-enem-hash='+ enemHash +']'),
                        enemActiveClassHash = $('.' + activeClass);
                    enemActiveClassHash.removeClass(activeClass);
                    enemTargetEl.addClass(activeClass);
                    if(clbk) {
                        powerRunCallback(clbk);
                    }
                }
            } else {
                console.error('Sorry, check your hash element. your hash element is : data-enem-hash=' + enemHash);
            }
            console.info('Hash ok :)');
        } else {
            console.error('Sorry, check your hash. your hash is : ' + enemHash);
        }
    }
    
    var powerShowModal = function(dataModal) {
        var enemModalTitleEl = $(dataModal.selector).find('.modal-title'),
            enemModalContentEl = $(dataModal.selector).find('.modal-body'),
            enemModalContainerEl = $(dataModal.selector).find('.modal-dialog');
        
        if(dataModal.power === 'on') {
            if(dataModal.modalWidth) {
                enemModalContainerEl.css({
                    'width' : dataModal.modalWidth,
                });
            }
            
            if(dataModal.modalTitle) {
                enemModalTitleEl.html(dataModal.modalTitle);
            }
            if(dataModal.modalContent) {
                enemModalContentEl.html(dataModal.modalContent);
            }
            
            if(dataModal.beforeOn) {
                powerRunCallback(dataModal.beforeOn);
            }
            
            $(dataModal.selector).modal('show');
        } else if(dataModal.power === 'off') {
            $(dataModal.selector).modal('hide');
        }
    }
    
    var powerNetral = function(dataNetral) {
        function cleanDistrubingStyle() {
            console.info(dataNetral.enemCleanDistrubing);
            $(dataNetral.enemCleanDistrubing.cleanEl).removeAttr('style');
        }
        function initClean() {
            if(dataNetral.enemCleanDistrubing) {
                var enemTypeof = powerGetType(dataNetral.enemCleanDistrubing).enemTypeof;
                if(enemTypeof === 'object') {
                    if($(dataNetral.enemCleanDistrubing.cleanEl)[0]) {
                        if(dataNetral.enemCleanDistrubing.cleanType === 'styleInline') {
                            cleanDistrubingStyle();
                            if(dataNetral.enemCleanDistrubing.cleanSuccess) {
                                powerRunCallback(dataNetral.enemCleanDistrubing.cleanSuccess);
                            }
                        } else {
                            console.error('Sorry, not found cleanType. Your cleanType is : ' + dataNetral.enemCleanDistrubing.cleanType);
                        }
                    } else {
                        console.error('Sorry, not found element cleanEl');
                    }
                } else {
                    console.error('Sorry, enemCleanDistrubing must be object. Your enemCleanDistrubing is : ' + enemTypeof);
                }
                
            } else {
                console.error('Sorry, you dont have enemCleanDistrubing');
            }
        }
        
        initClean();
    }
    
    var powerVex = function(dataVex) {
        if(dataVex) {
            var enemTypeof = powerGetType(dataVex).enemTypeof;
            if(enemTypeof === 'object') {
                if(dataVex.vexMessages) {
                    if(dataVex.beforeLoad) {
                        var enemTypeof = powerGetType(dataVex.beforeLoad).enemTypeof;
                        if(enemTypeof === 'function') {
                            powerRunCallback(dataVex.beforeLoad);
                        }
                    }
                    vex.defaultOptions.className = 'vex-theme-os';
                    vex.dialog.alert(dataVex.vexMessages);
                    if(dataVex.afterLoad) {
                        var enemTypeof = powerGetType(dataVex.afterLoad).enemTypeof;
                        if(enemTypeof === 'function') {
                            powerRunCallback(dataVex.afterLoad);
                        }
                    }
                } else {
                    console.error('Sorry, not found vexMessages');
                }
            } else {
                console.error('Data must be object. Your data is: ' + dataVex);
            }
            
        } else {
            console.error('Sorry, not found dataVex');
        }
    }
    
    var powerModernizr = function(dataModernizr) {
        if(Modernizr.dataModernizr.usage) {
            //do something if support
            if(dataModernizr.clbkSupport) {
                powerRunCallback(dataModernizr.clbkSupport);
            }
        } else {
            //do something if not support
            if(dataModernizr.clbkNotSupport) {
                powerRunCallback(dataModernizr.clbkNotSupport);
            }
        }
    }
    
    var powerMaps = function(dataMaps) {
        if(dataMaps) {
            var enemTypeof = powerGetType(dataMaps).enemTypeof;
            if(enemTypeof === 'object') {
                $(dataMaps.selectorEl).on('click', function(){
                    var map = new google.maps.Map(document.getElementById(dataMaps.targetIdEl), dataMaps.options);
                    var image = new google.maps.MarkerImage(dataMaps.markerImg,
                        new google.maps.Size(129, 42),
                        new google.maps.Point(0,0),
                        new google.maps.Point(40, 12)
                    );
                    // Add Marker
                    var marker1 = new google.maps.Marker({
                        position: dataMaps.latlng,
                        map: map,
                        icon: image
                    });
                    google.maps.event.addListener(marker1, 'click', function() {
                        infowindow1.open(map, marker1);
                    });
                });
            } else {
                console.error('Data must be object. Your data is: ' + dataMaps);
            }
        } else {
            console.error('Sorry, not found dataMaps');
        }
    }
    
    var powerToggleEz = function(dataToggleEz) {
        if(dataToggleEz) {
            var enemTypeof = powerGetType(dataToggleEz).enemTypeof;
            if(enemTypeof === 'object') {
                if(dataToggleEz.selectorEl[0] && dataToggleEz.targetEl[0]) {
                    $(document).on('click', dataToggleEz.selectorEl, function(){

                        if(dataToggleEz.beforeLoad) {
                            powerRunCallback(dataToggleEz.beforeLoad);
                        }

                        if(dataToggleEz.speedToggle) {
                            $(dataToggleEz.targetEl).toggle(dataToggleEz.speedToggle);
                        } else {
                            $(dataToggleEz.targetEl).toggle();
                        }

                        if(dataToggleEz.afterLoad) {
                            powerRunCallback(dataToggleEz.afterLoad);
                        }
                    });
                } else {
                    console.error('Sorry, nor found selectorEl and targetEl');
                }
            } else {
                console.error('Data must be object. Your data is: ' + dataToggleEz);
            }
        } else {
            console.error('Sorry, not found dataToggleEz');
        }
    }
    
    var powerCss = function(dataCss) {
        if(dataCss) {
            var enemTypeof = powerGetType(dataCss).enemTypeof;
            if(enemTypeof === 'object') {
                if(dataCss.targetEl[0]) {
                    var enemTypeof = powerGetType(dataCss.css).enemTypeof;
                    if(enemTypeof === 'object') {
                        $(dataCss.targetEl).css(dataCss.css);
                    } else {
                        console.error('Data must be object. Your css is: ' + dataCss);
                    }
                } else {
                    console.error('Sorry, not found targetEl');
                }
            } else {
                console.error('Data must be object. Your dataCss is: ' + dataCss);
            }
        } else {
            console.error('Sorry, not found dataCss');
        }
    }
    
    var powerNiceScroll = function(dataScroll) {
        // Example Nicescroll // 
//        $("#thisdiv").niceScroll({
//            cursorcolor: "#424242", // change cursor color in hex
//            cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
//            cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
//            cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
//            cursorborder: "1px solid #fff", // css definition for cursor border
//            cursorborderradius: "5px", // border radius in pixel for cursor
//            zindex: "auto", //| //<number>, // change z-index for scrollbar div
//            scrollspeed: 60, // scrolling speed
//            mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
//            touchbehavior: false, // enable cursor-drag scrolling like touch devices in desktop computer
//            hwacceleration: true, // use hardware accelerated scroll when supported
//            boxzoom: false, // enable zoom for box content
//            dblclickzoom: true, // (only when boxzoom=true) zoom activated when double click on box
//            gesturezoom: true, // (only when boxzoom=true and with touch devices) zoom activated when pinch out/in on box
//            grabcursorenabled: true, // (only when touchbehavior=true) display "grab" icon
//            autohidemode: true, // how hide the scrollbar works, possible values: 
////              true | // hide when no scrolling
////              "cursor" | // only cursor hidden
////              false | // do not hide,
////              "leave" | // hide only if pointer leaves content
////              "hidden" | // hide always
////              "scroll", // show only on scroll          
//            background: "", // change css for rail background
//            iframeautoresize: true, // autoresize iframe on load event
//            cursorminheight: 32, // set the minimum cursor height (pixel)
//            preservenativescrolling: true, // you can scroll native scrollable areas with mouse, bubbling mouse wheel event
//            railoffset: false, // you can add offset top/left for rail position
//            bouncescroll: false, // (only hw accell) enable scroll bouncing at the end of content as mobile-like 
//            spacebarenabled: true, // enable page down scrolling when space bar has pressed
//            railpadding: { top: 0, right: 0, left: 0, bottom: 0 }, // set padding for rail bar
//            disableoutline: true, // for chrome browser, disable outline (orange highlight) when selecting a div with nicescroll
//            horizrailenabled: true, // nicescroll can manage horizontal scroll
//            railalign: right, // alignment of vertical rail
//            railvalign: bottom, // alignment of horizontal rail
//            enabletranslate3d: true, // nicescroll can use css translate to scroll content
//            enablemousewheel: true, // nicescroll can manage mouse wheel events
//            enablekeyboard: true, // nicescroll can manage keyboard events
//            smoothscroll: true, // scroll with ease movement
//            sensitiverail: true, // click on rail make a scroll
//            enablemouselockapi: true, // can use mouse caption lock API (same issue on object dragging)
//            cursorfixedheight: false, // set fixed height for cursor in pixel
//            hidecursordelay: 400, // set the delay in microseconds to fading out scrollbars
//            directionlockdeadzone: 6, // dead zone in pixels for direction lock activation
//            nativeparentscrolling: true, // detect bottom of content and let parent to scroll, as native scroll does
//            enablescrollonselection: true, // enable auto-scrolling of content when selection text
//            cursordragspeed: 0.3, // speed of selection when dragged with cursor
//            rtlmode: "auto", // horizontal div scrolling starts at left side
//            cursordragontouch: false, // drag cursor in touch / touchbehavior mode also
//            oneaxismousemode: "auto", // it permits horizontal scrolling with mousewheel on horizontal only content, if false (vertical-only) mousewheel don't scroll horizontally, if value is auto detects two-axis mouse
//            scriptpath: "", // define custom path for boxmode icons ("" => same script path)
//            preventmultitouchscrolling: true, // prevent scrolling on multitouch events
//            disablemutationobserver: false, // force MutationObserver disabled
//        });
        if(dataScroll) {
            
            var enemTypeof = powerGetType(dataScroll).enemTypeof;
            if(enemTypeof === 'object') {
                if(dataScroll.targetEl[0]) {
                    if(dataScroll.setting) {
                        if(dataScroll.setting === 'default') {
                            
                            if(dataScroll.targetEl[0]) {
                                $(dataScroll.targetEl).niceScroll();
                            } else {
                                console.error('Sorry, not found dataScroll.targetEl');
                            }
                            
                        } else {
                            
                            if(dataScroll.targetEl[0]) {
                                var enemTypeof = powerGetType(dataScroll.setting).enemTypeof;
                                if(enemTypeof === 'object') {
                                    $(dataScroll.targetEl).niceScroll(dataScroll.setting);
                                } else {
                                    console.error('Data must be object. dataScroll.setting');
                                }
                            } else {
                                console.error('Sorry, not found dataScroll.targetEl');
                            }
                            
                        }
                    } else {
                        console.error('Sorry, not found dataScroll.setting');
                    }
                } else {
                    console.error('Sorry, not found targetEl');
                }
            } else {
                console.error('Data must be object. Your dataScroll is: ' + dataScroll);
            }
            
        } else {
            console.error('Sorry, not found dataScroll');
        }
        
    }
	
	var powerSidebar = function(dataSidebar) {
		if(dataSidebar) {
			var enemTypeof = powerGetType(dataSidebar).enemTypeof; 
			if(enemTypeof === "object") {
				var enemElBody = $(dataSidebar.elBody),
					enemElSidebar = $(dataSidebar.elSidebar);
				
				if(enemElBody[0]) {
					if(enemElSidebar[0]) {
						if(dataSidebar.status == 'on') {
							console.info('Sidebar on');
//							enemElSidebar.addClass('sidebar-active');
//							enemElBody.css({
//								'overflow' : 'auto'
//							});
//							enemElBody.animate({
//								'left' : '250px',
//							},500);
//							enemElSidebar.animate({
//								'left' : '0'
//							},500);
//							
//							
//							setTimeout(function(){
//								enemElBody.addClass('menu-active');
//							},510); // Old Code
							
							
//							enemElBody.animate({
//								'marginLeft' : '250px',
//							},500); // Old code
							
							// For Responsive Container content element
							if(Modernizr.mq('(min-width: 1200px)')) {
								enemElBody.animate({
									'marginLeft' : '250px',
								},500);
							} else {
								enemElBody.animate({
									'marginLeft' : '0px',
								},500);
							}
							
							enemElSidebar.animate({
								'left' : '0'
							},500);
							
							
						} else if(dataSidebar.status == 'off') {
							console.info('Sidebar off');
//							enemElSidebar.removeClass('sidebar-active');
//							enemElBody.animate({
//								'left' : '0px',
//							},500);
//							enemElSidebar.animate({
//								'left' : '-250px'
//							},500);
//							
////							enemElBody.removeClass('menu-active');
////							enemElBody.css({
////								'overflow' : 'hidden'
////							});
//							enemElBody.removeClass('menu-active');
//							
//							setTimeout(function(){
////								enemElBody.removeClass('menu-active');
//								enemElBody.css({
//									'overflow' : 'hidden'
//								});
//							},550); // Old Code 
							
							enemElBody.animate({
								'marginLeft' : '0px',
							},500);
							
							enemElSidebar.animate({
								'left' : '-250px'
							},500);
							
						} else {
							console.error('Sory, statusSidebar not found. In powerSidebar');
						}
					} else {
						console.error('Sory, elSidebar not found. In powerSidebar');
					}
				} else {
					console.error('Sory, elBody not found. In powerSidebar');
				}
			} else {
				console.error('Sorry, dataSidebar must be object. In powerSidebar');
			}
		} else {
			console.info('Sorry, not found dataSidebar. In powerSidebar');
		}
	}
	
	var powerAlert = function(dataAlert) {
		if(dataAlert) {
			var enemTypeof = powerGetType(dataAlert).enemTypeof;
			if(enemTypeof === 'object') {
				if(dataAlert.status) {
					if(dataAlert.messages) {
						switch(dataAlert.status) {
							case 1:
								var enemAlertStatus = 'danger';
							break;
								
							case 2:
								var enemAlertStatus = 'success';
							break;
								
							case 3:
								var enemAlertStatus = 'info';
							break;
								
							case 4:
								var enemAlertStatus = 'warning';
							break;
								
							default:
								var enemAlertStatus = 'info';
							break;
						}
						var enemTemplateAlert = '<div class="enem alert alert-'+ enemAlertStatus +' power-alert message-box">'+ dataAlert.messages +'</div>',
							enemElAlert = $('[data-enem-power="powerAlert"]');
						
						enemElAlert.html(enemTemplateAlert);
						setTimeout(function(){
							enemElAlert.addClass('active');
						},500);
						setTimeout(function(){
							enemElAlert.removeClass('active');
						},5500);
					} else {
						console.error('Sorry, not found dataAlert messages');
					}
				} else {
					console.error('Sorry, not found dataAlert status');
				}
			} else {
				console.error('Data must be object. Your data is: ' + dataAlert);
			}
		} else {
			console.error('Sorry, not found dataAlert in powerAlert');
		}
	}
	
	var powerNotification = function(dataNotification) {
		if(dataNotification) {
			
			var enemTypeof = powerGetType(dataNotification).enemTypeof;
			if(enemTypeof === "object") {
				if(dataNotification.statusNotification) {
					if(dataNotification.setAlert) {
						var enemTypeof = powerGetType(dataNotification.setAlert).enemTypeof;
						if(enemTypeof === "object") {
							switch(dataNotification.statusNotification) {
								case 1:
									var enemNotificationStatus = 'messages';
								break;

								case 2:
									var enemNotificationStatus = 'notification';
								break;

								case 3:
									var enemNotificationStatus = 'other';
								break;

								default:
									var enemNotificationStatus = 'other';
								break;
							}
							var enemSetNotif = {
								'status' : dataNotification.setAlert.statusAlert,
								'messages' : dataNotification.setAlert.messagesAlert,
								'src' : dataNotification.srcNotification,
//								'ringtone' : dataNotification.ringtoneNotification,
							};
							var enemPathSound = enemSetNotif.src;
							var enemSoundEmbbed = '<audio class="enem sound-notif" src="'+ enemPathSound +'" autoplay width="0" height="0"></audio>',
								enemSoundNotifEl = $('.enem.sound-notif');
							if(enemSoundNotifEl[0]) {
								enemSoundNotifEl.remove();
								$('body').append(enemSoundEmbbed);
							} else {
								$('body').append(enemSoundEmbbed);
							}
							powerAlert(enemSetNotif);
						} else {
							console.error('Data must be object. Your data is: ' + dataNotification.setAlert + ' in powerNotification');
						}
					} else {
						console.error('Sorry, not found setAlert in powerNotification');
					}
				} else {
					console.error('Sorry, not found dataAlert status');
				}
			} else {
				console.error('Data must be object. Your data is: ' + dataNotification + ' in power notification');
			}
			
		} else {
			console.error('Sorry, not found dataNotification in powerNotification');
		}
		
		/** Contoh Pakai Notification **/
		/*
		/* enem.powerNotification({
				'statusNotification' : 1,
				'srcNotification' : 'media/sounds/test.mp3',
				'setAlert' : {
					'statusAlert' : 3,
					'messagesAlert' : 'Test Notif Sound',
				},
			});
		/*********************************/
		
	}
	
	var powerPanelCollapse = function(dataPanel) {
		if(dataPanel) {
			console.info('panel collapse ok :)');
			var enemPanelEl = $(dataPanel.panelEl);
			if(enemPanelEl[0]) {
				if(dataPanel.beforeAction) {
					powerRunCallback(dataPanel.beforeAction);
				}
				
				if(enemPanelEl.is(':hidden')) {
					enemPanelEl.slideDown();
				} else {
					enemPanelEl.slideUp();
				}
				
				if(dataPanel.afterAction) {
					powerRunCallback(dataPanel.afterAction);
				}
			} else {
				console.error('Sorry, not found panelEl in powerPanelCollapse');
			}
		} else {
			console.error('Sorry, not found dataPanel in powerPanelCollapse');
		}
	}
	
	var powerPanelClose = function(dataPanel) {
		if(dataPanel) {
			console.info('panel close ok :)');
			var enemPanelEl = $(dataPanel.panelEl);
			if(enemPanelEl[0]) {
				
				if(dataPanel.beforeAction) {
					powerRunCallback(dataPanel.beforeAction);
				}
				
				if(enemPanelEl.is(':hidden')) {
					enemPanelEl.fadeIn(1000);
				} else {
					if(dataPanel.removeDuration) {
						if(parseInt(dataPanel.removeDuration) === dataPanel.removeDuration) {
							setTimeout(function(){
								enemPanelEl.fadeOut(1000, function(){
									$(this).remove();
								});
							},dataPanel.removeDuration);
						} else {
							console.error('Sorry, removeDuration must be integer. In powerEnem');
						}
					} else {
						enemPanelEl.fadeOut(1000, function(){
							$(this).remove();
						});
					}
				}
				
				if(dataPanel.afterAction) {
					powerRunCallback(dataPanel.afterAction);
				}
				
			} else {
				console.error('Sorry, not found panelEl in powerPanelClose');
			}
		} else {
			console.error('Sorry, not found dataPanel in powerPanelClose');
		}
	}
	
	var powerSearch = function(dataSearch) {
		if(dataSearch) {
			var enemTypeof = powerGetType(dataSearch).enemTypeof;
			if(enemTypeof === "object") {
				var enemNameEl = $('[data-enem-search="'+dataSearch.nameEl+'"]'),
					enemStatus = dataSearch.status;
				if(enemNameEl[0]) {
					if(enemStatus == 'on') {
						enemNameEl.addClass('active');
					} else if(enemStatus == 'off') {
						enemNameEl.removeClass('active');
					} else {
						console.error('Sorry, not found status in powerSearch');
					}
				} else {
					console.error('Sorry, not found element in powerSearch');
				}
			} else {
				console.error('Sorry, dataSearch must be object in powerSearch');
			}
		} else {
			console.error('Sorry, not found dataSearch in powerSearch');
		}
	}
	
	var powerListNotification = function(dataNotif){
		var notifId = dataNotif.target,
			notifAllEl = $('[data-notification]'),
			notifEl = $('[data-notification="'+ notifId +'"]'),
			notifStatus = dataNotif.status;
		
		if(notifEl) {
			var enemTypeOf = powerGetType(dataNotif).enemTypeof;
			if(enemTypeOf == 'object') {
				if(notifStatus == 'on') {
					notifEl.addClass('active');
					if(dataNotif.success) {
						powerRunCallback(dataNotif.success);
					}
				} else if(notifStatus == 'off') {
					notifAllEl.removeClass('active');
					if(dataNotif.success) {
						powerRunCallback(dataNotif.success);
					}
				} else {
					console.error('Sorry, not found status in powerListNotification');
				}
				
			} else {
				console.error('Sorry, parameter must be object in powerListNotification');
			}
		} else {
			console.error('Sorry, not found data-notification element in powerListNotification');
		}
	}
	
	var powerEnem = function() {
		$('[data-enem]').on('click', function(){
			var enemThisEl = $(this),
				enemPowerType = enemThisEl.attr('data-enem');
			
			if(enemPowerType != "undefined") {
				console.info('powerEnem ok :)');
				if(enemPowerType === "powerMenu") {
					
					var enemBodyEl = '.enem.page-container', //target container
						enemSidebarEl = '.enem.sidebar.left';
					if(enemThisEl.hasClass('active')) {
						powerSidebar({
							'elBody' : enemBodyEl,
							'elSidebar' : enemSidebarEl,
							'status' : 'off',
						});
						enemThisEl.removeClass('active');
//						setTimeout(function(){
//							enemThisEl.removeClass('is-active');
//						},550);
						
//						powerNormalNs();
					} else {
//						enemThisEl.addClass('is-active');
						enemThisEl.addClass('active');
						powerSidebar({
							'elBody' : enemBodyEl,
							'elSidebar' : enemSidebarEl,
							'status' : 'on',
						});
					}
					
				} else if(enemPowerType === "powerSubmenu") {
					console.info('powerSubMenu ok :)');
					
					var enemSubmenuEl = enemThisEl.parent().children('.enem.sub-nav'),
						enemSubmenuIconEl = enemThisEl.children('.enem.icon.icon-sub-menu');
					
					if(enemSubmenuEl[0] && enemSubmenuIconEl[0]) {
						
						/** Enem Submenu Behavior **/
						function enemSubmenuOn() {
							enemSubmenuEl.slideDown();
							enemSubmenuIconEl.addClass('sub-active');
						}
						
						function enemSubmenuOff() {
							enemSubmenuEl.slideUp();
							enemSubmenuIconEl.removeClass('sub-active');
						}
						/****************************/
						
						if(enemSubmenuIconEl.hasClass('sub-active')) {
							enemSubmenuOff();
						} else {
							enemSubmenuOn();
						}
						
					} else {
						console.error('Sorry, not found submenu element or submenu icon element in powerSubmenu powerEnem');
					}
					
				} else if(enemPowerType === "powerDropdown") {
					console.info('powerDropdown ok :)');
					var enemThisDropdownId = enemThisEl.attr('data-dd-id'),
						enemDropdownEl = $('[data-dd-name="'+ enemThisDropdownId +'"]');
					if(enemDropdownEl[0]) {
						/** Enem Dropdown Behavior **/
						function enemDropdownOn() {
							enemDropdownEl.show();
							enemThisEl.addClass('active');
						}
						
						function enemDropdownOff() {
							enemDropdownEl.hide();
							enemThisEl.removeClass('active');
						}
						/*********************************/
						
						if(enemDropdownEl.is(':hidden')) {
							enemDropdownOn();
						} else {
							enemDropdownOff();
						}
					} else {
						console.error('Sorry, not found dropdown element. In powerDropdown');
					}
				} else if(enemPowerType === "powerPanel") {
					var enemPanelType = enemThisEl.attr('data-enem-panel');
					if(enemPanelType == "collapse") {
						var enemPanelTarget = enemThisEl.parent().parent().parent().parent().parent().find('.enem.panel-main-content'),
							enemThisIcon = enemThisEl.children('i');
						
						if(enemPanelTarget.is(':hidden')) {
							powerPanelCollapse({
								'panelEl' : enemPanelTarget,
							});
							enemThisIcon.removeClass('fa-plus');
							enemThisIcon.addClass('fa-minus');
//							console.info(enemThisIcon);
						} else {
							powerPanelCollapse({
								'panelEl' : enemPanelTarget,
							});
							enemThisIcon.removeClass('fa-minus');
							enemThisIcon.addClass('fa-plus');
//							console.info(enemThisIcon);
						}
					} else if(enemPanelType == "closePanel") {
						var enemPanelTarget = enemThisEl.parent().parent().parent().parent().parent();
						powerPanelClose({
							'panelEl' : enemPanelTarget,
							'removeDuration' : 550,
							'beforeAction' : function(){
								console.info(enemPanelTarget);
								enemPanelTarget.addClass('animated rotateOutDownRight');
							}
						});
					} else if(enemPanelType == "powerSearch") {
						if(enemThisEl.hasClass('active')) {
							powerSearch({
							 'nameEl' : 'powerSearch',
							 'status' : 'off'
							});
						} else {
							
						}
					} else {
						console.error('Sorry, not found data-enem-panel in powerEnem');
					}
				} else if(enemPowerType == "powerSearch") {
					var enemBtnSearch = $("[data-enem='"+ enemPowerType +"']");
					if(enemThisEl.hasClass('active')) {
						enemBtnSearch.removeClass('active');
						powerSearch({
							'nameEl' : 'powerSearch',
							'status' : 'off'
						});
					} else {
						enemBtnSearch.addClass('active');
						powerSearch({
							'nameEl' : 'powerSearch',
							'status' : 'on'
						});
					}
				} else if(enemPowerType == "powerListNotification") {
					var typeNotification = enemThisEl.attr('data-type-notification');
					$('[data-enem="'+ enemPowerType +'"]').removeClass('active');
					$('[data-enem="'+ enemPowerType +'"]').find('span.arrow-notification').fadeOut(300);
					if(typeNotification) {
						if($('[data-notification="'+ typeNotification +'"]').hasClass('active')) {
							
							powerListNotification({
								status: 'off',
								success: function() {
									if($('[data-enem="'+ enemPowerType +'"]').hasClass('active')){
										$('[data-enem="'+ enemPowerType +'"]').removeClass('active');
										$('[data-enem="'+ enemPowerType +'"]').find('span.arrow-notification').fadeOut(300);
									}
								},
							});
							console.info('close notif');
//							$('[data-enem="'+ enemPowerType +'"]').removeClass('active');
							
						} else {
							console.info('open notif');
//							$('[data-enem="'+ enemPowerType +'"]').find('span.arrow-notification').fadeOut(300);
							$('[data-enem="'+ enemPowerType +'"]').find('span.arrow-notification').fadeOut(300);
							powerListNotification({
								status: 'off',
								success: function() {
									if($('[data-enem="'+ enemPowerType +'"]').hasClass('active')){
										$('[data-enem="'+ enemPowerType +'"]').removeClass('active');
										$('[data-enem="'+ enemPowerType +'"]').find('span.arrow-notification').fadeOut(300);
									}
									
									console.info('close notif before open again');
								}
							});
							enemThisEl.addClass('active');
//							powerListNotification({
//								target: typeNotification,
//								status: 'on',
//								success: function() {
//									enemThisEl.find('span.arrow-notification').fadeIn(300);
//								}
//							});
							setTimeout(function(){
								powerListNotification({
									target: typeNotification,
									status: 'on',
//									success: function() {
//										enemThisEl.find('span.arrow-notification').fadeIn(300);
//									}
								});
							},1000);
							setTimeout(function(){
								enemThisEl.find('span.arrow-notification').fadeIn(300);
								enemThisEl.addClass('active');
							},2000);
							
						}
					} else {
						console.error('Sorry, not found data-type-notification in powerListNotification');
					}
				} else {
					console.error('Sorry, not found data-enem with your value. Your data-enem is : ' + enemPowerType + '. In powerDropdown');
				}
			} else {
				console.error('Sorry, not found data-enem value. Your data-enem is : ' + enemPowerType + '. In powerEnem');
			}
			
//			powerVex({
//				'vexMessages' : enemThisAttr,
//			});
		});
	}
	
	var powerWatch = function(dataWatch) {
		if(dataWatch) {
			var enemTypeof = powerGetType(dataWatch).enemTypeof;
			if(enemTypeof === "object") {
				
			} else {
				console.error('Sorry, dataWatch must be object. In powerWatch');
			}
		} else {
			console.error('Sorry, not found dataWatch. In powerWatch');
		}
		$('div').watch('width height', function(){
			console.log(this.style.width, this.style.height);
		});
	}
	
	var powerWaves = function() {
		Waves.init();
    	Waves.attach('.enem.waves', ['waves-block']);
	}
	
	var powerEnemScroll = function() {
		powerNiceScroll({
			targetEl : '.enem.scroll',
			setting : {
				cursorcolor: "#FFEB3B",
				cursorwidth: "5px",
//				background: 'grey',
				background: '#06b1b1',
				cursorborder: 'none',
//				smoothscroll: false,
			}
		});
		$('.nicescroll-rails-hr').hide();
	}
	
	var powerNormalNs = function() {
		$('.nicescroll-rails-hr').hide();
		$('window').on('resize',function(){
			alert('resize scroll');
		});
	}
	
	var powerTooltip = function() {
		$('[data-toggle="tooltip"]').tooltip();
	}
	
	var powerResponsive = function() {
		if(Modernizr.mq('(min-width: 1200px)')) {
			powerSidebar({'elBody' : '.enem.page-container', 'elSidebar' : '.enem.sidebar.left', 'status' : 'on'});
			$('[data-enem="powerMenu"]').addClass('active');
		} else {
			powerSidebar({'elBody' : '.enem.page-container', 'elSidebar' : '.enem.sidebar.left', 'status' : 'off'});
			$('[data-enem="powerMenu"]').removeClass('active');
		}
		$(window).on('resize', function(){
			if(Modernizr.mq('(min-width: 1200px)')) {
				powerSidebar({'elBody' : '.enem.page-container', 'elSidebar' : '.enem.sidebar.left', 'status' : 'on'});
				$('[data-enem="powerMenu"]').addClass('active');
			} else {
				powerSidebar({'elBody' : '.enem.page-container', 'elSidebar' : '.enem.sidebar.left', 'status' : 'off'});
				$('[data-enem="powerMenu"]').removeClass('active');
			}
		});
	}
	
	var powerCheckOffsetEl = function() {
		var docWidth = document.documentElement.offsetWidth;

		[].forEach.call(
		document.querySelectorAll('*'),
			function(el) {
				if (el.offsetWidth > docWidth) {
					console.log(el);
				}
			}
		);
	}
    
    var powerDocs = function(typeDocs) {
        if(typeDocs === 1) {
            var enemBody = $('body'),
                enemConDocs = $('.enem-container-docs'),
                enemCloseDocs = $('.enem-close-docs');
            
            var enemTemplate =  '<section class="enem-container-docs">' +
                                    '<div class="enem-close-docs">' +
                                        '&times;' +
                                    '</div>' +
                                    '<div>' +
                                        'lalalalala' +
                                    '</div>' +
                                '</section>';
            console.info(':)');
            
            function runPowerDocs() {
                enemGetWindowTemplate();
                enemTestOk();
                enemExitDocs();
            }
            function enemGetWindowTemplate() {
                enemBody.append(enemTemplate,function(){
                    enemConDocs.fadeIn();
                });
            }
            function enemTestOk(wow) {
                if(wow === 'enem') {
                    console.info('uhuy');
                } 
            }
            function enemExitDocs() {
                enemCloseDocs.on('click', function(){
                    enemConDocs.fadeOut();
                });
            }
            
            runPowerDocs();
        } else {
            console.info(':(');
        }
    }
    

	return {
		uhuy: uhuy,
        bismillah: bismillah,
        smoothScroll: smoothScroll,
        normalSlide: normalSlide,
        detectImage: detectImage,
        powerEnem: powerEnem,
        enemSecret: enemSecret,
        enemDownload: enemDownload,
        enemVideoHome: enemVideoHome,
        powerModalFix: powerModalFix,
        powerScreen: powerScreen,
        powerRatio: powerRatio,
        powerSpeed: powerSpeed,
        powerSlider: powerSlider,
        powerHash: powerHash,
        powerNetral: powerNetral,
        powerVex: powerVex,
        powerShowModal: powerShowModal,
        powerModernizr: powerModernizr,
        powerMaps: powerMaps,
        powerToggleEz: powerToggleEz,
        powerCss: powerCss,
        powerNiceScroll: powerNiceScroll,
        powerRunCallback: powerRunCallback,
		powerSidebar: powerSidebar,
		powerAlert: powerAlert,
		powerNotification: powerNotification,
		powerListNotification: powerListNotification,
		powerWatch: powerWatch,
		powerWaves: powerWaves,
		powerEnemScroll: powerEnemScroll,
		powerNormalNs: powerNormalNs,
		powerTooltip: powerTooltip,
		powerResponsive: powerResponsive,
		powerSearch: powerSearch,
		powerPanelCollapse: powerPanelCollapse,
		powerCheckOffsetEl: powerCheckOffsetEl,
        powerDocs: powerDocs,
        progressBar: progressBar,
	};

})(jQuery);