import { Injectable } from "@angular/core";
import { from,Observable,of } from "rxjs";
import { delay } from "rxjs";
@Injectable({
    providedIn:"root"
})
    export class ShowCaseService{
        constructor(){ }
        getDataApi(): Observable <any> {
const data =[
    {
        "id": 4,
        "nombre": "Camiseta Negra",
        "precio": "22 ",
        "image": "https://firebasestorage.googleapis.com/v0/b/app-web-b76bc.appspot.com/o/camiseta.jpg?alt=media&token=5deb7156-4649-4f72-8daa-b762560f6f8d"
      },
      {
        "id": "2",
        "nombre": "Buzo negro",
        "precio": "22",
        "image": "https://firebasestorage.googleapis.com/v0/b/app-web-b76bc.appspot.com/o/buso%20azul.jpg?alt=media&token=ffcb33a6-64ef-4be1-bd9b-e7a3ae4e3bf4"
      },
      {
        "id": "5",
        "nombre": "Buso Rosa",
        "precio": "22 ",
        "image": "https://firebasestorage.googleapis.com/v0/b/app-web-b76bc.appspot.com/o/buso%20rosa.jpg?alt=media&token=7237ab06-179c-4ec1-a6b9-4d9ef195b6b3"
      },
      {
        "id": "6",
        "nombre": "Buzo Naranja",
        "precio": "22",
        "image": "https://firebasestorage.googleapis.com/v0/b/app-web-b76bc.appspot.com/o/buso%20naranja.jpg?alt=media&token=4228976c-c353-4539-aa96-b1a4e0063ea2"
      }
]
return of(data).pipe(
    delay(1500)
)
        }
    }
