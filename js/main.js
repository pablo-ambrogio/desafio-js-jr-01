let linksNav = document.querySelectorAll( '.nav__link' );
let linksFooter = document.querySelectorAll( '.footer__link' );

// console.log( ...linksNav );
// console.log( ...linksFooter );

let linkNav = [...linksNav];
let linkFooter = [...linksFooter];

// console.log( linkNav );
// console.log( linkFooter );

linkNav.forEach( ( link , i) => {
    linkNav[ i ].addEventListener( 'mouseenter', () => {

        linkNav[ i ].addEventListener( 'mouseleave', () => {
            linkNav[ i ].classList.remove( 'nav__link--hover' );
        } );

        linkNav[ i ].classList.add( 'nav__link--hover' );

    } );
} );

linkFooter.forEach( ( link , i) => {
    linkFooter[ i ].addEventListener( 'mouseover', () => {
        
        linkFooter[ i ].addEventListener( 'mouseleave', () => {
            linkFooter[ i ].classList.remove( 'footer__link--hover' );
        } );

        linkFooter[ i ].classList.add( 'footer__link--hover' );
    } );
} );


//* Hover en button

let button = [...document.getElementsByTagName( 'button' )];

console.log( button );


button.forEach( ( cadaButton, i ) => {

    button[ i ].addEventListener( 'mouseover', () => {
        button[ i ].classList.add( 'header-section__button--hover' );
        
        button[ i ].classList.add( 'subscription__button--hover' );

        button[ i ].addEventListener( 'mouseleave', () => {

            button[ i ].classList.remove( 'header-section__button--hover' );
        
            button[ i ].classList.remove( 'subscription__button--hover' );
        } );
    } );
} )



//* Validación de Email

let email = document.getElementById( 'email' );
let buttonSend = document.getElementById( 'button' );
let message = document.getElementById( 'message' );
let formSubs = document.getElementById( 'formSubscription' );


formSubs.addEventListener( 'submit', ( event ) => {
    event.preventDefault();
} );


message.style.visibility = 'hidden';

let enviar = () => {

    let verificarCaracteres = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if( verificarCaracteres.test( email.value )) {
        message.innerHTML = ' Perfecto ';
        message.style.visibility = 'visible';
        message.style.color = 'green';
    }
    else {
        message.innerHTML = ' Please enter a valid email addres ';
        message.style.visibility = 'visible';
        message.style.color = '#ff4242';
    }
}

buttonSend.addEventListener( 'click', enviar );