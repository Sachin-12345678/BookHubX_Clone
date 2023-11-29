// src/app/models/book.model.ts

export interface Book {
    _id: string; // Assuming your backend uses _id for book identification
    title: string;
    author: string;
    genre: string;
    description: string;
    price: string;
  }
  