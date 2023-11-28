
function showMenuSection() {
    const menuSection = document.getElementById('menu');
    const menuSidebar = document.getElementById('menu-desktop-sidebar');
    const menuInfo = document.getElementById('menu-info');
    const menuBg = document.getElementById('menu-background');
    const menuContainer = document.querySelector('.menu-container');
    menuSection.style.display = 'flex';
    menuSidebar.classList.add('slideSidebar');
    menuContainer.classList.add('slideMenu');
    menuBg.classList.add('slideMenu');
    menuInfo.classList.add('slideMenu');
}

function hideMenuSection() {
    const menuSection = document.getElementById('menu');
    const menuSidebar = document.getElementById('menu-desktop-sidebar');
    const menuInfo = document.getElementById('menu-info');
    const menuBg = document.getElementById('menu-background');
    const menuContainer = document.querySelector('.menu-container');

    // Adaugă clasele pentru animația de închidere
    menuSidebar.classList.add('slideSidebarReverse');
    menuContainer.classList.add('slideMenuReverse');
    menuBg.classList.add('slideMenuReverseSlower');
    menuInfo.classList.add('slideMenuReverse');

    // Ascultă pentru sfârșitul animațiilor și ascunde secțiunea
    menuSection.addEventListener('animationend', function () {
        // Acest cod se asigură că display 'none' este setat doar după ce toate animațiile s-au terminat
        if (menuSidebar.classList.contains('slideSidebarReverse') &&
            menuContainer.classList.contains('slideMenuReverse') &&
            menuBg.classList.contains('slideMenuReverseSlower') &&
            menuInfo.classList.contains('slideMenuReverse')) {
            menuSection.style.display = 'none';
        }
    }, { once: true });

    // Înlătură clasele de animație inițiale pentru a preveni conflictele la re-afișare
    menuSidebar.classList.remove('slideSidebar');
    menuContainer.classList.remove('slideMenu');
    menuBg.classList.remove('slideMenu');
    menuInfo.classList.remove('slideMenu');
}


function showContactSection() {
    const contactSection = document.getElementById('contact');
    const contactSidebar = document.getElementById('contact-desktop-sidebar');
    const contactInfo = document.getElementById('contact-info');
    const contactBg = document.getElementById('contact-background');
    const contactContainer = document.querySelector('.contact-container');
    contactSection.style.display = 'flex';
    contactSidebar.classList.add('slideSidebar');
    contactContainer.classList.add('slideContact');
    contactBg.classList.add('slideContact');
    contactInfo.classList.add('slideContact');
}

function hideContactSection() {
    const contactSection = document.getElementById('contact');
    const contactSidebar = document.getElementById('contact-desktop-sidebar');
    const contactInfo = document.getElementById('contact-info');
    const contactBg = document.getElementById('contact-background');
    const contactContainer = document.querySelector('.contact-container');

    // Adaugă clasele pentru animația de închidere
    contactSidebar.classList.add('slideSidebarReverse');
    contactContainer.classList.add('slideContactReverse');
    contactBg.classList.add('slideContactReverseSlower');
    contactInfo.classList.add('slideContactReverse');

    // Ascultă pentru sfârșitul animațiilor și ascunde secțiunea
    contactSection.addEventListener('animationend', function () {
        // Acest cod se asigură că display 'none' este setat doar după ce toate animațiile s-au terminat
        if (contactSidebar.classList.contains('slideSidebarReverse') &&
            contactContainer.classList.contains('slideContactReverse') &&
            contactBg.classList.contains('slideContactReverseSlower') &&
            contactInfo.classList.contains('slideContactReverse')) {
            contactSection.style.display = 'none';
        }
    }, { once: true });

    // Înlătură clasele de animație inițiale pentru a preveni conflictele la re-afișare
    contactSidebar.classList.remove('slideSidebar');
    contactContainer.classList.remove('slideContact');
    contactBg.classList.remove('slideContact');
    contactInfo.classList.remove('slideContact');
}


var showCode = 0;

document.addEventListener('DOMContentLoaded', function () {
    var menuSection = document.querySelector('#menu');
    var getStartedButton = document.querySelector('.getstarted_button');
    var contactSection = document.querySelector('#contact');
    var body = document.body;
    const checkbox = document.querySelector('.menu_button__trigger_checkbox');

    function toggleDisplay(element, displayStyle) {
        element.style.display = displayStyle;
    }

    function handleMenuButtonClick() {
        if (showCode === 0) {
            toggleDisplay(menuSection, "flex");
            toggleDisplay(getStartedButton, "none");
            body.style.overflow = "hidden";
            menuSection.style.overflow = "hidden"
            menuSection.classList.remove('animate-remove-blur'); // Adăugăm animația pentru eliminarea blurului
            menuSection.classList.add('animate-apply-blur');
            showMenuSection();
            showCode = 1;
        } else if (showCode === 1) {
            toggleDisplay(getStartedButton, "block");
            body.style.overflow = "auto";
            menuSection.classList.add('animate-remove-blur'); // Adăugăm animația pentru eliminarea blurului
            menuSection.classList.remove('animate-apply-blur');
            hideMenuSection();
            showCode = 0;
        } else if (showCode === 3) {
            handleContactSectionToggle();
        }
    }

    function handleContactSectionToggle() {
        if (contactSection.style.display === 'none') {
            toggleDisplay(contactSection, "flex");
            toggleDisplay(getStartedButton, "none");
            contactSection.classList.add('animate-apply-blur'); // Adăugăm animația pentru aplicarea blurului
            contactSection.classList.remove('animate-remove-blur');
            body.style.overflow = "hidden";
            checkbox.checked = true;
            showContactSection();
            showCode = 3;
        } else if (getStartedButton.style.display === 'none') {
            body.style.overflow = "auto";
            toggleDisplay(getStartedButton, "block");
            contactSection.classList.add('animate-remove-blur'); // Adăugăm animația pentru eliminarea blurului
            contactSection.classList.remove('animate-apply-blur');
            hideContactSection();
            showCode = 0;
        }
    }

    function closeMenu() {
        if (showCode !== 0) {
            hideMenuSection();
            menuSection.classList.add('animate-remove-blur'); // Adăugăm animația pentru eliminarea blurului
            menuSection.classList.remove('animate-apply-blur');
            showCode = 0;
        }
    }

    document.querySelector('#portfolio-link').addEventListener('click', closeMenu);
    document.querySelector('#services-link').addEventListener('click', closeMenu);
    document.querySelector('#review-link').addEventListener('click', closeMenu);
    document.querySelector('#blogs-link').addEventListener('click', closeMenu);
    document.querySelector('.menu_button__trigger_label').addEventListener('click', handleMenuButtonClick);
    document.querySelector('.getstarted_button__trigger_label').addEventListener('click', handleContactSectionToggle);
    document.querySelector('#contact-link').addEventListener('click', function () {
        if (showCode !== 0) {
            hideMenuSection();
            showCode = 0;
        }
        showContactSection();
        showCode = 3;
    });
});
