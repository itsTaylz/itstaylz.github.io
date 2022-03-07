alert("Testing...")

const fs = require('fs');

fs.writeFile('ITCHIOEXPLOIT.txt', "AHAHA", (err) => {
    alert(err.message);
})