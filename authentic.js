const firebaseConfig = {
	apiKey: "AIzaSyDSRUGtY4M7erW7o6PLBI7hPdu9VdKzpoo",
	authDomain: "data-login-fire.firebaseapp.com",
	projectId: "data-login-fire",
	storageBucket: "data-login-fire.appspot.com",
	messagingSenderId: "35741615627",
	appId: "1:35741615627:web:0810486ae67dc058ac690e",
	measurementId: "G-NPPGXETNSG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Variables
const auth = firebase.auth();
const database = firebase.database();

console.log(app);

// Set up our register function
function register() {
	email = document.getElementById("email").value;
	password = document.getElementById("password").value;
	full_name = document.getElementById("full_name").value;

	if (validate_email(email) == false || validate_password(password) == false) {
		alert("Fulfill the Email or Password");
		return;
	}
	if (validate_field(full_name) == false) {
		alert("Fulfill the Full Name");
		return;
	}

	// auth
	auth
		.createUserWithEmailAndPassword(email, password)
		.then(function () {
			var user = auth.currentUser;

			// add this user to firedatabase
			var database_ref = database.ref();

			// create user data
			var user_data = {
				email: email,
				full_name: full_name,
				last_login: Date.now(),
			};
			database_ref.child("users/" + user.uid.set(user_data));

			alert("User Created!!");
		})
		.catch(function (error) {
			var error_code = error.code;
			var error_message = error.message;
			alert(error_message);
		});
}

function validate_email(email) {
	expression = /^[^@]+@\w+(\.\w+)+\w$/;
	if (expression.test(email) == true) {
		return true;
	} else {
		return false;
	}
}

function validate_password(password) {
	if (password < 6) {
		return false;
	} else {
		return true;
	}
}

function validate_field(field) {
	if (field == null) {
		return false;
	}
	if (field.length <= 0) {
		return false;
	} else {
		return true;
	}
}
