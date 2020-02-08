import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lucien';
  isAuth = false;
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'éteint'
    },
    {
      name: 'Ordinateur',
      status: 'allumé'
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout !');
    for(let i=0;i<this.appareils.length;i++){
      this.appareils[i].status='allumé';
    }
  }
  onEteindre() {
    console.log('On allume tout !');
    for(let i=0;i<this.appareils.length;i++){
      this.appareils[i].status='éteint';
    }
  }
}
