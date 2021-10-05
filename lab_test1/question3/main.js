const fs = require('fs');
function writefile(){
    for (let i = 0; i < 11; i++) {
        fs.appendFile('log'+ i +'.txt', 'random content', function (err) {
            if (err) throw err;
            console.log('log'+ i +'.txt');
        });
    }
}

function deletefile(){
    for (let i = 0; i < 11; i++) {
        fs.unlink('log'+ i +'.txt', function (err) {
            if (err) throw err;
            console.log('delete files ...'+'log'+ i +'.txt');
        });
    }
}

writefile()
deletefile()