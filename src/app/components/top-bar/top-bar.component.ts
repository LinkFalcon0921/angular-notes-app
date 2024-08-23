import { Component, Input } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// Animations
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    NgOptimizedImage
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
  animations: [
    trigger('textVisibility', [
      state('visible', style({
        opacity: 1,
        width: '*'
      })),
      state('hidden', style({
        opacity: 0,
        width: 0
      })),
      transition('hidden <=> visible', animate('200ms ease-in-out'))
    ])
  ]
})
export class TopBarComponent {
  protected logoUrl: string = 'assets/images/notes_logo.png';

  isHovered: boolean = false;

  @Input({ required: true }) title!: string;

  get isLoggedIn(): boolean {
    return false;
  }
}
