"use strict";

const atorny_btn = document.querySelector(".attorneys button")
const atorny_readmore = document.querySelector(".attorneys p span");
atorny_readmore.style.display="none"
  

  
    function myFunction(see = atorny_readmore, btn=atorny_btn ) { 
      if (see.style.display =="none") {
          see.style.display = "block";
          btn.innerHTML="SEE LESS"
      } else {
          see.style.display = "none";
          btn.innerHTML="SEE MORE"
      }
  
    };

//  read more button -1//

    const lang_readmore_1 = document.querySelector(".laguage p .s-1");
    const lang_btn_1 = document.querySelector(".laguage .btn-1");
    lang_readmore_1.style.display='none'

    function readMore1(see = lang_readmore_1, btn=lang_btn_1 ) { 
      if (see.style.display =="none") {
          see.style.display = "block";
          btn.innerHTML="READ LESS"
      } else {
          see.style.display = "none";
          btn.innerHTML="READ MORE"
      }
  
    };


    //  read more button -2//

    const lang_readmore_2 = document.querySelector(".laguage p .s-2");
    const lang_btn_2 = document.querySelector(".laguage .btn-2");
    lang_readmore_2.style.display='none'

    function readMore2(see = lang_readmore_2, btn=lang_btn_2 ) { 
      if (see.style.display =="none") {
          see.style.display = "block";
          btn.innerHTML="READ LESS"
      } else {
          see.style.display = "none";
          btn.innerHTML="READ MORE"
      }
  
    };

    //  read more button-3//

    const lang_readmore_3 = document.querySelector(".laguage p .s-3");
    const lang_btn_3 = document.querySelector(".laguage .btn-3");
    lang_readmore_3.style.display='none'

    function readMore3(see = lang_readmore_3, btn=lang_btn_3 ) { 
      if (see.style.display =="none") {
          see.style.display = "block";
          btn.innerHTML="READ LESS"
      } else {
          see.style.display = "none";
          btn.innerHTML="READ MORE"
      }
  
    };

    const lang_readmore_4 = document.querySelector(".laguage p .s-4");
    const lang_btn_4 = document.querySelector(".laguage .btn-4");
    lang_readmore_4.style.display='none'

    function readMore4(see = lang_readmore_4, btn=lang_btn_4 ) { 
      if (see.style.display =="none") {
          see.style.display = "block";
          btn.innerHTML="READ LESS"
      } else {
          see.style.display = "none";
          btn.innerHTML="READ MORE"
      }
  
    };


    // active nav color js //


   
    