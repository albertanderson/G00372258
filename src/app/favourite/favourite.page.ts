import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'; // To use the storage
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
selector: 'app-favourite',
templateUrl: './favourite.page.html',
styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
yourFavourite: string;
constructor(private storage: Storage, private route:Router) { } // local instance for storage
ngOnInit() {
this.storage.get("yourFavourite")
.then((data) => {
this.yourFavourite = data;
})
.catch();
}
saveFavourite() {
console.log(this.yourFavourite);
this.storage.set("favourite", this.yourFavourite)// Gives you access to storage
.then(
() => {
this.route.navigateByUrl('/favourite');//Route to favourite page
})
.catch();
}
}
