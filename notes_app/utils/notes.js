const fs = require('fs');
const chalk  =require('chalk');

function getNotes(){
    return 'Your notes...';
}
function addFile(title, body){
    //console.log(title, body);
    const noteList = loadNotes();
    const duplicates = noteList.filter(note=>{
                            note.title === title;
                        });
    if(!duplicates.length){
        console.log('Note title taken');
    }
    noteList.push({
        title,
        body
    });
   // console.log(noteList);
    debugger
    saveNote(noteList);
}
function removeNote(title){
    console.log(title,' note will be removed');
    const dataJSON = loadNotes();
    const notesToKeep = dataJSON.filter(note=>{
        return note.title!=title; 
    });
    if(notesToKeep.length !== dataJSON.length){
        console.log(chalk.green.inverse('Note removed'));
    }
    else{
        console.log(chalk.red.inverse('No Note found'));
    }
    saveNote(notesToKeep);
}
function saveNote(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./notes.json',dataJSON);
}
function loadNotes(){
    try{
        const data = fs.readFileSync('notes.json','utf-8');
        const dataJSON = JSON.parse(data);
        return dataJSON;
    }catch(err){
        return [];
    }
   
    

}
module.exports = {
   getNotes,
   loadNotes,
   addFile,
   removeNote

};