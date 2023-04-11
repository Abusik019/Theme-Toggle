// Images
const circle = document.getElementById('toggle_theme');
const facebook = document.getElementById('facebook_logo');
const instagram = document.getElementById('instagram_logo');
const heart = document.getElementById('favorites');
const arrow = document.getElementById('arrow')
const arrow2 = document.getElementById('arrow2')
//Styles
const body = document.getElementById('body');
const menu_container = document.getElementById('menu_container');
const page_content = document.getElementById('page_content');
const photo1 = document.getElementById('photo_1');
const photo2 = document.getElementById('photo_2');
const header_photos_text = document.getElementById('header_photos_text');
const header_big_photo = document.getElementById('header_big_photo');
const header_buttons = document.getElementById('header_buttons');
const header_button1 = document.getElementById('header_button1');
const header_button2 = document.getElementById('header_button2');
const header_button2_text = document.getElementById('header_button2_text');
const header_button3 = document.getElementById('header_button3');
const header_button4 = document.getElementById('header_button4');
const container_search = document.getElementById('container_search');
const lower_menu_element1 = document.getElementById('lower_menu_element1');
// const lower_menu_element2  = document.getElementById('lower_menu_element2');
// const lower_menu_element3  = document.getElementById('lower_menu_element3');
// const lower_menu_element4  = document.getElementById('lower_menu_element4');
// const lower_menu_element5  = document.getElementById('lower_menu_element5');
// const lower_menu_element6  = document.getElementById('lower_menu_element6');


function togglePageTheme(currentTheme = 'black'){
    if(currentTheme == 'dark'){
        circle.src = 'img/theme_light/circle.svg';
        facebook.src = 'img/theme_light/faceb.svg';
        instagram.src = 'img/theme_light/inst.svg';
        heart.src = 'img/theme_light/heart.svg';
        arrow.src = 'img/theme_light/arrow.svg';
        arrow2.src = 'img/theme_light/arrow.svg';

        body.classList.remove('body_dark');
        menu_container.classList.remove('menu-container__dark');
        page_content.classList.remove('page_content__dark');
        photo1.classList.remove('photo1__dark');
        photo2.classList.remove('photo2__dark');
        header_photos_text.classList.remove('header_photos_text__dark');
        header_big_photo.classList.remove('header_big_photo__dark');
        header_buttons.classList.remove('header_buttons__dark');
        header_button1.classList.remove('header_button1__dark');
        header_button2.classList.remove('header_button2__dark');
        header_button2_text.classList.remove('header_button2_text__dark');
        header_button3.classList.remove('header_button3__dark');
        header_button4.classList.remove('header_button4__dark');
        container_search.classList.remove('container_search__dark');
        lower_menu_element1.classList.remove('lower_menu_element1__dark');
        lower_menu_element2.classList.remove('lower_menu_elements__dark');
        lower_menu_element3.classList.remove('lower_menu_elements__dark');
        lower_menu_element4.classList.remove('lower_menu_elements__dark');
        lower_menu_element5.classList.remove('lower_menu_elements__dark');
        lower_menu_element6.classList.remove('lower_menu_element6__dark');
    }else{
        circle.src = 'img/theme_dark/circle_dark.svg';
        facebook.src = 'img/theme_dark/faceb_dark.svg';
        instagram.src = 'img/theme_dark/inst_dark.svg';
        heart.src = 'img/theme_dark/heart_dark.svg';
        arrow.src = 'img/theme_dark/arrow_dark.svg';
        arrow2.src = 'img/theme_dark/arrow_dark.svg';

        body.classList.add('body_dark');
        menu_container.classList.add('menu-container__dark');
        page_content.classList.add('page_content__dark');
        photo1.classList.add('photo1__dark');
        photo2.classList.add('photo2__dark');
        header_photos_text.classList.add('header_photos_text__dark');
        header_big_photo.classList.add('header_big_photo__dark');
        header_buttons.classList.add('header_buttons__dark');
        header_button1.classList.add('header_button1__dark');
        header_button2.classList.add('header_button2__dark');
        header_button2_text.classList.add('header_button2_text__dark');
        header_button3.classList.add('header_button3__dark');
        header_button4.classList.add('header_button4__dark');
        container_search.classList.add('container_search__dark');
        lower_menu_element1.classList.add('lower_menu_element1__dark');
        lower_menu_element2.classList.add('lower_menu_elements__dark');
        lower_menu_element3.classList.add('lower_menu_elements__dark');
        lower_menu_element4.classList.add('lower_menu_elements__dark');
        lower_menu_element5.classList.add('lower_menu_elements__dark');
        lower_menu_element6.classList.add('lower_menu_element6__dark');
    }


    return (currentTheme == 'dark') ? 'light' : 'dark';
}

