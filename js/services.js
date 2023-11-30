for (let i = 1; i <= 6; i++) {
    let element = document.querySelector('.s' + i);
    if (element) {
        element.addEventListener('click', function() {
            let description = this.querySelector('.services__content__info__description');
            let icon = this.querySelector('.services__content__info__arrow');
            let ellipse = this.querySelector('.ellipse');
            let text = this.querySelector('.services__content__info__text');

            if (description) {
                description.classList.toggle('expanded');
                if (description.classList.contains('expanded')) {
                    element.style.backgroundColor = 'rgba(25, 26, 31, 0.5)';
                    ellipse.style.backgroundColor = '#4543EC';
                    icon.style.backgroundImage = "url('arrow_down.svg')";
                    icon.style.backgroundColor = '#4543EC';
                    text.style.color = '#ffffff';
                } else {
                    element.style.backgroundColor = 'transparent';
                    ellipse.style.backgroundColor = 'transparent';
                    icon.style.backgroundImage = "url('arrow_up.svg')";
                    icon.style.backgroundColor = 'transparent';
                    text.style.color = '#979797';
                }
            }
        });

        element.addEventListener('mouseenter', function() {
            let description = this.querySelector('.services__content__info__description');
            if (!description || !description.classList.contains('expanded')) {
                element.style.backgroundColor = 'rgba(25, 26, 31, 0.5)';
                let ellipse = this.querySelector('.ellipse');
                description.style.cursor = 'url("/services/ellipse.svg") 15 15, auto';
                if (ellipse) {
                    ellipse.style.backgroundColor = '#4543EC';
                }
                let text = this.querySelector('.services__content__info__text');
                if(text){
                    text.style.color = '#ffffff';
                }
                let icon = this.querySelector('.services__content__info__arrow');
                if (icon) {
                    icon.style.backgroundImage = "url('arrow_up.svg')";
                    icon.style.backgroundColor = '#4543EC';
                }
            }
        });

        element.addEventListener('mouseleave', function() {
            let description = this.querySelector('.services__content__info__description');
            if (!description || !description.classList.contains('expanded')) {
                element.style.backgroundColor = 'transparent';
                description.style.cursor = 'none';
                let ellipse = this.querySelector('.ellipse');
                if (ellipse) {
                    ellipse.style.backgroundColor = 'transparent';
                }
                let text = this.querySelector('.services__content__info__text');
                if(text){
                    text.style.color = '#979797';
                }
                let icon = this.querySelector('.services__content__info__arrow');
                if (icon) {
                    icon.style.backgroundImage = "url('arrow_up.svg')";
                    icon.style.backgroundColor = 'transparent';
                }
            }
        });
    }
}
