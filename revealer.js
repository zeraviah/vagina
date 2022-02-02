( function() {
    
    document.addEventListener( "click", e => {
        if ( e.target.nodeName.charAt( 0 ) === '#' ) return;
        if ( 'click' in e.target.dataset && 'clickClass' in e.target.dataset ) {
            e.preventDefault();
            const el = document.querySelector( e.target.dataset.click );
            if ( el ) {
                el.classList.toggle( e.target.dataset.clickClass );
            }
        } else if ( 'click' in e.target.dataset ) {
            e.preventDefault();
            const el = document.querySelector( e.target.dataset.click );
            if ( el ) {
                if ( getComputedStyle( el ).display === "none" ) {
                    el.style.setProperty( "display", "initial" );
                } else {
                    el.style.setProperty( "display", "none" );
                }
            }
        }
    } );

    document.addEventListener( "mouseover", e => {
        if ( e.target.nodeName.charAt( 0 ) === '#' ) return;
        if ( 'hover' in e.target.dataset && 'hoverClass' in e.target.dataset ) {
            e.preventDefault();
            const el = document.querySelector( e.target.dataset.hover );
            if ( el ) {
                el.classList.add( e.target.dataset.hoverClass );
            }
        } else if ( 'hover' in e.target.dataset ) {
            e.preventDefault();
            const el = document.querySelector( e.target.dataset.hover );
            if ( el ) {
                if ( getComputedStyle( el ).display === "none" ) {
                    el.style.setProperty( "display", "initial" );
                } else {
                    el.style.setProperty( "display", "none" );
                }
            }
        }
    } );

    document.addEventListener( "mouseout", e => {
        if ( e.target.nodeName.charAt( 0 ) === '#' ) return;
        if ( 'hover' in e.target.dataset && 'hoverClass' in e.target.dataset ) {
            e.preventDefault();
            const el = document.querySelector( e.target.dataset.hover );
            if ( el ) {
                el.classList.remove( e.target.dataset.hoverClass );
            }
        } else if ( 'hover' in e.target.dataset ) {
            e.preventDefault();
            const el = document.querySelector( e.target.dataset.hover );
            if ( el ) {
                if ( getComputedStyle( el ).display === "none" ) {
                    el.style.setProperty( "display", "initial" );
                } else {
                    el.style.setProperty( "display", "none" );
                }
            }
        }
    } );

} )();