/**
 * CRUD DB implementation with commands console
 * 
 * Examples:
 * 
 * node . --<action>:<table> --<param>=<value> ...
 * 
 * CREATE:
 * 
 * => node . --create:contact --firstname=elmer --lastname=urrea --phone=32948743 --email="elmer2@email.com"
 *                            |--------------------------values to insert----------------------------------|
 * 
 * UPDATE:
 * 
 * => node . --update:contact --id=3 --lastname=gomez
 * => node . --update:contact --id=3 --phone=128374 --email=ok@email.com
 *                           |-where-||---------values to update--------|
 * 
 * READ:
 * 
 * => node . --read:contact
 * 
 * DELETE:
 * 
 * => node . --delete:contact --id=4
 * => node . --delete:contact --phone=32948743 --lastname=urrea
 *                            |---------where delete-----------|
 */
const { CRUD } = require('./helpers');
const db = require('./models');

const params = process.argv;

if (params.length <= 2) {
    process.exit(0);
}

const args = params.slice(2);

const command = args[0].split(':')[0].substring(2);
const entity = args[0].split(':')[1];
const data = extractData(args);

switch (command) {
    case CRUD.CREATE:
        db[entity]
            .create(data)
            .then(() => console.log(`${entity} created!`))
            .catch(console.log);
        break;
    case CRUD.READ:
        db[entity]
            .findAll()
            .then(console.log)
            .catch(console.log);
        break;
    case CRUD.UPDATE:
        db[entity]
            .update(data, { where: { id: data.id } })
            .then(() => console.log(`${entity} updated!`))
            .catch(console.log);
        break;
    case CRUD.DELETE:
        db[entity]
            .destroy({
                where: data
            })
            .then(() => console.log(`${entity} deleted!`))
            .catch(console.log);
        break;
    default:
        console.log('Operation not found!');
}

function extractData(args) {
    const data = {};
    args.slice(1).map((arg) => {
        const tmp = arg.split('=');
        data[tmp[0].substring(2)] = tmp[1];
    });
    return data;
}