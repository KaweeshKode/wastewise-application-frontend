import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-manage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-manage.component.html',
  styleUrl: './user-manage.component.css'
})
export class UserManageComponent {

  public userList:any = [];

  constructor(private http:HttpClient) {
    this.loadTable();
  }

  loadTable() {
    this.http.get("http://localhost:8080/user/all").subscribe(data => {
      this.userList = data;
    })
  }

  deleteUser(id:any) {
    console.log(id);
    this.http.delete(`http://localhost:8080/user/delete/${id}`).subscribe(data => {
      alert("User Delete!!!");
      this.loadTable();
    })
  }

  updateUser() {
    
  }

}
