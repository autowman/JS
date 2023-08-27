import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
// 1. Use the inquirer npm package to get the user input;
inquirer
  .prompt([
    {
        name: 'URL', 
        message: 'What URL you want to generate:'
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', url, (err)=> {
        if (err) throw err;
        console.log("The file have been saved!")
    })
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// 2. Use the qr-image npm package to turn entered url into QR code image;
// 3. Create the txt file to save user input using the native fs node module;


