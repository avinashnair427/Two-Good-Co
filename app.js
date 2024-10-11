let logoHeight
let id = null
let playButtonSize
let productCursorSize
let swiper
let testimonyTimeout = null
let testimonyIndex = null
let previousTestimonyIndex = 2
const testimonyContainer = document.querySelector('.testimony-container')
function setLogoHeight(){
    logoHeight = document.querySelector('.pageTitle1').scrollHeight
}
function navbarHoverAnimation(){
    const shop = document.querySelector('.shop_')
    const wholesale = document.querySelector('.wholesale')
    const cartering = document.querySelector('.catering')
    const donate = document.querySelector('.donate')

    shop.addEventListener('mouseenter', () => {
        gsap.fromTo('.shop_ .animatedLine', 
            {
                left: '0',
                right: '100%'
            },
            {
                left: '0',
                right: '0',
                duration: 0.25
        })
    })
    shop.addEventListener('mouseleave', () => {
        gsap.fromTo('.shop_ .animatedLine', 
            {
                left: '0',
                right: '0'
            },
            {
                left: '100%',
                right: '0',
                duration: 0.25
        })
    })
    wholesale.addEventListener('mouseenter', () => {
        gsap.fromTo('.wholesale .animatedLine', 
            {
                left: '0',
                right: '100%'
            },
            {
                left: '0',
                right: '0',
                duration: 0.25
        })
    })
    wholesale.addEventListener('mouseleave', () => {
        gsap.fromTo('.wholesale .animatedLine', 
            {
                left: '0',
                right: '0'
            },
            {
                left: '100%',
                right: '0',
                duration: 0.25
        })
    })
    cartering.addEventListener('mouseenter', () => {
        gsap.fromTo('.donate .animatedLine', 
            {
                left: '0',
                right: '100%'
            },
            {
                left: '0',
                right: '0',
                duration: 0.25
        })
    })
    cartering.addEventListener('mouseleave', () => {
        gsap.fromTo('.donate .animatedLine', 
            {
                left: '0',
                right: '0'
            },
            {
                left: '100%',
                right: '0',
                duration: 0.25
        })
    })
    donate.addEventListener('mouseenter', () => {
        gsap.fromTo('.donate .animatedLine', 
            {
                left: '0',
                right: '100%'
            },
            {
                left: '0',
                right: '0',
                duration: 0.25
        })
    })
    donate.addEventListener('mouseleave', () => {
        gsap.fromTo('.donate .animatedLine', 
            {
                left: '0',
                right: '0'
            },
            {
                left: '100%',
                right: '0',
                duration: 0.25
        })
    })
}
function navbarAndLogoScrollAnimation(){
    gsap.to('.navbarListItem', {
        scrollTrigger: {
            trigger: '.navbarListItem',
            start: 'top top',
            end: '80px top',
            toggleActions: 'none play reverse none'
        },
        y: -6,
        opacity: 0,
        duration: 0.1,
        ease: 'ease-in'
    })
    gsap.to('.catering img', {
        y: -6,
        opacity: 0,
        duration: 0.1,
        ease: 'ease-in',
        scrollTrigger: {
            trigger: '.navbarListItem',
            start: 'top top',
            end: '80px top',
            toggleActions: 'none play reverse none'
        }
    })
    gsap.to('.pageTitle1', {
        y: `${-logoHeight}`,
        duration: 0.1,
        ease: 'ease-in',
        scrollTrigger: {
            trigger: '.navbarListItem',
            start: 'top top',
            end: '80px top',
            toggleActions: 'none play reverse none'
        }
    })
    gsap.to('.pageTitle2', {
        y: `${-logoHeight}`,
        duration: 0.1,
        ease: 'ease-in',
        scrollTrigger: {
            trigger: '.navbarListItem',
            start: 'top top',
            end: '80px top',
            toggleActions: 'none play reverse none'
        }
    })
}
function introTextScrollAnimation(){
    gsap.fromTo('main .webpage-intro .intro-text h1 .text', {
        yPercent: 100,
        duration: 0.5,
        opacity: 0,
        ease: 'ease-out'
    },{
        yPercent: 0,
        opacity: 1,
        stagger: 0.3,
        onComplete: () => {
            document.querySelector('.video-container').style.opacity = `1`
            video.play()
        }
    })
}
function shopItemsAnimation(){
    const shopItems = document.querySelectorAll('.shop-items')
    shopItems.forEach(shopItem => {
        shopItem.addEventListener('mouseenter', () => {
            gsap.to(shopItem.querySelector('.content-wrapper'), {
                height: 185,
                duration: 0.15,
                ease: 'ease-out'
            })
            gsap.to(shopItem.querySelector('.content'), {
                y: 0,
                opacity: 1,
                duration: 0.2,
                ease: 'ease-out'
            })
        })
        shopItem.addEventListener('mouseleave', () => {
            gsap.to(shopItem.querySelector('.content-wrapper'), {
                height: 0,
                duration: 0.15,
                ease: 'ease-in'
            })
            gsap.to(shopItem.querySelector('.content'), {
                y: -10,
                opacity: 0,
                duration: 0.2,
                ease: 'ease-in'
            })
        })
    })
}
function buttonAnimation(){
    const buttons = document.querySelectorAll('.button')
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.fromTo('.button .animatedLine', 
                {
                    left: '0',
                    right: '100%'
                },
                {
                    left: '0',
                    right: '0',
                    duration: 0.25
            })
        })
        button.addEventListener('mouseleave', () => {
            gsap.fromTo('.button .animatedLine', 
                {
                    left: '0',
                    right: '0'
                },
                {
                    left: '100%',
                    right: '0',
                    duration: 0.25
            })
        })
    })
    
}
function shopAnimation(){
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.shop-container',
            start: 'top 50%',
            toggleActions: 'play none none none'
        }
    })
    timeline.to('.shop-element1', {
        opacity: 1,
        duration: 0.1,
        ease: 'ease-out'
    })
    timeline.to('.shop-element1 img', {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'ease-out'
    }, '>')
    timeline.to('.shop-element2', {
        opacity: 1,
        duration: 0.1,
        ease: 'ease-out'
    }, 0.2)
    timeline.to('.shop-element2 img', {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'ease-out'
    }, '>')
    timeline.to('.shop-element3', {
        opacity: 1,
        duration: 0.1,
        ease: 'ease-out'
    }, 0.4)
    timeline.to('.shop-element3 img', {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'ease-out'
    }, '>')
}
function productAnimation(){
    const timeline1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.product1',
            start: 'top center'
        }
    })
    timeline1.to('.product1', {
        y: 0,
        opacity: 1,
        duration: 0.5
    })
    timeline1.to('.product2', {
        y: 0,
        opacity: 1,
        duration: 0.5
    }, '<0.1')
    const timeline2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.product3',
            start: 'top center'
        }
    })
    timeline2.to('.product3', {
        y: 0,
        opacity: 1,
        duration: 0.5
    })
    timeline2.to('.product4', {
        y: 0,
        opacity: 1,
        duration: 0.5
    }, '<0.1')
}
function ourImpactAnimation(){
    gsap.to('.our-impact-image', {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.our-impact',
            start: 'top center'
        }
    })
}
function footerAnimation(){
    gsap.to('.footer-top', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.footer-top',
            start: 'top 70%'
        }
    })
    gsap.to('.left-text > *', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
        stagger: 0.05,
        scrollTrigger: {
            trigger: '.footer-top',
            start: 'top 70%'
        }
    })
    gsap.to('.right-text > *', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
        stagger: 0.05,
        scrollTrigger: {
            trigger: '.footer-top',
            start: 'top 70%'
        }
    })
    gsap.to('.outro', {
        transform: `translateY(0px)`,
        opacity: 1,
        duration: 0.5,
        delay: 0.8,
        scrollTrigger: {
            trigger: '.footer-top',
            start: 'top 70%'
        }
    })
}
function playButtonSizeCalculate(){
    playButtonSize = document.querySelector('.play').scrollWidth
}
function videoPlayAnimation(){
    let count = 0
    video.addEventListener('mousemove', (e) => {
        if(count === 0){
            gsap.to('.play', {
                left: e.x - playButtonSize/2,
                top: e.y - playButtonSize/2,
                duration: 0
            })
        }
        else{
            gsap.to('.play', {
                left: e.x - playButtonSize/2,
                top: e.y - playButtonSize/2
            })
        }
        count++
    })
    video.addEventListener('mouseenter', () => {
        gsap.to('.play', {
            scale: 1,
            opacity: 1
        })
    })
    video.addEventListener('mouseleave', () => {
        gsap.to('.play', {
            scale: 0,
            opacity: 0
        })
        count = 0
    })
}
function productCursorAnimation(){
    const productOverlays = document.querySelectorAll('.product-overlay')
    document.addEventListener('mousemove', (e) => {
        gsap.to('.product-cursor', {
            left: e.x,
            top: e.y
        })
    })
    productOverlays.forEach(productOverlay => {
        productOverlay.addEventListener('mouseenter', () => {
            gsap.to('.product-cursor', {
                transform: `translate(-50%, -50%) scale(1)`,
                opacity: 1
            })
        })
    })
    productOverlays.forEach(productOverlay => {
        productOverlay.addEventListener('mouseleave', () => {
            gsap.to('.product-cursor', {
                transform: `translate(-50%, -50%) scale(0)`,
                opacity: 1
            })
        })
    })
}
function footerIconAnimation(){
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.footer-icon-wrapper',
            start: 'top bottom',
            toggleActions: 'play none none reset'
        }
    })
    timeline.fromTo('.circle1', {
        scale: 1.1,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'ease-out'
    })
    timeline.fromTo('.circle2', {
        scale: 1.1,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'ease-out'
    }, '<0.1')
    timeline.fromTo('.cross1', {
        scale: 1.1,
        opacity: 0,
        rotation: 15
    }, {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.5,
        ease: 'ease-out'
    }, '<0.1')
    timeline.fromTo('.cross2', {
        scale: 1.1,
        opacity: 0,
        rotation: 15
    }, {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.5,
        ease: 'ease-out'
    }, '<0.1')
}
function headerPointerEvents(){
    const header = document.querySelector('header')
    const icons = header.querySelector('.icons')
    const logoBox = document.querySelector('.logoBox')
    window.addEventListener('scroll', () => {
        if(window.scrollY > 130){
            header.style.pointerEvents = `none`
            icons.style.pointerEvents = `auto`
            logoBox.style.pointerEvents = `auto`
        }
        else{
            header.style.pointerEvents = `auto`
            icons.style.pointerEvents = `auto`
            logoBox.style.pointerEvents = `auto`
        }
    })
}
function videoPlayOnClick(){
    video.addEventListener('click', () => {
        const playPromise = video.play();
        playPromise.then(() => {
            video.controls = true
            video.muted = false
            video.currentTime = 0
        }).catch(() => {
            video.controls = true
            video.muted = false
            video.currentTime = 0
        })
        document.querySelector('.play').style.display = `none`
    })
    video.addEventListener('ended', () => {
        video.currentTime = 0
    })
}
function swiperFunction(){
    swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 'auto'
    })
    swiper.slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            if(!swiper.isGrabbing){
                if(window.innerWidth > 700){
                    if(index === 0){
                        swiper.slideToLoop(17, 300)
                    }
                    else if(index === 1){
                        swiper.slideToLoop(18, 300)
                    }
                    else{
                        swiper.slideToLoop(index - 2, 300)
                    }
                }
                else{
                    if(index === 0){
                        swiper.slideToLoop(18, 300)
                    }
                    else{
                        swiper.slideToLoop(index - 1, 300)
                    }
                }
            }
        })
    })
    swiper.on('transitionEnd', () => {
        swiper.slides.forEach(slide => {
            slide.classList.remove('active')
        })
        if(window.innerWidth > 700){
            swiper.slides[swiper.activeIndex + 2].classList.add('active')
        }
        else{
            swiper.slides[swiper.activeIndex + 1].classList.add('active')
        }
        
    })
}
function showTestimony(){
    swiper.on('slideChange', () => {
        if(window.innerWidth > 700){
            if(testimonyTimeout){
                clearTimeout(testimonyTimeout)
                testimonyTimeout = null
            }
            testimonyTimeout = setTimeout(() => {
                if(swiper.realIndex === 17) testimonyIndex = 0
                else if(swiper.realIndex === 18) testimonyIndex = 1
                else testimonyIndex = swiper.realIndex + 2
                if(previousTestimonyIndex !== testimonyIndex){
                    const timeout1 = setTimeout(() => {
                        testimonyContainer.innerHTML = testimonies[testimonyIndex]
                        testimonyContainer.style.height = `${document.querySelector('.testimony').scrollHeight}px`
                        gsap.from(`.testimony[data-id='${testimonyIndex}'] h1`, {
                            y: 50,
                            opacity: 0,
                            duration: 0.6,
                            stagger: 0.05
                        })
                    },300)
                }
                previousTestimonyIndex = testimonyIndex
                clearTimeout(testimonyTimeout)
                testimonyTimeout = null
            },50)
        }
        else{
            if(testimonyTimeout){
                clearTimeout(testimonyTimeout)
                testimonyTimeout = null
            }
            testimonyTimeout = setTimeout(() => {
                if(swiper.realIndex === 18) testimonyIndex = 0
                else testimonyIndex = swiper.realIndex + 1
                if(previousTestimonyIndex !== testimonyIndex){
                    setTimeout(() => {
                        testimonyContainer.innerHTML = testimonies[testimonyIndex]
                        testimonyContainer.style.height = `${document.querySelector('.testimony').scrollHeight}px`
                        gsap.from(`.testimony[data-id='${testimonyIndex}'] h1`, {
                            y: 50,
                            opacity: 0,
                            duration: 0.6,
                            stagger: 0.05
                        })
                    },300)
                }
                previousTestimonyIndex = testimonyIndex
                clearTimeout(testimonyTimeout)
                testimonyTimeout = null
            },50)
        }
    })
}
addEventListener('resize', () => {
    setLogoHeight()
    if(id){
        clearTimeout(id)
        id = null
    }
    id = setTimeout(() => {
        gsap.killTweensOf('.navbarListItem, .catering img, .pageTitle1, .pageTitle2')
        navbarAndLogoScrollAnimation()
        id = null
    },100)
    playButtonSizeCalculate()
})
addEventListener('DOMContentLoaded', () => {
    document.querySelector('.testimony-container').style.height = `${document.querySelector('.testimony').scrollHeight}px`
})
setLogoHeight()
navbarAndLogoScrollAnimation()
navbarHoverAnimation()
introTextScrollAnimation()
playButtonSizeCalculate()
const video = document.querySelector('.video')
video.pause()
videoPlayOnClick()
shopItemsAnimation()
buttonAnimation()
videoPlayAnimation()
shopAnimation()
productAnimation()
ourImpactAnimation()
footerAnimation()
footerIconAnimation()
headerPointerEvents()
productCursorAnimation()
swiperFunction()
const testimonies = {
    2: `<div class="testimony" data-id=2><h1>THANK YOU SO MUCH FOR</h1><h1>THE BEAUTIFUL CATERING; IT</h1><h1>MEANS A LOT WORKING</h1><h1>WITH A COMPANY SUCH AS</h1><h1>TWO GOOD CO.</h1></div>`,
    3: `<div class="testimony" data-id=3><h1>THE HAMPERS WE ORDERED</h1><h1>WERE LOVELY AND THE</h1><h1>TEAM ARE WONDERFUL TO</h1><h1>LIASE WITH.</h1></div>`,
    4: `<div class="testimony" data-id=4><h1>MY PACKAGE JUST ARRIVED</h1><h1>AND THE PRESENTATION IS</h1><h1>SO BEAUTIFUL; ELEGANT,</h1><h1>MAGICAL AND</h1><h1>MEANINGFUL, WITH THE</h1><h1>ITEMS WRAPPED IN</h1><h1>DELICIOUS SMELLING TISSUE</h1><h1>PAPER. GORGEOUS; WILL BE</h1><h1>BACK FOR MORE.</h1></div>`,
    5: `<div class="testimony" data-id=5><h1>I THINK I SPEAK FOR</h1><h1>EVERYONE WHEN I SAY WE</h1><h1>ARE VERY GREATFUL TO</h1><h1>HAVE BEEN ABLE TO COME</h1><h1>IN AND HELP OUT FOR THE</h1><h1>DAY; THE WORK YOU DO IS</h1><h1>AMAZING</h1></div>`,
    6: `<div class="testimony" data-id=6><h1>EVERYONE AT TWO GOOD</h1><h1>ARE LOVELY TO WORK WITH.</h1><h1>CATERING WAS EXCELLENT</h1><h1>AND WELL PRICED, ALL FOR</h1><h1>A GOOD CAUSE... WHAT'S</h1><h1>NOT TO LOVE?</h1></div>`,
    7: `<div class="testimony" data-id=7><h1>MY CEO ASKED ME WHO I</h1><h1>HAD USED FOR THE</h1><h1>CATERING; WHEN I</h1><h1>EXPLAINED ABOUT TWO</h1><h1>GOOD, SHE SAID "OH,</h1><h1>THAT'S WHY - THE FOOD IS</h1><h1>MADE WITH LOVE."</h1></div>`,
    8: `<div class="testimony" data-id=8><h1>THIS IS THE BEST CATERING</h1><h1>FOOD I HAVE HAD IN YEARS.</h1><h1>ALL THE MEALS WERE</h1><h1>ABSOLUTELY DELICIOUS,</h1><h1>WELL PRESENTED AND</h1><h1>GENEROUS.</h1></div>`,
    9: `<div class="testimony" data-id=9><h1>GREAT CAUSE, GREAT</h1><h1>PEOPLE AND ABSOLUTELY</h1><h1>GREAT FOR THE</h1><h1>ENVIRONMENTAL.</h1></div>`,
    10: `<div class="testimony" data-id=10><h1>THANK YOU SO VERY MUCH</h1><h1>FOR THE BEAUTIFUL GIFT</h1><h1>PACKS; MY HEART MELTED. I</h1><h1>NEARLY CRIED WHEN I</h1><h1>OPENED ONE; I CAN ONLY</h1><h1>IMAGINE HOW THE WOMEN</h1><h1>IN THE SHELTERS FEEL WHEN</h1><h1>THEY RECEIVE SUCH A GIFT.</h1></div>`,
    11: `<div class="testimony" data-id=11><h1>I WANTED TO SAY A</h1><h1>MASSIVE THANK YOU FOR</h1><h1>THE ABSOLUTELY BRILLIANT</h1><h1>CATERING AT OUR TEAM</h1><h1>OFFSITE YESTERDAY. THE</h1><h1>FOOD WAS ABSOLUTELY</h1><h1>MAGNIFICIENT - HIGH</h1><h1>QUALITY, FRESH AND</h1><h1>DELICIOUS. I HAD SO MANY</h1><h1>POSITIVE COMMENTS FROM</h1><h1>MY TEAM...I WILL DEFINITELY</h1><h1>BE A REPEAT CUSTOMER</h1></div>`,
    12: `<div class="testimony" data-id=12><h1>LOVE THE QUALITY OF THE</h1><h1>FOOD AND LEVEL OF</h1><h1>CUSTOMER SERVICE EQUALS</h1><h1>THE 'MEANINGFULNESS' OF</h1><h1>EVERY PURCHASE.</h1></div>`,
    13: `<div class="testimony" data-id=13><h1>I CAN'T THANK YOU</h1><h1>ENOUGH FOR THE AMAZING</h1><h1>FOOD YOUR TEAM</h1><h1>PROVIDED US TODAY. OUR</h1><h1>STAFF COULDN'T SPEAK</h1><h1>HIGHLY ENOUGH OF THE</h1><h1>FISH AND THE SALADS;</h1><h1>LOOKING FORWARD TO</h1><h1>WORKING TOGETHER MORE.</h1></div>`,
    14: `<div class="testimony" data-id=14><h1>BLOWN AWAY BY THE</h1><h1>QUALITY OF THE FOOD AND</h1><h1>PRESENTATION.</h1></div>`,
    15: `<div class="testimony" data-id=15><h1>I LOVE THE WAY THEY</h1><h1>OPERATE; DONATING IS ONE</h1><h1>THING BUT EMPLOYING</h1><h1>AND EMPOWERING WOMEN</h1><h1>IS SO IMPORTANT.</h1></div>`,
    16: `<div class="testimony" data-id=16><h1>IT WAS AN ABSOLUTE</h1><h1>PLEASURE TO PARTNER WITH</h1><h1>TWO GOOD CO FOR THE</h1><h1>EVENT. YOUR FOOD WAS</h1><h1>ABSOLUTELY DELICIOUS! THE</h1><h1>FEEDBACK WE HAVE</h1><h1>RECEIVED HAS BEEN</h1><h1>RESOUNDINGLY POSITIVE -</h1><h1>WITH MANY PEOPLE</h1><h1>HAVING BEEN DEEPLY</h1><h1>TOUCHED BY THE</h1><h1>EXPERIENCE.</h1></div>`,
    17: `<div class="testimony" data-id=17><h1>I LOVE THE STORY BEHIND</h1><h1>THIS BUSINESS AND THE</h1><h1>PEOPLE WHO RUN AND</h1><h1>WORK IN IT - IT FEELS GOOD</h1><h1>TO WORK WITH PEOPLE</h1><h1>DOING A GOOD JOB</h1></div>`,
    18: `<div class="testimony" data-id=18><h1>MY PACKAGE JUST ARRIVED</h1><h1>AND THE PRESENTATION IS</h1><h1>SO BEAUTIFUL; ELEGANT,</h1><h1>MAGICAL AND</h1><h1>MEANINGFUL, WITH THE</h1><h1>ITEMS WRAPPED IN</h1><h1>DELICIOUS SMELLING TISSUE</h1><h1>PAPER. GORGEOUS; WILL BE</h1><h1>BACK FOR MORE.</h1></div>`,
    0: `<div class="testimony" data-id=0><h1>HOW GOOD IS YOUR COOK</h1><h1>BOOK!? OH MY, OH MY; I</h1><h1>AM GOING TO HAVE NO</h1><h1>ISSUES WORKING MY WAY</h1><h1>THROUGH IT THIS YEAR, IT'S</h1><h1>ALL SO BLOODY DELICIOUS.</h1></div>`,
    1: `<div class="testimony" data-id=1><h1>AN IMMENSELY GREAT</h1><h1>COMPANY... AND WHAT A</h1><h1>GREAT CAUSE DRIVING THE</h1><h1>BUSINESS.</h1></div>`
}
showTestimony()