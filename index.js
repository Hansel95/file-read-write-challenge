const fs = require('fs');
const readline = require('readline');

// Setup input prompt
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the filename to read: ', (filename) => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(`❌ Error: Cannot read "${filename}". Reason: ${err.message}`);
            rl.close();
            return;
        }

        console.log(`✅ Original content:\n${data}`);

        // Modify content (e.g., reverse text)
        const modified = data.split('').reverse().join('');

        // Write to new file
        fs.writeFile('output.txt', modified, (err) => {
            if (err) {
                console.error(`❌ Error writing to output.txt: ${err.message}`);
            } else {
                console.log('✅ Modified content written to output.txt');
            }
            rl.close();
        });
    });
});