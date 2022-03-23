const bcrypt = require("bcrypt");

bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("memek", salt, function (err, hash) {
        console.log(hash);
    });
});
