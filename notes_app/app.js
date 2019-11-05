const yargs = require('yargs');
const notes = require('./utils/notes');
yargs.command({
    command : 'add',
    description : 'add a note',
    builder : {
        title : {
            description  : 'title for the note',
            demand : true,
            type : 'string'
        },
        body : {
            description : 'body for the note',
            demand : true,
            type : 'string'
        }
    },
    handler :  function(argv){
        notes.addFile(argv.title, argv.body);
    }
});
yargs.command({
    command : 'remove',
    description : 'remove a note',
    builder : {
        title : {
            description : 'title of note to be removed',
            demand : true,
            type : 'string'
        }
    },
    handler : function(argv){
        notes.removeNote(argv.title);
    }
});
yargs.command({
    command : 'list',
    description : 'list all the notes',
    handler : function(argv){
        console.log(notes.loadNotes());
    }
});
yargs.command({
    command : 'read',
    description : 'read the note',
    handler : function(){
        console.log('Reading the note');
    }
});
//console.log(yargs.argv);
yargs.parse();