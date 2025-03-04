document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully.");

    // Time-based greeting
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    // Add greeting to the page
    const greetingElement = document.createElement("p");
    greetingElement.id = "greeting";
    greetingElement.textContent = greeting;
    document.body.appendChild(greetingElement);

    // Set the current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully.");

    // Ensure lightbox only runs if images exist
    const projectImages = document.querySelectorAll("#project-images img");
    if (projectImages.length > 0) {
        console.log("Project images found, initializing lightbox...");

        // Create lightbox element
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        document.body.appendChild(lightbox);

        // Create image container inside lightbox
        const imgContainer = document.createElement("div");
        imgContainer.className = "image-container"; // Uses CSS for relative positioning
        lightbox.appendChild(imgContainer);

        // Create image element inside container
        const img = document.createElement("img");
        imgContainer.appendChild(img);

        // Create close button inside the same container
        const closeButton = document.createElement("button");
        closeButton.textContent = "✖";
        closeButton.className = "close";
        imgContainer.appendChild(closeButton); // Append inside image container

        // Handle image clicks
        projectImages.forEach(image => {
            image.addEventListener("click", () => {
                img.src = image.src;
                lightbox.style.display = "flex";
            });
        });

        // Close lightbox when clicking the close button
        closeButton.addEventListener("click", () => {
            lightbox.style.display = "none";
        });

        // Close lightbox when clicking outside the image
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) { // Ensures it only closes when clicking outside the image
                lightbox.style.display = "none";
            }
        });
    } else {
        console.log("No project images found. Lightbox script skipped.");
    }

    // Set the current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();
});