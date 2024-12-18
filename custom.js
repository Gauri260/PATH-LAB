function collectMapSvg() {
    $("img.mapsvg").each(function() {
        var o = $(this)
          , t = o.attr("id")
          , s = o.attr("class")
          , e = o.attr("src");
        jQuery.getJSON(e, function(e) {
            e = $(e).find("svg");
            void 0 !== t && (e = e.attr("id", t)),
            void 0 !== s && (e = e.attr("class", s + " replaced-svg")),
            !(e = e.removeAttr("xmlns:a")).attr("viewBox") && e.attr("height") && e.attr("width") && e.attr("viewBox", "0 0 " + e.attr("height") + " " + e.attr("width")),
            o.replaceWith(e)
        }, "xml")
    })
}
var x, i, j, l, ll, selElmnt, a, b, c;
for ($(document).ready(function() {
    $(".btnyes").click(function() {
        $(".submit-btn1").show(),
        $(".submit-btn2").hide(),
        $(".btnyes").css("background", "#fecc4e"),
        $(".btnno").css("background", "initial")
    }),
    $(".subyes").click(function() {
        $("#pregnancyModel1").modal("hide"),
        $("#pregnancyModel3").modal("show")
    }),
    $(".btnno").click(function() {
        $(".submit-btn2").show(),
        $(".submit-btn1").hide(),
        $(".btnno").css("background", "#fecc4e"),
        $(".btnyes").css("background", "initial")
    }),
    $(".subno").click(function() {
        $("#pregnancyModel1").modal("hide"),
        $("#pregnancyModel2").modal("show")
    }),
    collectMapSvg(),
    "function" == typeof $(".counter").counterUp && $(".counter").counterUp({
        delay: 10,
        time: 1500
    }),
    $("#backtotop").bind("click", function(e) {
        e.preventDefault(),
        $("body,html").animate({
            scrollTop: 0
        }, 0)
    }),
    $(".ham-icon").click(function() {
        $(".my-sidenav-in").css("display", "block")
    }),
    $(".cross-btn").click(function() {
        $(".my-sidenav-in").css("display", "none")
    }),
    0 < $(".jrny-slider").length && setTimeout(function() {
        "function" == typeof $(".jrny-slider.owl-carousel").owlCarousel && $(".jrny-slider.owl-carousel").owlCarousel({
            autoplay: !1,
            items: 1,
            loop: !0,
            dots: !1,
            nav: !0,
            URLhashListener: !1,
            autoplayHoverPause: !1,
            startPosition: "about-us#slide1"
        }),
        void 0 === $(".jrny-slider.owl-carousel") && $(".jrny-slider.owl-carousel").on("changed.owl.carousel", function(e) {
            var o = e.item.index
              , o = $(e.target).find(".owl-item").eq(o).find(".item").attr("data-hash");
            $("." + o).addClass("active")
        }),
        void 0 === $(".jrny-slider.owl-carousel") && $(".jrny-slider.owl-carousel").on("change.owl.carousel", function(e) {
            var o = e.item.index
              , o = $(e.target).find(".owl-item").eq(o).find(".item").attr("data-hash");
            $("." + o).removeClass("active")
        })
    }, 1e3)
}),
$(document).ready(function() {
    "function" == typeof $(".my-sidenav1").accordion && $(".my-sidenav1").accordion()
}),
$(window).scroll(function() {
    400 <= $(window).scrollTop() ? $(".fixed-icons").addClass("show") : $(".fixed-icons").removeClass("show")
}),
"function" == typeof $(".gallery-slider.owl-carousel").owlCarousel && $(".gallery-slider.owl-carousel").owlCarousel({
    autoplay: !0,
    loop: !0,
    dots: !1,
    nav: !0,
    navText: "",
    touchDrag: !0,
    mouseDrag: !1,
    items: 2,
    smartSpeed: 1e3,
    margin: 15,
    responsive: {
        0: {
            items: 1,
            nav: !1
        },
        991: {
            items: 1,
            nav: !1
        },
        1e3: {
            items: 2
        }
    }
}),
setTimeout(function() {
    "function" == typeof $(".stomuck-slider.owl-carousel").owlCarousel && $(".promotions-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !0,
        nav: !1,
        navText: "",
        touchDrag: !0,
        mouseDrag: !1,
        items: 3,
        smartSpeed: 1e3,
        margin: 15,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    })
}, 1001),
"function" == typeof $(".promotions-slider2.owl-carousel").owlCarousel && $(".promotions-slider2.owl-carousel").owlCarousel({
    autoplay: !0,
    loop: !1,
    dots: !0,
    nav: !1,
    navText: "",
    touchDrag: !0,
    mouseDrag: !1,
    items: 3,
    smartSpeed: 1e3,
    margin: 15,
    responsive: {
        0: {
            items: 1,
            loop: !0
        },
        991: {
            items: 3
        },
        1e3: {
            items: 3
        }
    }
}),
setTimeout(function() {
    "function" == typeof $(".banner-slider.owl-carousel").owlCarousel && $(".banner-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !0,
        nav: !1,
        navText: "",
        touchDrag: !0,
        mouseDrag: !1,
        items: 1,
        smartSpeed: 1e3,
        margin: 15,
        responsive: {
            0: {
                items: 1,
                loop: !0,
                nav: !1
            },
            991: {
                items: 1,
                nav: !1
            },
            1e3: {
                items: 1
            }
        }
    })
}, 1015),
"function" == typeof $(".accreditation-slider.owl-carousel").owlCarousel && $(".accreditation-slider.owl-carousel").owlCarousel({
    autoplay: !0,
    loop: !1,
    dots: !0,
    nav: !1,
    navText: "",
    touchDrag: !0,
    mouseDrag: !1,
    items: 6,
    smartSpeed: 1e3,
    responsive: {
        0: {
            items: 2.5,
            loop: !0,
            nav: !1
        },
        991: {
            items: 6,
            nav: !1
        },
        1e3: {
            items: 6
        }
    }
}),
"function" == typeof $(".search-slider.owl-carousel").owlCarousel && $(".search-slider.owl-carousel").owlCarousel({
    autoplay: !0,
    loop: !1,
    dots: !0,
    nav: !1,
    navText: "",
    touchDrag: !0,
    items: 6,
    mouseDrag: !1,
    smartSpeed: 1e3,
    responsive: {
        0: {
            items: 2.5,
            loop: !0,
            nav: !1
        },
        991: {
            items: 6,
            nav: !1
        },
        1e3: {
            items: 6
        }
    }
}),
setTimeout(function() {
    "function" == typeof $(".search-slider2.owl-carousel").owlCarousel && $(".search-slider2.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !1,
        dots: !0,
        nav: !1,
        navText: "",
        touchDrag: !0,
        items: 6,
        mouseDrag: !1,
        smartSpeed: 1e3,
        responsive: {
            0: {
                items: 2.5,
                loop: !0,
                nav: !1
            },
            991: {
                items: 6,
                nav: !1
            },
            1e3: {
                items: 6
            }
        }
    })
}, 1015),
setTimeout(function() {
    "function" == typeof $(".popular-slider.owl-carousel").owlCarousel && $(".popular-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !1,
        dots: !0,
        nav: !1,
        navText: "",
        touchDrag: !0,
        mouseDrag: !1,
        items: 3,
        smartSpeed: 1e3,
        margin: 10,
        responsive: {
            0: {
                items: 1.25,
                loop: !0,
                nav: !1
            },
            991: {
                items: 3,
                nav: !1
            },
            1e3: {
                items: 3
            }
        }
    })
}, 1e3),
setTimeout(function() {
    "function" == typeof $(".featured-slider.owl-carousel").owlCarousel && $(".featured-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !1,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        items: 2,
        smartSpeed: 1e3,
        margin: 15,
        responsive: {
            0: {
                items: 1.2
            },
            991: {
                items: 1
            },
            1e3: {
                items: 3
            }
        }
    }),
    "function" == typeof $(".services-slider.owl-carousel").owlCarousel && $(".services-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !1,
        dots: !0,
        nav: !1,
        navText: "",
        touchDrag: !0,
        mouseDrag: !1,
        items: 6,
        smartSpeed: 1e3,
        responsive: {
            0: {
                items: 4,
                loop: !0,
                nav: !1
            },
            991: {
                items: 6,
                nav: !1
            },
            1e3: {
                items: 6
            }
        }
    }),
    "function" == typeof $(".special-slider.owl-carousel").owlCarousel && $(".special-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !1,
        dots: !0,
        nav: !1,
        navText: "",
        touchDrag: !0,
        mouseDrag: !1,
        items: 6,
        smartSpeed: 1e3,
        responsive: {
            0: {
                items: 2.5,
                loop: !0,
                nav: !1
            },
            991: {
                items: 6,
                nav: !1
            },
            1e3: {
                items: 6
            }
        }
    }),
    "function" == typeof $(".special-slider2.owl-carousel").owlCarousel && $(".special-slider2.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !1,
        dots: !0,
        nav: !1,
        navText: "",
        touchDrag: !0,
        mouseDrag: !1,
        items: 4,
        smartSpeed: 1e3,
        responsive: {
            0: {
                items: 2.5,
                loop: !0,
                nav: !1
            },
            991: {
                items: 4,
                nav: !1
            },
            1e3: {
                items: 4
            }
        }
    })
}, 1200),
setTimeout(function() {
    "function" == typeof $(".dept-slider.owl-carousel").owlCarousel && $(".dept-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !1,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        smartSpeed: 1e3,
        responsive: {
            0: {
                items: 2.5,
                nav: !0
            },
            991: {
                items: 2.5,
                nav: !1
            },
            1e3: {
                items: 6
            }
        }
    }),
    "function" == typeof $(".people-slider-2.owl-carousel").owlCarousel && $(".people-slider-2.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !1,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        items: 3,
        smartSpeed: 1e3,
        margin: 25,
        responsive: {
            0: {
                items: 1.25
            },
            991: {
                items: 1
            },
            1e3: {
                items: 3
            }
        }
    }),
    "function" == typeof $(".type-of-cancer-slider.owl-carousel").owlCarousel && $(".type-of-cancer-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !1,
        dots: !1,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        items: 6,
        smartSpeed: 1e3,
        responsive: {
            0: {
                items: 2.5
            },
            991: {
                items: 6
            },
            1e3: {
                items: 5
            }
        }
    }),
    "function" == typeof $(".blogs-slider.owl-carousel").owlCarousel && $(".blogs-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !1,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        items: 2,
        smartSpeed: 1e3,
        margin: 15,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 1
            },
            1e3: {
                items: 3
            }
        }
    }),
    "function" == typeof $(".latestArticles.owl-carousel").owlCarousel && $(".latestArticles.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !1,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        items: 2,
        smartSpeed: 1e3,
        margin: 15,
        responsive: {
            0: {
                items: 1.5
            },
            991: {
                items: 1
            },
            1e3: {
                items: 3
            }
        }
    }),
    "function" == typeof $(".research-papers-slider.owl-carousel").owlCarousel && $(".research-papers-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !1,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        items: 2,
        smartSpeed: 1e3,
        margin: 15,
        responsive: {
            0: {
                items: 1.2
            },
            991: {
                items: 1
            },
            1e3: {
                items: 3
            }
        }
    }),
    "function" == typeof $(".dept-slider.owl-carousel").owlCarousel && $(".dept-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !0,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        smartSpeed: 1e3,
        responsive: {
            0: {
                items: 2.5
            },
            991: {
                items: 2.5
            },
            1e3: {
                items: 6
            }
        }
    }),
    "function" == typeof $(".compaign-sliders.owl-carousel").owlCarousel && $(".compaign-sliders.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !0,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        smartSpeed: 1e3,
        responsive: {
            0: {
                items: 1.2,
                dots: !1
            },
            991: {
                items: 1.2
            },
            1e3: {
                items: 1,
                nav: !1
            }
        }
    }),
    "function" == typeof $(".pd-slider.owl-carousel").owlCarousel && $(".pd-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !0,
        nav: !1,
        navText: "",
        touchDrag: !0,
        mouseDrag: !1,
        smartSpeed: 1e3,
        items: 1
    })
}, 1100),
setTimeout(function() {
    "function" == typeof $(".about-value-slider.owl-carousel").owlCarousel && $(".about-value-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !1,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        smartSpeed: 1e3,
        margin: 25,
        responsive: {
            0: {
                items: 2,
                margin: 5,
                nav: !0
            },
            991: {
                items: 2.5
            },
            1e3: {
                items: 2.2
            }
        }
    }),
    "function" == typeof $(".csr-tab-slider.owl-carousel").owlCarousel && $(".csr-tab-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !1,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        smartSpeed: 1e3,
        margin: 10,
        responsive: {
            0: {
                items: 1.2,
                margin: 5,
                nav: !0
            },
            991: {
                items: 2.5,
                nav: !1
            },
            1e3: {
                items: 3
            }
        }
    }),
    "function" == typeof $(".team-slider.owl-carousel").owlCarousel && $(".team-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !1,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        smartSpeed: 1e3,
        margin: 10,
        responsive: {
            0: {
                items: 2,
                margin: 5,
                nav: !0
            },
            991: {
                items: 2.5,
                nav: !1
            },
            1e3: {
                items: 6
            }
        }
    }),
    "function" == typeof $(".csr.owl-carousel").owlCarousel && $(".csr.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !1,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        items: 2,
        smartSpeed: 1e3,
        margin: 15,
        responsive: {
            0: {
                items: 2,
                dots: !1
            },
            991: {
                items: 1
            },
            1e3: {
                items: 3
            }
        }
    }),
    "function" == typeof $(".pd-slider.owl-carousel").owlCarousel && $(".pd-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !0,
        nav: !1,
        navText: "",
        touchDrag: !0,
        mouseDrag: !1,
        smartSpeed: 1e3,
        items: 1
    })
}, 1100),
setTimeout(function() {
    "function" == typeof $(".csrinitiatives-slider.owl-carousel").owlCarousel && $(".csrinitiatives-slider.owl-carousel").owlCarousel({
        autoplay: !1,
        loop: !0,
        dots: !1,
        nav: !0,
        navText: "",
        touchDrag: !0,
        mouseDrag: !1,
        smartSpeed: 1e3,
        margin: 10,
        responsive: {
            0: {
                items: 2,
                margin: 5,
                nav: !0
            },
            991: {
                items: 2.5,
                nav: !1
            },
            1e3: {
                items: 3
            }
        }
    }),
    "function" == typeof $(".pd-slider.owl-carousel").owlCarousel && $(".pd-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !0,
        dots: !0,
        nav: !1,
        navText: "",
        touchDrag: !0,
        mouseDrag: !1,
        smartSpeed: 1e3,
        items: 1
    })
}, 1100),
"function" == typeof $(".personn-slider.owl-carousel").owlCarousel && $(".personn-slider.owl-carousel").owlCarousel({
    autoplay: !0,
    loop: !0,
    dots: !0,
    nav: !0,
    navText: "",
    touchDrag: !0,
    mouseDrag: !1,
    items: 1,
    smartSpeed: 1e3,
    margin: 15,
    responsive: {
        0: {
            items: 1,
            nav: !1
        },
        991: {
            items: 1,
            nav: !1
        },
        1e3: {
            items: 1
        }
    }
}),
"function" == typeof $(".bod-slider.owl-carousel").owlCarousel && $(".bod-slider.owl-carousel").owlCarousel({
    autoplay: !0,
    loop: !0,
    dots: !0,
    nav: !1,
    navText: "",
    touchDrag: !0,
    mouseDrag: !1,
    items: 1.5,
    smartSpeed: 1e3,
    margin: 30,
    responsive: {
        0: {
            items: 1.5,
            nav: !1
        },
        991: {
            items: 1.5,
            nav: !1
        },
        1e3: {
            items: 1.5
        }
    }
}),
setTimeout(function() {
    "function" == typeof $(".blog-categories-slider.owl-carousel").owlCarousel && $(".blog-categories-slider.owl-carousel").owlCarousel({
        autoplay: !0,
        loop: !1,
        dots: !1,
        nav: !0,
        navText: ["<img src='https://uat-cdn.drlallab.com/2022-12/left-arrow.png'>", "<img src='https://uat-cdn.drlallab.com/2022-12/right-arrow.png'>"],
        touchDrag: !0,
        mouseDrag: !1,
        items: 3,
        smartSpeed: 1e3,
        responsive: {
            0: {
                items: 1,
                loop: !0,
                nav: !0
            },
            991: {
                items: 3,
                nav: !1
            },
            1e3: {
                items: 3
            }
        }
    })
}, 3e3),
"function" == typeof $(".blog-popup-slider.owl-carousel").owlCarousel && $(".blog-popup-slider.owl-carousel").owlCarousel({
    autoplay: !0,
    loop: !1,
    dots: !0,
    nav: !1,
    navText: "",
    touchDrag: !0,
    mouseDrag: !1,
    items: 6,
    smartSpeed: 1e3,
    responsive: {
        0: {
            items: 3,
            loop: !0,
            nav: !1
        },
        991: {
            items: 6,
            nav: !1
        },
        1e3: {
            items: 6
        }
    }
}),
"function" == typeof $(".download-report-slider.owl-carousel").owlCarousel && $(".download-report-slider.owl-carousel").owlCarousel({
    autoplay: !0,
    loop: !0,
    dots: !0,
    nav: !0,
    navText: "",
    touchDrag: !0,
    mouseDrag: !1,
    items: 1,
    smartSpeed: 1e3,
    margin: 15,
    responsive: {
        0: {
            items: 1,
            nav: !1
        },
        991: {
            items: 1,
            nav: !1
        },
        1e3: {
            items: 1
        }
    }
}),
"function" == typeof $(".offering-slider.owl-carousel").owlCarousel && $(".offering-slider.owl-carousel").owlCarousel({
    autoplay: !0,
    loop: !0,
    dots: !0,
    nav: !0,
    navText: "",
    touchDrag: !0,
    mouseDrag: !1,
    items: 2,
    smartSpeed: 1e3,
    margin: 15,
    responsive: {
        0: {
            items: 1.25,
            nav: !1
        },
        991: {
            items: 1,
            nav: !1
        },
        1e3: {
            items: 3
        }
    }
}),
"function" == typeof $(".card-slider.owl-carousel").owlCarousel && $(".card-slider.owl-carousel").owlCarousel({
    autoplay: !0,
    loop: !1,
    dots: !0,
    nav: !0,
    navText: "",
    touchDrag: !0,
    mouseDrag: !1,
    autoHeight: !0,
    items: 4,
    smartSpeed: 1e3,
    responsive: {
        0: {
            items: 1,
            loop: !0,
            nav: !1
        },
        991: {
            items: 4,
            nav: !1
        },
        1e3: {
            items: 4
        }
    }
}),
"function" == typeof $(".location-slider.owl-carousel").owlCarousel && $(".location-slider.owl-carousel").owlCarousel({
    autoplay: !0,
    loop: !0,
    dots: !0,
    nav: !0,
    navText: "",
    touchDrag: !0,
    mouseDrag: !1,
    autoHeight: !0,
    smartSpeed: 1e3,
    responsive: {
        0: {
            items: 2.5,
            loop: !0,
            nav: !1
        },
        991: {
            items: 2.5,
            nav: !1
        },
        1e3: {
            items: 2.5
        }
    }
}),
$("#gfting-smone").click(function() {
    $(".slect-gifting").addClass("show")
}),
$("#selff").click(function() {
    $(".slect-gifting").removeClass("show")
}),
l = (x = document.getElementsByClassName("custom-select1")).length,
i = 0; i < l; i++) {
    for (ll = (selElmnt = x[i].getElementsByTagName("select")[0]).length,
    (a = document.createElement("DIV")).setAttribute("class", "select-selected"),
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML,
    x[i].appendChild(a),
    (b = document.createElement("DIV")).setAttribute("class", "select-items select-hide"),
    j = 0; j < ll; j++)
        (c = document.createElement("DIV")).innerHTML = selElmnt.options[j].innerHTML,
        b.appendChild(c);
    x[i].appendChild(b),
    a.addEventListener("click", function(e) {
        e.stopPropagation(),
        this.nextSibling.classList.toggle("select-hide"),
        this.classList.toggle("select-arrow-active")
    })
}
function isValidDate(e) {
    var o = document.getElementById("ddlcycle")
      , t = document.getElementById("effective-date").value
      , s = o.options[o.selectedIndex].value;
    o.options[o.selectedIndex].text;
    if ("" == t)
        return document.getElementById("myModal").style.display = "block",
        !(document.getElementById("modelcontentpregancy").innerHTML = "Please select Date");
    if (0 == s)
        return document.getElementById("myModal").style.display = "block",
        !(document.getElementById("modelcontentpregancy").innerHTML = "Please select cycle length");
    e = e.split("-");
    if (month = e[1],
    day = e[2],
    year = e[0],
    month < 1 || 12 < month)
        return document.getElementById("myModal").style.display = "block",
        !(document.getElementById("modelcontentpregancy").innerHTML = "Month must be between 1 and 12.");
    if (day < 1 || 31 < day)
        return document.getElementById("myModal").style.display = "block",
        !(document.getElementById("modelcontentpregancy").innerHTML = "Day must be between 1 and 31.");
    if ((4 == month || 6 == month || 9 == month || 11 == month) && 31 == day)
        return document.getElementById("myModal").style.display = "block",
        document.getElementById("modelcontentpregancy").innerHTML = "Month " + month + " doesn't have 31 days!",
        !1;
    if (2 == month) {
        e = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
        if (29 < day || 29 == day && !e)
            return document.getElementById("myModal").style.display = "block",
            document.getElementById("modelcontentpregancy").innerHTML = "February " + year + " doesn't have " + day + " days!",
            !1
    }
    return !0
}
function dispDate(e) {
    return month = e.getMonth() + 1,
    month = month < 10 ? "0" + month : month,
    day = e.getDate(),
    day = day < 10 ? "0" + day : day,
    year = e.getYear(),
    year < 2e3 && (year += 1900),
    year + "-" + month + "-" + day
}
$(".select-items").on("click", "div", function() {
    var e = $(this).html();
    $(".select-selected").html(e),
    $(".select-items").hide()
}),
$(".select-selected").click(function() {
    $(".select-items").show()
});
var span = document.getElementsByClassName("close")[0];
function pregnancyCalc(e) {
    if (menstrual = new Date,
    ovulation = new Date,
    duedate = new Date,
    today = new Date,
    cycle = 0,
    luteal = 0,
    !isValidDate(e.menstrual.value))
        return !1;
    menstrualinput = new Date(e.menstrual.value),
    menstrual.setTime(menstrualinput.getTime()),
    cycle = "" == e.cycle.value ? 28 : e.cycle.value,
    "" != e.cycle.value && (e.cycle.value < 21 || 40 < e.cycle.value) && (document.getElementById("myModal").style.display = "block",
    document.getElementById("modelcontentpregancy").innerHTML = "Your cycle length is either too short or too long for \ncalculations to be very accurate!  We will still try to \ncomplete the calculation with the figure you entered. "),
    luteal = "" == e.luteal.value ? 14 : e.luteal.value,
    "" != e.luteal.value && (e.luteal.value < 9 || 16 < e.luteal.value) && (document.getElementById("myModal").style.display = "block",
    document.getElementById("modelcontentpregancy").innerHTML = "Your luteal phase length is either too short or too long for \ncalculations to be very accurate!  We will still try to complete \nthe calculation with the figure you entered. "),
    ovulation.setTime(menstrual.getTime() + 864e5 * cycle - 864e5 * luteal),
    e.conception.value = dispDate(ovulation),
    duedate.setTime(ovulation.getTime() + 229824e5),
    e.duedate.value = dispDate(duedate);
    var o = today.getTime() - menstrual.getTime();
    if (Math.round(o / 864e5) <= cycle)
        return document.getElementById("myModal").style.display = "block",
        !(document.getElementById("modelcontentpregancy").innerHTML = "As per the selected date and the cycle length pregnancy cannot be identified");
    o = 280 - (duedate - today) / 864e5;
    return weeks = parseInt(o / 7),
    days = Math.floor(o % 7),
    o = weeks + " week" + (1 < weeks ? "s" : "") + ", " + days + " days pregnant",
    e.fetalage.value = o,
    document.getElementById("modelcontentpregancy").innerHTML = "<p ><p style='margin-bottom: 20px;'><img src='assets/images/congratulations-icon-01.png'></p> <b>Congratulations!</b> <p>Your estimated due date is " + e.duedate.value + "</p><p class='colorred'> You are  " + o + "</p><div class='explore-btn'><a href='https://www.lalpathlabs.com/test-for-pregnancy?t=1&vendor=150'>Explore Packages & Tests</a></div><p>Please keep in mind that the result will be an estimation rather than a fixed date.\nDo consult your Gynaecologist for more information.</p>",
    !(document.getElementById("myModal").style.display = "block")
}
function closingpop() {
    document.getElementById("myModal").style.display = "none",
    document.getElementById("effective-date").value = "",
    document.getElementById("ddlcycle").selectedIndex = 0
}
$(document).ready(function() {
    $("#filter-show").on("click", function() {
        $(".after-tric").show()
    }),
    $(".select-opt").on("change", function() {
        $(".after-tric").hide()
    })
});
