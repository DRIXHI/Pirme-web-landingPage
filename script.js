  // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (isExpanded) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                mobileMenuButton.querySelector('i').classList.remove('fa-times');
                mobileMenuButton.querySelector('i').classList.add('fa-bars');
            });
        });
        
        // Sticky header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('shadow-lg', 'py-2');
                header.classList.remove('py-3');
            } else {
                header.classList.remove('shadow-lg', 'py-2');
                header.classList.add('py-3');
            }
        });
        
        // Lightbox functionality
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const lightboxBtns = document.querySelectorAll('.lightbox-btn');
        const lightboxClose = document.querySelector('.lightbox-close');
        
        lightboxBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const imgSrc = this.getAttribute('data-image');
                const caption = this.getAttribute('data-caption');
                
                lightboxImg.src = imgSrc;
                lightboxCaption.textContent = caption;
                lightbox.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        lightboxClose.addEventListener('click', function() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Form submission and WhatsApp integration
        const appointmentForm = document.getElementById('appointment-form');
        const whatsappBtn = document.getElementById('whatsapp-btn');
        
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const name = this.querySelector('[name="name"]').value;
            const email = this.querySelector('[name="email"]').value;
            const phone = this.querySelector('[name="phone"]').value;
            const service = this.querySelector('[name="service"]').value;
            const date = this.querySelector('[name="date"]').value;
            
            if (!name || !email || !phone || !service || !date) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would normally send the form data to your backend or Formspree
            // For this demo, we'll just show a success message and open WhatsApp
            
            // Show success message
            alert('Thank you for your appointment request! We will contact you shortly to confirm.');
            
            // Reset form
            this.reset();
            
            // You can also redirect to a thank you page or show a confirmation message
        });
        
        whatsappBtn.addEventListener('click', function() {
            const name = appointmentForm.querySelector('[name="name"]').value;
            const service = appointmentForm.querySelector('[name="service"]').value;
            const date = appointmentForm.querySelector('[name="date"]').value;
            
            if (!name) {
                alert('Please enter your name first.');
                return;
            }
            
            let message = `Hello, I'm ${name}. I would like to book an appointment`;
            
            if (service) {
                message += ` for ${service}`;
            }
            
            if (date) {
                message += ` on ${date}`;
            }
            
            const encodedMessage = encodeURIComponent(message);
            const waNumber = '+211928661250'; // Replace with actual WhatsApp number
            
            window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
        });
        
        // Scroll animation with Intersection Observer
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
   