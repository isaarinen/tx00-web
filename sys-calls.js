import * as fs from 'fs';

/*
--- Step 1 ---
*/
const file = 'sample.txt';

fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
    console.error('Error reading file:', err);
    } else {
    console.log('File contents:', data);
    }
});

const output = "oasdijwqeuqwey"

fs.writeFile('output.txt', output, (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    }   else {
        console.log('Successfully wrote to file.');
    }
})

/*
--- Step 2 ---
*/

import * as os from 'os';

const hostname = os.hostname();
const platform = os.platform();
const cpus = os.cpus().length;

console.log('Hostname:', hostname);
console.log('Platform:', platform);
console.log('CPU Cores:', cpus);

/*
--- Optional Task Step 1 ---
*/

const contents = `Hostname : ${hostname}
Platform : ${platform}
CPU Cores: ${cpus}`;

fs.writeFile('osinfo.txt', contents, (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    }   else {
        console.log('Successfully wrote to file.');
    }
});

/*
--- OT Step 2 ---
*/

/*
The output may look as shown because some of the functions are asynchronous and run on separate threads, 
meaning that they can run on their own while the rest of the code is executing, 
if the synchronous code finishes before the threads do, 
their print functions do not execute until after, 
regardless of their position in the code.
*/

/*
--- OT Step 3 ---
*/

import { promises as fsp } from 'fs';


async function readFileAndLogOSInfo() {
    try {
        const data = await fsp.readFile('output.txt', 'utf8');
        console.log('Data from file:', data)

        const platform = os.platform();
        console.log('OS Platform:', platform)
    } catch (error) {
        console.error('Error:', error);
    }
}
readFileAndLogOSInfo();