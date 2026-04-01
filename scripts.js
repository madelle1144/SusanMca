  // Mobile Menu Toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelector('nav').classList.remove('active');
            });
        });


        // Payment Method Selection
        const paymentOptions = document.querySelectorAll('.payment-option');
        if (paymentOptions.length > 0) {
            const mpesaFields = document.getElementById('mpesaFields');
            const cardFields = document.getElementById('cardFields');
            
            paymentOptions.forEach(option => {
                option.addEventListener('click', function() {
                    // Remove active class from all options
                    paymentOptions.forEach(opt => opt.classList.remove('active'));
                    
                    // Add active class to clicked option
                    this.classList.add('active');
                    
                    // Show/hide relevant fields
                    const method = this.getAttribute('data-method');
                    
                    if (method === 'mpesa') {
                        mpesaFields.style.display = 'block';
                        cardFields.style.display = 'none';
                    } else if (method === 'card') {
                        mpesaFields.style.display = 'none';
                        cardFields.style.display = 'block';
                    } else {
                        mpesaFields.style.display = 'none';
                        cardFields.style.display = 'none';
                    }
                });
            });
        }

        // Modal Functions
        function showMpesaDetails() {
            document.getElementById('mpesaModal').classList.add('show');
        }

        function closeMpesaModal() {
            document.getElementById('mpesaModal').classList.remove('show');
        }

        function showBankDetails() {
            document.getElementById('bankModal').classList.add('show');
        }

        function closeBankModal() {
            document.getElementById('bankModal').classList.remove('show');
        }

        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            const mpesaModal = document.getElementById('mpesaModal');
            const bankModal = document.getElementById('bankModal');
            
            if (e.target === mpesaModal) {
                closeMpesaModal();
            }
            if (e.target === bankModal) {
                closeBankModal();
            }
        });

        // Donation Form Submission
        const donationForm = document.getElementById('donationForm');
        if (donationForm) {
            donationForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your donation! In a real implementation, this would process your payment.');
                // In a real implementation, you would integrate with payment gateway APIs here
            });
        }

        // Contact Form Submission - Using Formspree
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                // Allow Formspree to handle the submission
                // Form will POST to https://formspree.io/f/mgvzoyob
            });
        }

        // Animated Counter for Donation Metrics
        function animateValue(element, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                element.textContent = formatNumber(value);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        function formatNumber(num) {
            if (num >= 1000000) {
                return 'KSH ' + (num / 1000000).toFixed(1) + 'M';
            }
            if (num >= 1000) {
                return 'KSH ' + (num / 1000).toFixed(0) + 'k';
            }
            return 'KSH ' + num;
        }

        // Initialize counters when page loads
        window.addEventListener('load', function() {
            animateValue(document.getElementById('totalRaised'), 0, 2458000, 2000);
            animateValue(document.getElementById('donorsCount'), 0, 1247, 2000);
            
            // Days left calculation (for demonstration, using a fixed end date)
            const endDate = new Date('2023-12-31');
            const today = new Date();
            const daysLeft = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
            document.getElementById('daysLeft').textContent = daysLeft > 0 ? daysLeft : 0;
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.padding = '10px 0';
                header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '15px 0';
                header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
            }
        });