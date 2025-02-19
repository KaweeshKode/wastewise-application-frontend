import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mct-manage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mct-manage.component.html',
  styleUrl: './mct-manage.component.css'
})
export class MctManageComponent {

  public mctList:any = [];

  constructor(private http:HttpClient) {
    this.loadTable();
  }

  loadTable() {
    this.http.get("http://localhost:8080/mct/all").subscribe(data => {
      console.log(data);
      this.mctList = data;
    })
  }

  deleteTeam(teamId:any) {
    console.log(teamId);
    this.http.delete(`http://localhost:8080/mct/delete/${teamId}`).subscribe(data => {
      alert("Team Delete!!!");
      this.loadTable();
    })
  }

  updateTeam() {
    
  }
}
