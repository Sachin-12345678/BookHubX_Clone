// src/app/bookstore/bookstore.component.ts

import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';  // Adjust the path if needed
import { BookstoreService } from './bookstore.service';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css'],
})
export class BookstoreComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookstoreService: BookstoreService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  private loadBooks(): void {
    this.bookstoreService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }
}
