import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cities: String[] = ['London', 'Paris', 'Moscow', 'New York', 'Karachi', 'Sydney'];
  cityControl: FormControl;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('I\'m initialized!');

    this.cityControl = new FormControl("");

    // Set to null as a workaround to display the input's placeholder.
    // This addresses a bug in the ANTD NG select component.
    this.cityControl.setValue(null);

    this.cityControl.valueChanges.subscribe(value => {
      console.log('You selected ' + value);
      value ? this.router.navigate([value]) : this.router.navigate(['']);
    });
  }
}
