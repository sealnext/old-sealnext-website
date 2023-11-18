
function showContactSection() {
  const contactSection = document.getElementById('contact');
  const contactSidebar = document.getElementById('contact-desktop-sidebar');
  const contactInfo = document.getElementById('contact-info');
  const contact = document.getElementById('contact');
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
  const contact = document.getElementById('contact');
  const contactBg = document.getElementById('contact-background');
  const contactContainer = document.querySelector('.contact-container');

  // Adaugă clasele pentru animația de închidere
  contactSidebar.classList.add('slideSidebarReverse');
  contactContainer.classList.add('slideContactReverse');
  contactBg.classList.add('slideContactReverseSlower');
  contactInfo.classList.add('slideContactReverse');

  // Ascultă pentru sfârșitul animațiilor și ascunde secțiunea
  contactSection.addEventListener('animationend', function() {
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

document.addEventListener('DOMContentLoaded', function () {
    var getStartedButton = document.querySelector('.getstarted_button');
    var contactSection = document.querySelector('#contact');
    var main = document.querySelector('#main');
    var body = document.body;

    var getStartedButton = document.querySelector('.getstarted_button');
    var getstarted_button__trigger_label = document.querySelector('.getstarted_button__trigger_label');
    
    
    getstarted_button__trigger_label.addEventListener('click', function () {
      if (contactSection.style.display === 'none') {
        contactSection.style.display = "flex";
        body.style.overflow = "hidden";
        getStartedButton.style.display = "none"
        const checkbox = document.querySelector('.menu_button__trigger_checkbox');
        const label = document.querySelector('.menu_button__trigger_label');
        checkbox.checked = true;
        showContactSection();
      }
    });

    var menu_button__trigger_label = document.querySelector('.menu_button__trigger_label');
    menu_button__trigger_label.addEventListener('click', function () {
      if (getStartedButton.style.display === 'none') {
        console.log("off");
        // contactSection.style.display = "none";
        body.style.overflow = "auto";
        getStartedButton.style.display = "block";
        hideContactSection();
      }
    });

  });
