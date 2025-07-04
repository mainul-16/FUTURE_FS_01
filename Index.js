
 document.getElementById('menu-btn').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const formMessage = document.getElementById('formMessage');
            
            // Simulate form submission
            formMessage.textContent = "Your message has been sent successfully! I'll get back to you soon.";
            formMessage.classList.remove('hidden');
            formMessage.classList.add('text-green-600');
            
            // Clear form
            this.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        });

        // Back to top button
        window.addEventListener('scroll', function() {
            const backToTopBtn = document.getElementById('backToTop');
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        });

        document.getElementById('backToTop').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });

        // Animation on scroll
        window.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('.animate-fadeIn');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.style.opacity = '1';
                }
            });
        });

        // Trigger animation on page load
        window.addEventListener('load', function() {
            const elements = document.querySelectorAll('.animate-fadeIn');
            elements.forEach(element => {
                element.style.opacity = '1';
            });
        });
         const form = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    form.reset();
                    formMessage.textContent = 'Message sent successfully!';
                    formMessage.classList.remove('hidden');
                } else {
                    formMessage.textContent = 'Error sending message.';
                    formMessage.classList.remove('hidden');
                }
            })
            .catch(() => {
                formMessage.textContent = 'Error sending message.';
                formMessage.classList.remove('hidden');
            });
        });
        