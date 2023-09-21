import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expanding_cards';

  constructor(
    private el: ElementRef
  ){}


  ngOnInit() {
    const panels: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.panel');
    panels.forEach((panel: HTMLElement) => {
      panel.addEventListener('click', () => {
        this.removeActiveClasses(panels);
        panel.classList.add('active');
      });
    });
  }

  removeActiveClasses(panels: NodeListOf<HTMLElement>) {
    panels.forEach((panel: HTMLElement) => {
      panel.classList.remove('active');
    });
  }



  images = [
    {title: "Explore The World", url:"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
    {title: 'Wild Forest', url:'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'},
    {title: 'Sunny Beach', url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'},
    {title: 'City on Winter', url:'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
    {title: 'Mountains - Clouds', url:'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
  ];



}
