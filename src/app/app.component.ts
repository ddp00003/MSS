import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MSS';
  showSignUpForm: boolean = false;
  username: string = '';
  email: string = '';
  password: string = '';

  openSignUpForm() {
    this.showSignUpForm = true;
    console.log('Sign Up form opened');
  }

  closeSignUpForm() {
    this.showSignUpForm = false;
  }
  submitSignUpForm() {
     // Get the user's input from the component properties (username, email, password)
    const user = {
    username: this.username,
    email: this.email,
    password: this.password
  };

  // Perform form validation, e.g., checking if the fields are not empty
  if (!user.username || !user.email || !user.password) {
    console.log('Please fill in all the required fields.');
    return;
  }

  // Optionally, you can make an HTTP request to a server to create the user
  // For simplicity, we'll just log the user data to the console
  console.log('User data to be submitted:');
  console.log(user);

  // After handling form submission, you can clear the form fields and close the form
  this.username = '';
  this.email = '';
  this.password = '';

  // Close the form
  this.showSignUpForm = false;
    // Handle form submission logic here
  }
}


