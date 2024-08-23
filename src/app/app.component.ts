import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { CommonModule } from '@angular/common';
import { LocalIconService } from './shared/services/local-icon/local-icon.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TopBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title: string = 'My notes';

constructor(
  private _locaIconService: LocalIconService
){}

  ngOnInit(): void {
    this._locaIconService.loadIcons();
  }
}
