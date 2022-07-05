let toggles = document.getElementsByClassName('footer-mobile__toggle');
let mobileContent = document.getElementsByClassName('footer-mobile__content');
let icons = document.getElementsByClassName('footer-mobile__icon');




for(let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', () => {
    if(parseInt(mobileContent[i].style.height) != mobileContent[i].scrollHeight) {
      mobileContent[i].style.height = mobileContent[i].scrollHeight + "px";
      icons[i].classList.remove('fa-plus');
      icons[i].classList.add('fa-minus');
    } else {
      mobileContent[i].style.height = "0px";
      icons[i].classList.remove('fa-minus');
      icons[i].classList.add('fa-plus');
    }
    for(let j = 0; j < mobileContent.length; j++) {
      if(j !== i) {
        mobileContent[j].style.height = "0px";
        icons[j].classList.remove('fa-minus');
        icons[j].classList.add('fa-plus');
      }
    }
  });
}




// Email Modal 



window.onload = () => {
  let emailState = false;
  let emailModal = document.getElementsByClassName('email-modal')[0];
  let closeButton = document.getElementsByClassName('email-modal__close-btn')[0];
  let emailInput = document.getElementsByClassName('email-modal__input')[0];
  let emailButton = document.getElementsByClassName('email-modal__button')[0];
  let thankYouContainer = document.getElementsByClassName('email-modal__thank-you')[0];
  let declineOffer = document.getElementsByClassName('email-modal__decline-offer')[0];


  function emailISValid(email) {
    return /\S+@\S+\.\S+/.test(email)
  }
  let showModal = () => {
    if (emailState == false) {
      emailModal.classList.add('email-modal--visible');
      emailState = true;
    };
  };
  let closeModal = () => {
    emailModal.classList.remove('email-modal--visible');
  }
  let addErrors = () => {
    document.getElementsByClassName('email-modal__form-group')[0].classList.add('email-modal__form-group--error');
    document.getElementsByClassName('email-modal__error-message')[0].classList.add('email-modal__error-message--active');
  }
  let removeErrors = () => {
    document.getElementsByClassName('email-modal__form-group')[0].classList.remove('email-modal__form-group--error');
    document.getElementsByClassName('email-modal__error-message')[0].classList.remove('email-modal__error-message--active');
  }
  let showThankYou = () => {
    thankYouContainer.classList.add('email-modal__thank-you--success');
    setTimeout(() => {
      closeModal();
    }, 3000);
  }

  closeButton.addEventListener('click', () => {
    closeModal();
  });
  emailInput.addEventListener('click', () => {
    removeErrors();
  })
  emailButton.addEventListener('click', () => {
    if (emailISValid(emailInput.value)) {
      showThankYou();
    } else {
      addErrors();
    }
  })
  declineOffer.addEventListener('click', () => {
    closeModal();
  })

  document.body.addEventListener('mouseleave', () => {
    showModal();
  });
}

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle("header--sticky", window.scrollY > 60);
});
function toggleMenu() {
  const menuToggle = document.querySelector('.menuToggle');
  const nav = document.querySelector('.header__nav');
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
}



// Mobile Menu






