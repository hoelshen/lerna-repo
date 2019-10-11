const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, 'db');
console.log('dbPath: ', dbPath);
console.log('path: ', path);
if (fs.existsSync(dbPath)) {
  const fileContent = fs.readFileSync(`${process.argv[1]}/db`)
  const list = JSON.parse(fileContent);
  console.log('fileContent: ', fileContent);
  console.log('list: ', list);
  const task = {
    content: `${process.argv[3]}`
  }


  list.push(task);

  fs.writeFileSync(`${process.argv[1]}/db`, JSON.stringify(list));
  console.log(list)

} else {
  fs.writeFileSync(dbPath, '');
  const list = [];
  const task = {
    content: `${process.argv[3]}`
  }
  list.push(task);
  fs.writeFileSync(`${process.argv[1]}/db`, JSON.stringify(list));
  console.log(list)
};

try{
fs.statSync(dbPath)
} catch(err){
  fs.writeFileSync(dbPath, '')
}
