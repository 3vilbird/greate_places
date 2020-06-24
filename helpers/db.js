import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("places.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS places(id INTEGER PRIMARY KEY NOT NULL,title TEXT NOT NULL,imageUri TEXT NOT NULL,address TEXT  NOT NULL, lat REAL NOT NULL,lng REAL NOT NULL);",
        [],
        () => {
          //SUCCESS function
          resolve();
        },
        (_, err) => {
          //ERROR function
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertPlace = (title, imageUri, addrress, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places(title,imageUri,address,lat,lng) VALUES(?,?,?,?,?)`,
        [title, imageUri, addrress, lat, lng],
        (_, result) => {
          // here "_" stands for the query that we executed
          //SUCCESS function
          resolve(result);
        },
        (_, err) => {
          //ERROR function
          reject(err);
        }
      );
    });
  });
  return promise;
};
