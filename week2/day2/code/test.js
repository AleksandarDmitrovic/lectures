const fs = require('fs');

process.stdin.setEncoding('utf8');

console.clear();
console.log("Typewrite sim");

process.stdin.on('data', (data)=>{
    console.clear();
    fs.appendFile('output.txt', data, (err)=>{
        console.log('Ping!');
        setTimeout(()=>{
            console.clear();
        }, 500);
    })
})

process.stdin.on('end', ()=>{
    console.log(' work saved ');
})