alert("Testing v23...")

const fs = require('fs');

alert(fs);

fs.writeFile('ITCHIOEXPLOIT.txt', "AHAHA", (err) => {
    alert(err.message);
})

alert('written!');