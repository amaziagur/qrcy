import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  constructor(private _router: Router) {}

  ngOnInit() {
    this._router.events.subscribe((event: Event) => {
      if (!!event && event instanceof RoutesRecognized) {
        const url = event.state.root.firstChild.queryParams.url;
        console.log('Query params are', url);
        this.title = 'http://crazylabz.io/' + url;
        console.log('>>>>' + this.title);
      }
    });
  }
}
