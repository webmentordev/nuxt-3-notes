/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "r09q2qneda3s6zs",
    "created": "2024-03-21 21:17:45.190Z",
    "updated": "2024-03-21 21:17:45.190Z",
    "name": "history",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "khab9zq4",
        "name": "note",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "m7tlyalv",
        "name": "note_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "cvryoxffzhs5gye",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": null,
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r09q2qneda3s6zs");

  return dao.deleteCollection(collection);
})
