const fs = require('fs')

fs.readdir('./src/components/icons', (err, files) => {
    files.forEach(file => {
        console.log(file.path);
    });
});
