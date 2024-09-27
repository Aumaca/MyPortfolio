var TxtType = function (el, toRotate, period) {
	this.toRotate = toRotate
	this.el = el
	this.loopNum = 0
	this.period = parseInt(period, 10) || 2000
	this.txt = ""
	this.tick()
	this.isDeleting = false
}

TxtType.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length
	var fullTxt = this.toRotate[i]

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1)
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1)
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>"

	var that = this
	var delta = 200 - Math.random() * 100

	if (this.isDeleting) {
		delta /= 2
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period
		this.isDeleting = true
	} else if (this.isDeleting && this.txt === "") {
		this.isDeleting = false
		this.loopNum++
		delta = 500
	}

	setTimeout(function () {
		that.tick()
	}, delta)
}

// JavaScript for the image popup

window.onload = function () {
	var elements = document.getElementsByClassName("typewrite")
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute("data-type")
		var period = elements[i].getAttribute("data-period")
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period)
		}
	}
	// INJECT CSS
	var css = document.createElement("style")
	css.type = "text/css"
	css.innerHTML = `
        .typewrite > .wrap { 
            border-right: 0.08em solid #fff; 
            animation: blink 0.7s step-end infinite; 
        }
        @keyframes blink {
            50% { border-color: transparent; }
        }
    `
	document.body.appendChild(css)

	var slider1 = tns({
		container: ".my-slider1",
		items: 6,
		slideBy: "page",
		autoplay: true,
		autoWidth: true,
		nav: false,
		controls: false,
		autoplayButtonOutput: false,
	})

	var slider2 = tns({
		container: ".my-slider2",
		items: 6,
		slideBy: "page",
		autoplay: true,
		autoWidth: true,
		nav: false,
		controls: false,
		autoplayButtonOutput: false,
	})

	var slider3 = tns({
		container: ".my-slider3",
		items: 6,
		slideBy: "page",
		autoplay: true,
		autoWidth: true,
		nav: false,
		controls: false,
		autoplayButtonOutput: false,
	})
}
