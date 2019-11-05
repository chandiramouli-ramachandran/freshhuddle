const fs = require('fs');

const jsonString = fs.readFileSync('./1-json.json','utf-8');
const dataJson = JSON.parse(jsonString);
dataJson.name = 'Chandrasekarendra Swamigal';
fs.writeFileSync('./1-json.json',JSON.stringify(dataJson));