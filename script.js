const body = document.getElementsByTagName('body')[0]
const email = document.getElementById('email-input')
const btn = document.getElementById('btn')
const errorMassage = document.getElementById('error-massage')
var emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


email.addEventListener('input', () => {
    if (email.value === '') {
        btn.disabled = true;
        btn.style.backgroundImage = 'none'
    } else if (email.value !== '') {
        if (email.value.length += 1) {
            errorMassage.innerText = ''
            email.style.borderColor = ''
        } else if (email.value.length -= 1) {
            errorMassage.innerText = ''
            email.style.borderColor = ''
        }
        btn.disabled = false;
        btn.style.backgroundImage = 'linear-gradient(90deg, hsl(346.74deg 100% 66.27%), hsl(14.23deg 98.98% 61.57%)'
    }

})

btn.addEventListener('click', () => {
    if (email.value === '') {
        errorMassage.innerText = "Can't be blank";
        email.style.borderColor = `var(--Tomato)`;
    } else if (emailRegex.test(email.value) === false) {
        errorMassage.innerText = "Valid email required";
        email.style.borderColor = `var(--Tomato)`;
    } else {
        const resultContainer = `
            <div class="result-container">
                <img class="success-icon" src="assets/images/icon-success.svg" alt="">
                <h2 class="result-title">Thanks for subscribing!</h2>
                <p class="result-paragraph">A confirmation email has been sent to <span class="email">${email.value}</span>. Please open it and click the button inside to confirm your subscription.</p>
                <a class="result-btn-container" href="#">
                    <button class="result-btn" disabled>Dismiss message</button>
                </a>
            </div>
        `;
        body.innerHTML = resultContainer;

        // Trigger reflow before adding class to enable transition
        void body.offsetWidth;

        // Add show class to trigger transition effect
        document.querySelector('.result-container').classList.add('show');
    }
});

