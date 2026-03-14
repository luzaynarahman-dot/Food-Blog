// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.scroll-section').forEach(section => {
    observer.observe(section);
});

// ===== CUISINE TABS FUNCTIONALITY =====
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");

if (tabs.length > 0 && cards.length > 0) {
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            // Add active class to clicked tab
            tab.classList.add("active");

            const selectedCuisine = tab.textContent.toLowerCase().trim();

            cards.forEach(card => {
                if (card.dataset.cuisine === selectedCuisine) {
                    card.classList.add("show");
                } else {
                    card.classList.remove("show");
                }
            });
        });
    });
}

// ===== ADD INTERACTION BUTTONS TO CUISINE CARDS =====
const allCards = document.querySelectorAll('.cuisine-cards .card');

allCards.forEach(card => {
    if (!card.querySelector('.card-interactions')) {
        const btnHTML = `
            <div class="card-interactions">
                <button class="bookmark-btn">
                    <i class="fa-regular fa-bookmark"></i>
                </button>
                <button class="love-btn">
                    <i class="fa-regular fa-heart"></i>
                </button>
            </div>
        `;
        card.querySelector('.card-info').insertAdjacentHTML('beforeend', btnHTML);
    }
});

// ===== LOGIN FUNCTIONALITY (if on login page) =====
function login() {
    const usernameInput = document.querySelector('input[type="text"], input[type="email"]');
    const passwordInput = document.getElementById('password');

    if (usernameInput && passwordInput) {
        if (usernameInput.value && passwordInput.value) {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Please fill in both fields!");
        }
    }
}

// ===== REGISTER FUNCTIONALITY (if on register page) =====
function registerUser() {
    const inputs = document.querySelectorAll('.input-box input');
    const checkbox = document.querySelector('input[type="checkbox"]');
    
    if (inputs.length > 0 && checkbox) {
        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value) allFilled = false;
        });

        if (allFilled && checkbox.checked) {
            alert("Account Created Successfully!");
            window.location.href = "login.html";
        } else if (!checkbox.checked && allFilled) {
            alert("Please agree to the terms and conditions!");
        } else {
            alert("Please fill in all the required fields!");
        }
    }
}

// ===== SEARCH FUNCTIONALITY =====
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        if (searchInput.value.trim()) {
            alert(`Searching for: ${searchInput.value}`);
            // Add actual search logic here
        } else {
            alert('Please enter something to search');
        }
    });
}

// ===== NEWSLETTER SUBSCRIBE =====
const subscribeBtn = document.querySelector('.subscribe-btn');
const emailInput = document.querySelector('.newsletter-box input');

if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        if (email && email.includes('@') && email.includes('.')) {
            alert('Thanks for subscribing! 🎉');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });
}
    
