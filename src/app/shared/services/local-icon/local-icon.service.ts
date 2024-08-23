import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface IconRecord {
  name: string,
  ref: string
}

const ASSETS_ICONS_LOCATION = 'assets/icons';

const iconsRefs: IconRecord[] = [
  {
    name: 'google-icon',
    ref: 'google-icon.svg'
  }
]

@Injectable({
  providedIn: 'root'
})
export class LocalIconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  loadIcons(): void {
  
    iconsRefs.forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer
          .bypassSecurityTrustResourceUrl(`${ASSETS_ICONS_LOCATION}/${icon.ref}`)
      )
    })
  }
}
