const { readFile, writeFile } = require('fs').promises;

// USANDO CALLBACKS

/* readFile('arquivo1.txt', 'utf8', (err, content1) => {
  if(err) return console.log(err);
  writeFile('arquivo1.json', content1, (err) => console.log(err));
  
  readFile('arquivo2.txt',(err, content2) => {
    if(err) return console.log(err);
    writeFile('arquivo2.json', content2, (err) => console.log(err));

    readFile('arquivo3.txt',(err, content3) => {
      if(err) return console.log(err);
      writeFile('arquivo3.json', content3, (err) => console.log(err));
      console.log([content1, content2, content3].toString())
 })
})

});  */

// USANDO .THEN

/* function usandoThen() {

readFile('arquivo1.txt', 'utf8')
.then(data => {
  writeFile('arquivo1.json', data)
});

readFile('arquivo2.txt', 'utf8')
.then(data => {
  writeFile('arquivo2.json', data);
});

readFile('arquivo3.txt', 'utf8')
.then(data => {writeFile('arquivo3.json', data)
});

}

usandoThen(); */

async function usandoAsync() {

  const customers1 = await readFile('arquivo1.txt', 'utf8');
  const customers2 = await readFile('arquivo2.txt', 'utf8');
  const customers3 = await readFile('arquivo3.txt', 'utf8');

  await writeFile('arquivo1.json', customers1);
  await writeFile('arquivo2.json', customers2);
  await writeFile('arquivo3.json', customers3);
}

usandoAsync();