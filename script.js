// ---- Site settings: edit these ----
const CONTACT_EMAIL = "sean@bravenerconsulting.com";
// -----------------------------------

(function () {
  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Contact email link
  const emailLink = document.getElementById("email-link");
  emailLink.href = "mailto:" + CONTACT_EMAIL;
  emailLink.textContent = CONTACT_EMAIL;

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  // Contact form: opens the visitor's mail app with a prefilled message.
  // To use a form service instead (Formspree, Basin, etc.), see README.md.
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      status.textContent = "Please fill in your name, a valid email and project details.";
      return;
    }

    const subject = "Project inquiry: " + data.get("topic");
    const body = [
      "Name: " + name,
      "Email: " + email,
      "Company: " + (data.get("company") || "").toString().trim(),
      "Topic: " + data.get("topic"),
      "",
      message,
    ].join("\n");

    window.location.href =
      "mailto:" + CONTACT_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    status.textContent = "Opening your email app. If nothing happens, email us directly.";
  });
})();
