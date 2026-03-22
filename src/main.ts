import fs from 'fs';
import path from 'path';
import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import { customLogger } from './custom-logger.js';
import { IRecord } from './IRecord.js';
import { searchByQuery } from './search-by-query.js';
import { PaginationEntity } from './PaginationEntity.js';
import { generateDbItems } from './generate-db-items.js';

const { default: data } = await import('../db.json', {
  with: { type: 'json' }
});

const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/records', async (req, res) => {
  try {

    res.send(200);

  } catch (err) {

    const errorText = `Ошибка при добавлении записи: ${err.toString()}`;
    customLogger.log('error', errorText);
    res.send(errorText).status(500);
  }
});

app.get('/api/records', async (req, res) => {
  const page = Math.abs(parseInt(req.query.page as string)) || 1;
  const limit = Math.abs(parseInt(req.query.limit as string)) || 20;
  const offset = (page - 1) * limit;
  const searchQuery = (req.query.search || '') as string;

  const itemsArray = data as IRecord[];
  const filtered = searchByQuery(itemsArray, searchQuery);

  try {

    const paginated = filtered.slice(offset, limit + offset);

    const result: PaginationEntity<IRecord> = {
      items: paginated,
      pagination: {
        total: filtered.length,
        page,
        limit,
      }
    };

    res.send(result).status(200);

  } catch (err) {

    const errorText = `Ошибка при запросе записей: ${err.toString()}`;
    customLogger.log('error', errorText);
    res.send(errorText).status(500);
  }
});

app.get('/api/ping', (req, res) => {
  res.send(200);
});

app
  .listen(3010, () => {
    customLogger.log('info', `Server is running on port ${3010}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      customLogger.log('error', "Error: address already in use");
    } else {
      customLogger.log('error', err);
    }
  });



// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 3000;
// const DB_FILE = path.join(__dirname, 'db.json');

// Middleware to parse JSON in request bodies
// app.use(express.json());

// Helper functions to read/write the database file
// const readDb = () => {
//   const data = fs.readFileSync(DB_FILE, 'utf8');
//   return JSON.parse(data);
// };

// const writeDb = (data) => {
//   fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
// };

const items = generateDbItems(100_000);
fs.writeFileSync('db.json', JSON.stringify(items, null, 2), 'utf8');

// Example route to get all items
// app.get('/api/items', (req, res) => {
//   const db = readDb();
//   res.json(db.items);
// });

// Example route to add a new item (POST request)
// app.post('/api/items', (req, res) => {
//   const db = readDb();
//   const newItem = req.body;
//   newItem.id = Date.now(); // Simple ID generation
//   db.items.push(newItem);
//   writeDb(db);
//   res.status(201).json(newItem);
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });