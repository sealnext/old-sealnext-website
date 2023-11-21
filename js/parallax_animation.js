let lastKnownScrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            handleScroll(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
}, {passive: true});

function handleScroll(scrollPos) {
    var scrolledHeight = window.pageYOffset,
        sealNextWord = document.querySelector('.seal-next-word'),
        iphoneMockup = document.querySelector('.iphone-mockup'),
        wrapperTextTopLeft = document.querySelector('.top-left'),
        wrapperTextTopRight = document.querySelector('.top-right'),
        wrapperTextBottomLeft = document.querySelector('.bottom-left'),
        wrapperTextBottomRight = document.querySelector('.bottom-right'),
        view2Start = document.querySelector('.view-2').offsetTop,
        view2Height = document.querySelector('.view-2').offsetHeight,
        view3Start = document.querySelector('.view-3').offsetTop,
        view3Height = document.querySelector('.view-3').offsetHeight,
        leftColumnImages = document.querySelectorAll('.left-column img'),
        middleColumnImages = document.querySelectorAll('.middle-column img'),
        rightColumnImages = document.querySelectorAll('.right-column img');
    ;

    if (window.innerWidth <= 600) {
        sealNextWord.style.transform = 'translate3d(0, ' + -(scrolledHeight * 0.5) + 'px, -2px) scale(.8)';
        wrapperTextTopLeft.style.transform = 'translate3d(0, ' + -(scrolledHeight * 0.5) + 'px, -2px) scale(.8)';
        wrapperTextTopRight.style.transform = 'translate3d(0, ' + -(scrolledHeight * 0.5) + 'px, -2px) scale(.8)';
        wrapperTextBottomLeft.style.transform = 'translate3d(0, ' + -(scrolledHeight * 0.5) + 'px, -2px) scale(.8)';
        wrapperTextBottomRight.style.transform = 'translate3d(0, ' + -(scrolledHeight * 0.5) + 'px, -2px) scale(.8)';
    } else {
        sealNextWord.style.transform = 'translate3d(0, ' + -(scrolledHeight * 0.9) + 'px, -1px) scale(1)';
        wrapperTextTopLeft.style.transform = 'translate3d(0, ' + -(scrolledHeight * 0.9) + 'px, -1px) scale(1)';
        wrapperTextTopRight.style.transform = 'translate3d(0, ' + -(scrolledHeight * 0.9) + 'px, -1px) scale(1)';
        wrapperTextBottomLeft.style.transform = 'translate3d(0, ' + -(scrolledHeight * 0.9) + 'px, -1px) scale(1)';
        wrapperTextBottomRight.style.transform = 'translate3d(0, ' + -(scrolledHeight * 0.9) + 'px, -1px) scale(1)';
    }

    if (scrolledHeight >= view2Start && scrolledHeight <= (view2Start + view2Height)) {
        var rotation = (scrolledHeight - view2Start) * -0.08;
        if (rotation >= -19.5) {
            iphoneMockup.style.transform = 'translate(-50%, -50%) rotate(' + rotation + 'deg)';
        }
    }

    if (scrolledHeight >= (view2Start + view2Height)/2 && scrolledHeight <= (view3Start + view3Height)) {
        var leftRightParallaxOffset = (scrolledHeight - (view2Start + view2Height)/2) * 0.08;
        var middleParallaxOffset = (scrolledHeight - (view2Start + view2Height)/2) * -0.08;

        leftColumnImages.forEach(function (img) {
            img.style.transform = 'translate3d(0, ' + leftRightParallaxOffset + 'px, 0)';
        });

        middleColumnImages.forEach(function (img) {
            img.style.transform = 'translate3d(0, ' + middleParallaxOffset + 'px, 0)';
        });

        rightColumnImages.forEach(function (img) {
            img.style.transform = 'translate3d(0, ' + leftRightParallaxOffset + 'px, 0)';
        });
    }
}
