// Check whether the logged in user is an admin

const role = localStorage.getItem("role");

if (role !== "ADMIN") {

    alert("Access Denied!");

    window.location.href = "index.html";

}

// Load all bookings when the page opens

loadBookings();

async function loadBookings() {

    try {

        const response = await fetch("http://localhost:8080/bookings");

        if (!response.ok) {

            throw new Error("Failed to load bookings");

        }

        const bookings = await response.json();

        const tableBody = document.getElementById("bookingTableBody");

        tableBody.innerHTML = "";

        bookings.forEach(booking => {

            tableBody.innerHTML += `

                <tr>

                    <td>${booking.id}</td>
                    <td>${booking.customerName}</td>
                    <td>${booking.email}</td>
                    <td>${booking.phone}</td>
                    <td>${booking.eventType}</td>
                    <td>${booking.eventDate}</td>
                    <td>${booking.eventLocation}</td>
                    <td>${booking.message}</td>
                    <td>${booking.status}</td>

                    <td>

                        <button onclick="updateStatus(${booking.id},'CONFIRMED')">

                            Confirm

                        </button>

                        <button onclick="updateStatus(${booking.id},'CANCELLED')">

                            Cancel

                        </button>

                    </td>

                </tr>

            `;

        });

    }

    catch(error){

        console.error(error);

        alert("Unable to load bookings.");

    }

}

async function updateStatus(id,status){

    try{

        const response = await fetch(`http://localhost:8080/bookings/${id}/status?status=${status}`,{

            method:"PUT"

        });

        if(response.ok){

            alert("Booking updated successfully.");

            loadBookings();

        }

        else{

            alert("Failed to update booking.");

        }

    }

    catch(error){

        console.error(error);

        alert("Cannot connect to Spring Boot.");

    }

}