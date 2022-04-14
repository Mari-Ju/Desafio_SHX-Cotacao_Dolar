import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  show() {
    this.document.body.classList.add('loading');
  }

  hide() {
    this.document.body.classList.remove('loading');
  }
}
