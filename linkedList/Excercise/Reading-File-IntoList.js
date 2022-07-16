
// import {readFileSync, promises as fsPromises} from 'fs';
const { readFileSync, promises: fsPromises, readFile } = require('fs');

// ✅ read file ASYNCHRONOUSLY
async function asyncReadFile(filename) {
  
  


  try {

    let List = []

    const contents = await fsPromises.readFile(filename, 'utf-8');

    contents.split(/\r?\n/).map(items => List.push(items))

    console.log(List);

    return List;

  } catch (err) {

    throw (`couldn't read from file ${err}`);

  }
}

asyncReadFile('./Movies.txt');
