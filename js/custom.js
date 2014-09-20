if(!pixafy){
    var pixafy = {}
}

pixafy.mainNavigation = new function(){
    var logo = '#logo';
    var hamburger = $('#hamburger');
    var navigation = $('#main-navigation');

    this.logoAnimation = function(){
        var frameWidth = 121, numCols = 5;
        var steppedEase = new SteppedEase(numCols);
        TweenMax.to(logo, 3, {backgroundPosition: '-'+(frameWidth*numCols)+'px 0px', ease:steppedEase, repeat:-1});
    }

    this.mobileNavDisplay = function() {
        hamburger.click(function() {
            navigation.slideToggle(600);
        })
    }
};



// Doc Ready -------
$(function() {

    pixafy.mainNavigation.logoAnimation();
    pixafy.mainNavigation.mobileNavDisplay();

});







