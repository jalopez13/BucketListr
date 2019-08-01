import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from "@angular/router";
import { DataService } from "../../services/data/data.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _data: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => console.log(res));
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
