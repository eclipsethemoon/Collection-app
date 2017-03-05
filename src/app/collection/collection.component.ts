import { Component, OnInit } from '@angular/core';
import { Collectable } from "../collectable.model";
import { CollectableService } from "../collectable.service" ;
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {

  collectedItem: Collectable[] = [];

onRemoveFromCollection(item: Collectable)
{
  this.collectableService.removeFromCollection(item);
}

  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
     this.collectedItem = this.collectableService.getCollection();
  }
 
}
