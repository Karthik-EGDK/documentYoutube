import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  cardFunc = async (iid: number) => {
    const cardWindow = document.getElementById('card-frame');
    const cardDescription = document.getElementById('card-desc');
    const user = document.getElementById('card-author');
    const views = document.getElementById('card-view');
    const DOU = document.getElementById('card-DOU');

    const dataJson = await fetch(`http://localhost:3000/entries/${iid}`);
    const data = await dataJson.json();
    if (cardWindow && cardDescription && user && views && DOU) {
      cardWindow.setAttribute('src', data.pdfLink);
      console.log(data);
      cardDescription.innerText = data.description;
      user.innerText = data.uploader;
      views.innerText = data.views;
      DOU.innerText = data.DOU;
      return;
    }
  };
}
