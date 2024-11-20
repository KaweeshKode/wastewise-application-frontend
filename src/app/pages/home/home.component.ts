import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from "../../app.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, AppComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
