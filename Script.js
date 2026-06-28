// --- SHARINGAN VECTOR DATABASE ARR-STORES ---
const sharinganVectors = [
    // 1. Itachi Mangekyou Template Blueprint
    `<g fill="#000000">
        <path d="M50,15 C40,15 35,28 42,34 C48,40 58,32 54,24 Z"/>
        <path d="M50,15 C40,15 35,28 42,34 C48,40 58,32 54,24 Z" transform="rotate(120 50 50)"/>
        <path d="M50,15 C40,15 35,28 42,34 C48,40 58,32 54,24 Z" transform="rotate(240 50 50)"/>
    </g>`,
    // 2. Madara Mangekyou Template Blueprint
    `<g fill="#000000">
        <circle cx="50" cy="20" r="9"/>
        <circle cx="24" cy="65" r="9"/>
        <circle cx="76" cy="65" r="9"/>
        <path d="M50,20 L50,50 M24,65 L50,50 M76,65 L50,50" stroke="#000" stroke-width="12"/>
    </g>`,
    // 3. Obito / Kakashi Mangekyou Template Blueprint
    `<g fill="#000000">
        <path d="M50,50 L50,12 C24,12 14,36 50,50 Z"/>
        <path d="M50,50 L50,12 C24,12 14,36 50,50 Z" transform="rotate(120 50 50)"/>
        <path d="M50,50 L50,12 C24,12 14,36 50,50 Z" transform="rotate(240 50 50)"/>
    </g>`,
    // 4. Shisui Mangekyou Template Blueprint
    `<g fill="#000000">
        <path d="M50,50 C18,18 82,4 50,50 Z"/>
        <path d="M50,50 C18,18 82,4 50,50 Z" transform="rotate(90 50 50)"/>
        <path d="M50,50 C18,18 82,4 50,50 Z" transform="rotate(180 50 50)"/>
        <path d="M50,50 C18,18 82,4 50,50 Z" transform="rotate(270 50 50)"/>
    </g>`,
    // 5. Sasuke Eternal Mangekyou Template Blueprint
    `<g fill="#000000">
        <polygon points="50,10 63,37 92,37 68,54 78,82 50,64 22,82 32,54 8,37 37,37"/>
        <circle cx="50" cy="50" r="19" fill="none" stroke="#000" stroke-width="5"/>
    </g>`
];

let eyeIndex = 0;
const svgContainer = document.getElementById('sharingan-vectors');

// Runs the shifting cycle loop exactly every 4 seconds
setInterval(() => {
    svgContainer.style.opacity = '0.15';
    setTimeout(() => {
        eyeIndex = (eyeIndex + 1) % sharinganVectors.length;
        svgContainer.innerHTML = sharinganVectors[eyeIndex];
        svgContainer.style.opacity = '1';
    }, 350);
}, 4000);


// --- MODAL CONTROLLER INTERACTIVE SYSTEM ---
function displayModal(modalId) {
    clearAllModals();
    const targetModal = document.getElementById(modalId);
    if (targetModal) targetModal.classList.add('active');
}

function clearAllModals() {
    document.querySelectorAll('.content-panel').forEach(modal => modal.classList.remove('active'));
}

document.querySelectorAll('.panel-dismiss-btn').forEach(btn => btn.addEventListener('click', clearAllModals));


// --- NAVIGATION ACTION BINDINGS ---
// Home: Scroll instantly straight back to the absolute top of the page
document.getElementById('home-nav-btn').addEventListener('click', () => {
    clearAllModals();
    document.getElementById('homepage-main').scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Us routing terminal links handler
document.getElementById('contact-nav-btn').addEventListener('click', () => {
    window.open('mailto:contactus.hubcentral@gmail.com', '_blank');
    window.open('tel:07041239821', '_blank');
});

// Workspace and identity overlays hooks
document.getElementById('devs-nav-btn').addEventListener('click', () => displayModal('devs-modal'));
document.querySelectorAll('.auth-trigger').forEach(el => el.addEventListener('click', () => displayModal('auth-modal')));


// --- FOUR EYE-CORNER OVERLAPPING NAVIGATION BOXES ACTIONS ---
const contentModal = document.getElementById('general-content-modal');
const modalTitle = document.getElementById('general-modal-title');
const modalDesc = document.getElementById('general-modal-desc');

function routeBoxClick(title, description) {
    modalTitle.innerText = title;
    modalDesc.innerText = description;
    displayModal('general-content-modal');
}

// --- UPDATE INDIVIDUAL GRID ROUTING POINTERS ---
document.getElementById('box-devs').addEventListener('click', () => displayModal('devs-modal'));
document.getElementById('box-connect').addEventListener('click', () => displayModal('comm-content-panel'));
document.getElementById('box-football').addEventListener('click', () => displayModal('foot-content-panel'));
document.getElementById('box-anime').addEventListener('click', () => displayModal('anime-content-panel'));


// --- DYNAMIC LIVE MESSAGING MATRIX ENGINE ---
document.getElementById('chat-submission-input-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop window loading defaults
    
    const inputNode = document.getElementById('chat-raw-text');
    const logsBox = document.getElementById('chat-logs-box');
    
    // Read logged in identity from storage loop, default to "Anonymous Operative" if blank
    const activeUser = localStorage.getItem('akatsuki_auth_user') || "Operative_X";

    // Generate new text message node
    const msgBlock = document.createElement('div');
    msgBlock.className = 'chat-msg';
    msgBlock.innerHTML = `<strong>${activeUser.split('@')[0]}:</strong> ${inputNode.value}`;

    // Append and shift scroll down automatically
    logsBox.appendChild(msgBlock);
    logsBox.scrollTop = logsBox.scrollHeight;

    // Flush text input node
    inputNode.value = "";
});

// --- SECURITY REGISTRATION ENGINE WITH AUTO OTP FLOWS ---
let currentSessionOTP = "";
let pendingSessionCredential = "";

document.getElementById('auth-registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    pendingSessionCredential = document.getElementById('auth-credential-field').value;

    // Generates a random 6-digit number string
    currentSessionOTP = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Safety check simulation pop-up alert for development testing
    alert(`[GATEWAY SECURITY NOTICE]\nOTP confirmation key sent to account info: ${pendingSessionCredential}\n\nYour 6-Digit OTP Key is: ${currentSessionOTP}`);
    
    displayModal('otp-modal');
    document.querySelectorAll('.otp-digit')[0].focus();
});

// Clean script configuration that auto-jumps the typing cursor across the 6 OTP input boxes
const inputs = document.querySelectorAll('.otp-digit');
inputs.forEach((box, i) => {
    box.addEventListener('input', () => {
        if (box.value.length === 1 && i < inputs.length - 1) inputs[i + 1].focus();
    });
});

// Submitting validation numbers to save state locally
document.getElementById('otp-verification-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let enteredOTP = "";
    inputs.forEach(box => enteredOTP += box.value);

    if (enteredOTP === currentSessionOTP) {
        alert("Verification Complete! Account data saved securely.");
        
        // Emulates "remember me" login behavior by logging credentials to browser memory
        localStorage.setItem('akatsuki_auth_user', pendingSessionCredential);
        
        clearAllModals();
        inputs.forEach(box => box.value = ""); // Flush fields
    } else {
        alert("Access Denied: Invalid security OTP token. Please re-verify.");
    }
});

// AUTO-LOGIN INITIALIZER (Reads saved profile history automatically)
window.addEventListener('DOMContentLoaded', () => {
    const verifiedUser = localStorage.getItem('akatsuki_auth_user');
    if (verifiedUser) {
        console.log(`Welcome back, verified operative: ${verifiedUser}`);
        // Can dynamically update header text to reflect logged-in profile states here if needed
    }
});


// --- LIVE DEVELOPER SHOWCASE FEED COMPONENT ---
document.getElementById('dev-showcase-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('showcase-title');
    const url = document.getElementById('showcase-url');
    const gallery = document.getElementById('showcase-target-gallery');

    const entry = document.createElement('div');
    entry.className = 'feed-item';
    entry.innerHTML = `<strong>${title.value}</strong> by Collaborator <a href="${url.value}" target="_blank">Open ↗</a>`;
    
    gallery.insertBefore(entry, gallery.firstChild);
    title.value = "";
    url.value = "";
});