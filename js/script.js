// --- Helper Function for Safety ---
// Eta check korbe element-ta page-e ase kina, thakle value nibe
const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : null;

// --- Login Functionality ---
function login() {
    const usernameInput = document.querySelectorAll('input')[0];
    const passwordInput = document.getElementById('password');

    // Check kora hocche element gula page-e exist kore kina
    if (usernameInput && passwordInput) {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username !== "" && password !== "") {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Please fill in both fields!");
        }
    }
}

// --- Registration Functionality ---
function registerUser() {
    const inputs = document.querySelectorAll('.input-box input');
    const checkbox = document.querySelector('input[type="checkbox"]');
    
    // Element thaklei shudhu logic cholbe
    if (inputs.length > 0 && checkbox) {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value === "") allFilled = false;
        });

        if (allFilled && checkbox.checked) {
            alert("Account Created Successfully! Now you can Login.");
            window.location.href = "login.html";
        } else if (!checkbox.checked && allFilled) {
            alert("Please agree to the terms and conditions!");
        } else {
            alert("Please fill in all the required fields!");
        }
    }
}

// --- Observer logic (Ager motoi thakbe) ---
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

// --- Cuisine Tabs Logic (Cleaned) ---
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Active class toggle
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const selectedCuisine = tab.textContent.toLowerCase();

        cards.forEach(card => {
            // dataset check kora
            if(card.dataset.cuisine === selectedCuisine) {
                card.classList.add("show");
            } else {
                card.classList.remove("show");
            }
        });
    });
});

// Prottekta card-e automatic icon boro ar sndr kore boshano
const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    const cardInfo = card.querySelector('.card-info');
    
    // Check korbe jate bar bar icon add na hoy
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
        cardInfo.insertAdjacentHTML('beforeend', btnHTML);
    }
});
