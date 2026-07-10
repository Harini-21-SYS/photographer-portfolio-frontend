// Get the logged-in user's email
const email = localStorage.getItem("userEmail");

// If the user is not logged in
if (!email) {
    alert("Please login first.");
    window.location.href = "login.html";
}

// Load bookings
loadBookings();

async function loadBookings() {

    try {

        const response = await fetch(`http://localhost:8080/bookings/email/${email}`);

        if (!response.ok) {
            throw new Error("Failed to load bookings");
        }

        const bookings = await response.json();

        const tableBody = document.getElementById("bookingTableBody");

        tableBody.innerHTML = "";

        // If there are no bookings
        if (bookings.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="5">No bookings found.</td>
                </tr>
            `;

            return;
        }

        bookings.forEach(booking => {

            tableBody.innerHTML += `

                <tr>

                    <td>${booking.id}</td>
                    <td>${booking.eventType}</td>
                    <td>${booking.eventDate}</td>
                    <td>${booking.eventLocation}</td>
                    <td>

<span class="status ${booking.status.toLowerCase()}">

${booking.status}

</span>

</td>

                </tr>

            `;

        });

    }

    catch(error){

        console.error(error);

        alert("Cannot connect to Spring Boot Server.");

    }

}