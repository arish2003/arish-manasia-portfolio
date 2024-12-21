/*=============== Active Link =============== */

/*=============== Mixitup Filter =============== */

// Initialize MixItUp on the container
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item' // This is the class for project items
    },
    animation: {
        duration: 300 // Animation duration for filtering
    }
});

// Adding functionality to manage the active category button state
const categoryButtons = document.querySelectorAll('.category__btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove the 'active-work' class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active-work'));

        // Add 'active-work' class to the clicked button
        button.classList.add('active-work');
    });
});


/*=============== Testimonials Swiper =============== */

var testiSwiper = new Swiper('.testimonial__container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },

    mousewheel: true,
    keyboard: true,
});



/*=============== Contact Form =============== */
/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    Message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // Clear any previous messages
    contactMessage.textContent = '';
    contactMessage.classList.remove('color-light', 'color-dark', 'clear'); // Remove any previous styles

    // Check if the fields have values
    if(contactName.value === '' || contactEmail.value === '' || Message.value === '') {
        // Add and remove color for error
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // Show error message
        contactMessage.textContent = 'Please fill in all fields.';
    } else {
        // Send email using EmailJS
        emailjs.sendForm('service_tvl5tjc', 'template_w2pdpdl', '#contact-form', 'YdD5G53V25rYWXYUx')
        .then(() => {
            // Show success message and add success color
            contactMessage.classList.remove('color-dark');
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent 🗸';

            // Clear message after 5 seconds
            setTimeout(() => {
                contactMessage.classList.add('clear');  // Hide the message completely after 5 seconds
            }, 5000);
        })
        .catch((error) => {
            // Handle error if email fails
            contactMessage.classList.remove('color-light');
            contactMessage.classList.add('color-dark');
            contactMessage.textContent = 'Something went wrong, please try again later.';
            console.error('Error sending email:', error);
        });

        //clear input fields
        contactName.value = '';
        contactEmail.value = '';
        Message.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);

