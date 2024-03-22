/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r09q2qneda3s6zs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "khab9zq4",
    "name": "text",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r09q2qneda3s6zs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "khab9zq4",
    "name": "note_text",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
