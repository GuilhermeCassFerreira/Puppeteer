//require('dotenv').config();
const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('Bem vindo ao Bot🤖🌎! Após escolher o CEP abra rapidamente o navegador WEB');

async function robo(){
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  const lista = ['72593-114', '91370-110', '64017-280', '28994-816', '67133-745', '68447-000', '59076-050', '65065-730', '21765-250', '72910-990']
  const QualCEP = readlineSync.question(`Informe qual endereço da lista escolhendo de 0  a ${lista.length - 1}: `)
  const qualquerUrl = `https://buscacepinter.correios.com.br/app/endereco/index.php`
  await page.goto(qualquerUrl);
  //await page.screenshot({ path: 'example.png' });
  const resultado = await page.evaluate(() => {
    return document.querySelector('tr').innerText
  });
  // acessar a página de login
  testando = lista[QualCEP]
  await page.type('[name="endereco"]', testando)
  await page.click('[name="btn_pesquisar"]')
  console.log(`CEP: ${testando},${resultado}`)//saída do resultado no terminal
    //await browser.close();
  }
robo();
