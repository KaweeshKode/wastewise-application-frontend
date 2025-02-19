import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private http:HttpClient, private router: Router) {}

  public user:any = {
    name : "",
    email : "",
    password : "",
    role: ""
  }

  addUser() {
    // Check if all fields are filled
    if (!this.user.name || !this.user.email || !this.user.password || !this.user.role) {
      alert("Please fill in all required fields.");
      return; // Stop the execution
    }

    // Additional validation for password length
    if (this.user.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return; // Stop the execution
    }

    // Validation passed, send data to the server
    this.http.post("http://localhost:8080/user/add", this.user).subscribe({
      next: (data) => {
        alert("User Added!!!");
        this.router.navigateByUrl("/home");
      },
      error: (err) => {
        console.error('Error adding user:', err);
        alert("Failed to add user.");
      }
    })
  }

}
