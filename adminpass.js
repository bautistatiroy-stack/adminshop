const ADMIN_USERNAME = "christian";
const ADMIN_PASSWORD = "chan1234";
const ADMIN_EMAIL = "christian@gmail.com";

function loginAdmin() {

    let user = document.getElementById("adminUser").value;
    let pass = document.getElementById("adminPass").value;
    let email = document.getElementById("adminEmail").value;

    if (user === ADMIN_USERNAME && pass === ADMIN_PASSWORD && email === ADMIN_EMAIL) {

        document.getElementById("adminPanel").style.display = "block";

        loadProducts();

    } else {
        alert("Wrong username, password, or email");

    }
}

/*log out*/

function logoutAdmin() {

    document.getElementById("adminPanel")
        .style.display = "none";

    document.getElementById("adminUser").value = "";
    document.getElementById("adminPass").value = "";
    document.getElementById("adminEmail").value = "";
    alert("Logged out");
}