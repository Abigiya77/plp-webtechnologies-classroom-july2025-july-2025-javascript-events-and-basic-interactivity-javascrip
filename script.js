// ===== Part 1: Event Handling (Counter Game) =====
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// ===== Part 2: Interactive Elements =====

// Dark/Light mode toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// ===== Part 3: Form Validation =====
const form = document.getElementById("signup-form");
const messages = document.getElementById("form-messages");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let errors = [];

  // Validate name
  if (name.length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  // Validate email (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errors.push("Enter a valid email address.");
  }

  // Validate password
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Show feedback
  if (errors.length > 0) {
    messages.style.color = "red";
    messages.textContent = errors.join(" ");
  } else {
    messages.style.color = "green";
    messages.textContent = "Form submitted successfully! 🎉";
    form.reset();
  }
});
