// // src/app/bookstore/bookstore.service.ts

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// // import { Book } from '../models/book.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class BookstoreService {
//   private apiUrl = 'http://localhost:your_backend_port/api'; // Replace with your backend API URL

//   constructor(private http: HttpClient) {}

//   getBooks(): Observable<Book[]> {
//     return this.http.get<Book[]>(`${this.apiUrl}/allbooks`);
//   }
// }
