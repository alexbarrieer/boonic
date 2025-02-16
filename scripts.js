document.addEventListener('DOMContentLoaded', function() {
    const scrollTopButton = document.querySelector('.scroll-top');
    
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopButton.style.opacity = '1';
        } else {
            scrollTopButton.style.opacity = '0.5';
        }
    });

    // Add clipboard functionality
    const contractAddress = document.querySelector('.highlight');
    const fullAddress = '5EVnEFjkdkwkNLNizMMGYtV1AuCdUcCvcQtUzYF2pump';
    
    contractAddress.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(fullAddress);
            
            // Show feedback
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            
            // Reset text after 2 seconds
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
            
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
});
