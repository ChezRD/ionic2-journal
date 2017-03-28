import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {StoreService} from "../../providers/storage";
import {Entry} from "../../model/entry.class";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class EntriesPage {
  entries :any[];
  constructor(public navCtrl: NavController, private store:StoreService) {

    this.entries = [];
    this.store.entries.subscribe(
      // Tri de l'entrée la plus récente
      entries => this.entries = entries.sort((a, b) => {return b.date.getTime() - a.date.getTime()})
    )
  }

}
