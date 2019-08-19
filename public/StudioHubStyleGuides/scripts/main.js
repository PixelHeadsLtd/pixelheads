$(document).ready(function () {
	$("nav.bottom-menu li a").click(function() {
		var mylink = $(this);
		if(mylink) {
			$("nav.bottom-menu li").removeClass("selected");
			mylink.parents(".menu-group").first().addClass("selected");
		}
	});
    (function() {
        'use strict';
        // click events
        document.body.addEventListener('click', copy, true);
        function copy(e) {
            // find target element
            var 
                t = e.target,
                c = t.dataset.copytarget,
                inp = (c ? document.querySelector(c) : null);
      
            // is element selectable?
            if (inp && inp.select) {
                // select text
                inp.select();
                try {
                    // copy text
                    document.execCommand('copy');
                    inp.blur();
        
                    // copied animation
                    t.classList.add('copied');
                    setTimeout(function() { t.classList.remove('copied'); }, 1500);
                }
                catch (err) {
                    alert('please press Ctrl/Cmd+C to copy');
                }
      
            }
    
        }

    })();

});

