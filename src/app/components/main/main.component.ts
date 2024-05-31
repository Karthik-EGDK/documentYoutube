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
    const author = document.getElementById('card-author');
    const views = document.getElementById('card-view');
    const DOU = document.getElementById('card-DOU');
    const DocUser = document.getElementById('user');
    const subscribers = document.getElementById('subscribers');

    const dataJson = await fetch(`http://localhost:3000/entries/${iid}`);
    const data = await dataJson.json();
    if (
      cardWindow &&
      cardDescription &&
      author &&
      views &&
      DOU &&
      DocUser &&
      subscribers
    ) {
      cardWindow.setAttribute('src', data.pdfLink);
      // console.log(data);
      subscribers.innerText = data.subscribers;
      cardDescription.innerText = data.description;
      DocUser.innerText = data.uploader;
      author.innerText = data.author;
      views.innerText = data.views;
      DOU.innerText = data.DOU;
      return;
    }
  };
}
