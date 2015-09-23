function pokazBlad($pole, komunikat){

    var $formGroup = $pole.closest('.form-group');
    $formGroup.addClass('has-error');

    var $span = $('<span>');
    $span.addClass('help-block').text(komunikat);

    $formGroup.find('.col-sm-10').append($span);
}

function wyczyscBladFormularza(){
    $('#registerForm .form-group').removeClass('has-error');
    $('#registerForm').find('span.help-block').remove();
}

function wyczyscBladPola($pole){
    var $formGroup = $pole.closest('.form-group');
    $formGroup.removeClass('has-error');
    $formGroup.find('span.help-block').remove();
}

function sprawdzPoleImie(){
    var $poleImie = $('[name="imie"]');
    var imie = $.trim( $poleImie.val() );

    if( '' == imie ){
        pokazBlad($poleImie, 'Pole imie nie może być puste');    
    }else if( imie.length < 3 || imie.length > 100 ){
        pokazBlad($poleImie, 'Pole imie nie może być krótsze niż 3 i dłuższe niż 100 znaków');
    }
}

function sprawdzPoleEmail(){
    var $poleEmail = $('[name="email"]');
    var email = $.trim( $poleEmail.val() );

    var $regexp = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;

    if( '' == email ){
        pokazBlad($poleEmail, 'Pole Email nie może być puste');
    }else if( !$regexp.test(email) ){
        pokazBlad($poleEmail, 'Pole email musi mieć poprawny format');
    }
}

function sprawdzPolePlec(){
    var $polePlec = $('[name="plec"]');

    if( !$polePlec.is(':checked') ){
        pokazBlad($polePlec, 'Musisz wybrać płeć');
    }
}

function sprawdzPoleZainteresowania(){
    var $poleZainteresowania = $('[name="zainteresowania"]');

    var liczbaZainteresowan = 0;

    $poleZainteresowania.each(function(){
        if( $(this).is(':checked') ){
            liczbaZainteresowan++;
        }
    });

    if( liczbaZainteresowan < 3 || liczbaZainteresowan > 5 ){
        pokazBlad($poleZainteresowania, 'Liczba zainteresowań nie może być mniejsza niż 3 i większa niż 5');
    }
}

function sprawdzPoleKraj(){
    var $poleKraj = $('[name="kraj"]');

    if( '' == $poleKraj.val() ){
        pokazBlad($poleKraj, 'Musisz wybrać kraj');
    }
}

function sprawdzPoleOmnie(){
    var $poleOmnie = $('[name="about"]');
    var oMnie = $.trim( $poleOmnie.val() );
    
    if(''  == oMnie){
        pokazBlad($poleOmnie, 'Pole O mnie nie może być puste');
    }else if(oMnie.length > 100){
        pokazBlad($poleOmnie, 'Pole O mnie nie może być dłuższe niż 100 znaków');
    }
}

function sprawdzPoleAgree(){
    var $poleAgree = $('[name="agree"]');

    if( !$poleAgree.is(':checked') ){
        pokazBlad($poleAgree, 'Musisz potwierdzić zgodę na regulamin serwisu');
    }
}

var $poleImie = $('[name="imie"]');
var $poleEmail = $('[name="email"]');
var $polePlec = $('[name="plec"]');
var $poleZainteresowania = $('[name="zainteresowania"]');
var $poleKraj = $('[name="kraj"]');
var $poleOmnie = $('[name="about"]');
var $poleAgree = $('[name="agree"]');

$poleImie.blur(function(){
    wyczyscBladPola( $(this) );
    sprawdzPoleImie();
});

$poleEmail.blur(function(){
    wyczyscBladPola( $(this) );
    sprawdzPoleEmail();
});

$polePlec.click(function(){
    wyczyscBladPola( $(this) );
    sprawdzPolePlec();
});

$poleZainteresowania.click(function(){
    wyczyscBladPola( $(this) );
    sprawdzPoleZainteresowania();
});

$poleKraj.change(function(){
    wyczyscBladPola( $(this) );
    sprawdzPoleKraj();
});

$poleOmnie.blur(function(){
    wyczyscBladPola( $(this) );
    sprawdzPoleOmnie();
});

$poleAgree.click(function(){
    wyczyscBladPola( $(this) );
    sprawdzPoleAgree();
});

$('#registerForm').submit(function(evt){

    wyczyscBladFormularza();

    sprawdzPoleImie();
    sprawdzPoleEmail();
    sprawdzPolePlec();
    sprawdzPoleZainteresowania();
    sprawdzPoleKraj();
    sprawdzPoleOmnie();
    sprawdzPoleAgree();

    if( $('#registerForm .form-group.has-error').size() > 0 ){

        evt.preventDefault();
    }


    // poleImie
    /*var $poleImie = $('[name="imie"]');  // tworzymy obiekt jQuery dla danego atrybutu
    var imie = $.trim( $poleImie.val() );  // następnie dla tego obiektu przypisujemy zmienną oraz dodajemy funkcję .val() ponieważ jest to pole textowe

    if( '' == imie ){

        // console.log('Pole imie nie może być puste');
        pokazBlad($poleImie, 'Pole imie nie może być puste');

    }else if( imie.length < 3 || imie.length > 100 ){

        // console.log('Pole imie nie może być krótsze niż 3 i dłuższe niż 100 zanków');
        pokazBlad($poleImie, 'Pole imie nie może być krótsze niż 3 i dłuższe niż 100 znaków');
    }*/

    //poleEmail
    /*var $poleEmail = $('[name="email"]');
    var email = $.trim( $poleEmail.val() );

    var regexp = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;

    if( '' == email ){

        // console.log('Pole Email nie może byc puste');
        pokazBlad($poleEmail, 'Pole Email nie może byc puste');

    }else if ( !regexp.test(email) ) {

        // console.log('Pole email musi mieć poprawny format');
        pokazBlad($poleEmail, 'Pole email musi mieć poprawny format');
    };*/

    //polePlec
    /*var $polePlec = $('[name="plec"]');   // tworzymy obiekt jQuery dla danego atrybutu. Tutaj nie musimy juz przypisywać zmiennej dla obiektu ponieważ jest to pole typu radio/checkbox

    if( !$polePlec.is(':checked') ){

        // console.log('Musisz wybrać płeć');
        pokazBlad($polePlec, 'Musisz wybrać płeć');
    }*/

    //poleZainteresowania
    /*var $poleZainteresowania = $('[name="zainteresowania"]');

    var liczbaZainteresowan = 0;

    // for( var i=0, zl = $poleZainteresowania.size(); i<zl; i++){


    //     var checkbox = $poleZainteresowania[i];
    //     var $checkbox = $(checkbox); // toArray - zrobienie tablicy poprzez opakowanie zmiennej checkbox w -> $(). Powstał obiekt jQuery $checkbox gdzie $ wskazuje na to, że jest to obiekt jQuery.
    //      // console.log(checkbox);
    //      // console.log($checkbox);


    //     if( $checkbox.is(':checked') ){

    //         liczbaZainteresowan++;
    //     }

        $poleZainteresowania.each(function(){

            if( $(this).is(':checked') ){

                liczbaZainteresowan++;
            }
        });
           
            
        if( liczbaZainteresowan < 3 || liczbaZainteresowan > 5 ){

            // console.log('Liczba zainteresowań nie może być mniejsza niż 3 i większa niż 5');
            pokazBlad($poleZainteresowania, 'Liczba zainteresowań nie może być mniejsza niż 3 i większa niż 5');
        }*/

    // poleKraj
    /*var $poleKraj = $('[name="kraj"]');

    if( !$poleKraj.val() ) {  // $poleKraj musi mieć .val() ponieważ w odróżnieniu od pól radio i checkbox(gdzie samo $polePlec wystarczy aby odczytać czy to pole jest checked) nie ma jak odczytać czy jest coś zaznaczone. Do każdego <selecta> dopisany jest atrybut value także .val() jest obowiązkowe jeśli interpreter ma odczytać wartość pola.

        // console.log('Pole kraj nie może być puste');
        pokazBlad($poleKraj, 'Pole kraj nie może być puste');
    }*/

    // poleOmnie
    /*var $poleOmnie = $('[name="about"]');
    var oMnie = $.trim( $poleOmnie.val() );

    if( '' == oMnie ){

        // console.log('Pole O mnie nie może być puste');
        pokazBlad($poleOmnie, 'Pole O mnie nie może być puste');
    
    }else if( oMnie.length > 100 ){

        // console.log('Pole O mnie nie może być dłuższe niż 100 znaków');
        pokazBlad($poleOmnie, 'Pole O mnie nie może być dłuższe niż 100 znaków');

    }*/

    // poleAgree
    /*var $poleAgree = $('[name="agree"]');

    if( !$poleAgree.is(':checked') ){

        // console.log('Musisz potwierdzić zgodę na regulamin serwisu');
        pokazBlad($poleAgree, 'Musisz potwierdzić zgodę na regulamin serwisu');
    }*/

});