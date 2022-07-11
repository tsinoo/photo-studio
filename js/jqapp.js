$(document).ready(function(){
    
    // UI
// Start Navbar

// for navbutton 
$('.navbuttons').click(function(){
    $('navbuttons').toggleClass('changes');
});

// for navbar 
$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();

    if( getscrolly >= 200){
        $('.navbar').addClass("navmenus");
    }else{
        $('.navbar').removeClass("navmenus");
    }
})

// End Navbar

// Start Mission Section 

$(window).scroll(function (){
    let getscrollY = $(this).scrollTop();

    if(getscrollY >= 650){
        $(".cameraimgs").addClass('fromlefts');
        $(".missiontexts").addClass("fromrights");
    }else{
        $(".cameraimgs").removeClass('fromlefts');
        $(".missiontexts").removeClass("fromrights");
    }
});



// End Mission Section 

//Start Gallary Section
$('.gallerylists').click(function(){
    let datafilter = $(this).attr('data-filter');
    console.log(datafilter);

    if(datafilter === "all"){
        $(".filter").show(400);
    }else{
        $(".filter").not('.'+datafilter).hide(400);

        $(".filter").filter('.'+datafilter).show(400);
    }
});

// for ul active 
$('.gallerylists').click(function(){
    $(this).addClass('.activeitems').siblings().removeClass('activeitems');
});


// remove current active item


// End Gallary Section

// Princing Section 

$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 4300){
        $('.cardones').addClass('movefromlefts');
        $('.cardtwos').addClass('movefrombottoms');
        $('.cardthrees').addClass('movefromrights');
    }else{
        $('.cardones').removeClass('movefromlefts');
        $('.cardtwos').removeClass('movefrombottoms');
        $('.cardthrees').removeClass('movefromrights');
    }
})

// End Princing Section 

// Start Footer Section 



// End Footer Section
})