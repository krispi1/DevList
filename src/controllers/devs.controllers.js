import { openDB, deleteDB, wrap, unwrap } from "idb";

let IDB;
(() => {
  // Check browser support for IndexedDB
  if (!("indexedDB" in window)) {
    alert("IndexedDB not supported in this browser!!");
    return;
  } else {
    IDB = window.indexedDB;
    console.log("\nIDB -->", IDB);
    console.log("\nopenDB -->", openDB);
    console.log("\ndeleteDB -->", deleteDB);
    console.log("\nwrap -->", wrap);
    console.log("\nunwrap -->", unwrap);
  }
})();

IDB.dbName = "devs";

IDB.createEmptyDB = function(tableName) {
  return new Promise(function(resolve) {
    IDB.open(IDB.dbName, 1, function(upgradeDB) {
      if (!upgradeDB.objectStoreNames.contains(tableName)) {
        // OS == ObjectStore
        // keyPath == Primary key
        const devsOS = upgradeDB.createObjectStore(tableName, {
          keyPath: "email"
        });
        // Indexes enable and facilitate fast search operations
        devsOS.createIndex("firstName", "firstName", { unique: false });
        devsOS.createIndex("lastName", "lastName", { unique: false });
        devsOS.createIndex("email", "email", { unique: true });
      }
    }).then(resolve);
  }); // return
}; // IDB.createEmptyDB

IDB.add = function(tableName, records) {
  return new Promise(function(resolve, reject) {
    IDB.open(IDB.dbName)
      .then(function(idbCx) {
        const tx = idbCx.transaction(tableName, "readwrite");
        const os = tx.objectStore(tableName);
        // Resolve all promises in the promises list
        return Promise.all(
          records.map(record => {
            return os.add(record);
          })
        ).then(function() {
          return tx.complete;
        });
      })
      .then(resolve)
      .catch(err => reject(err));
  }); // return
}; // IDB.add

IDB.clearDB = function() {
  return new Promise(function(resolve) {
    IDB.open(IDB.dbName)
      .then(function(idbCx) {
        const tx = idbCx.transaction(idbCx.objectStoreNames, "readwrite");
        return Promise.all(
          Array.from(idbCx.objectStoreNames, osName => {
            return tx.objectStore(osName).clear();
          })
        ).then(function() {
          return tx.complete;
        });
      })
      .catch(err => console.log(err))
      .then(resolve);
  }); // return
}; // IDB.clear

function createTestData() {
  IDB.add("books", [
    { id: "006251587X", title: "Weaving the Web", year: 2000, edition: 2 },
    { id: "0465026567", title: "Gödel, Escher, Bach", year: 1999 },
    { id: "0465030793", title: "I Am a Strange Loop", year: 2008 }
  ]);
} // createTestData

// createTestData()
// IDB.createEmptyDB();

export default IDB;
