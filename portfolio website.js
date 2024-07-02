document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            projectCards.forEach(card => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

 // Update footer with current year and datetime
 const yearSpan = document.getElementById("year");
 const datetimeP = document.getElementById("datetime");
 const currentDateTime = new Date();

 yearSpan.textContent = currentDateTime.getFullYear();
 datetimeP.textContent = currentDateTime.toLocaleString();