import fetch from "node-fetch";
import cheerio from "cheerio";

import { data as cats } from "../data/cats.js";
import { data as dogs } from "../data/dogs.js";

let origen = [];
let caracteristicas = [];
let clasificacionFCI = [];
let caracter = [];
let idealPara = [];
let pelo = [];
// quita acentos
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
//
function selectData(where) {
  let data = [];
  switch (where) {
    case "cats":
      data = cats;
      break;
    case "dogs":
      data = dogs;
      break;
  }

  return data;
}

function clearArr() {
  origen = [];
  caracteristicas = [];
  clasificacionFCI = [];
  caracter = [];
  idealPara = [];
  pelo = [];
}


function pushOnArray(arr, $) {
  //
  clearArr();
  //
  arr.map((i) => {
    let titulo = $(i).find("div.titulo").text().trim();
    //
    switch (titulo) {
      case "Origen":
        $(i)
          .find("li")
          .toArray()
          .map((x) => {
            origen.push($(x).text().trim());
          });
        break;
      case "Clasificación FCI":
        $(i)
          .find("li")
          .toArray()
          .map((x) => {
            clasificacionFCI.push($(x).text().trim());
          });
        break;
      case "Características físicas":
        $(i)
          .find("li")
          .toArray()
          .map((x) => {
            caracteristicas.push($(x).text().trim());
          });
        break;
      case "Carácter":
        $(i)
          .find("li")
          .toArray()
          .map((x) => {
            caracter.push($(x).text().trim());
          });
        break;
      case "Ideal para":
        $(i)
          .find("li")
          .toArray()
          .map((x) => {
            idealPara.push($(x).text().trim());
          });
        break;
      case "Tipo de pelo":
        $(i)
          .find("li")
          .toArray()
          .map((x) => {
            pelo.push($(x).text().trim());
          });
        break;
    }
    //
  });
}
/////
////
////
function searchByInputUserDao(input, where) {
  let coincidencias = [];
  let inputNormalize = removeAccents(input);
  let data = [];

  data = selectData(where);
  //
  data.map((element) => {
    let normalize = removeAccents(element.name.toLowerCase());
    if (normalize.indexOf(inputNormalize) !== -1) {
      coincidencias.push(element);
    }
  });
  //
  return coincidencias;
}

function findAllByFirstLetterDao(letter, where) {
  const data = selectData(where);

  const result = data.filter(
    (item) => item.name.charAt(0).toLocaleUpperCase() === letter.toLocaleUpperCase()
  );
  return result;
}

/////

async function detailsByIdDao(id, where) {
  const data = selectData(where);

  const find = data.find((item) => item.id === id);
  const response = await fetch(find.url);

  const body = await response.text();

  const $ = cheerio.load(body);

  const info = $("div.elemento.el--generic").toArray();
  const img = $("div.imagen.lupa").find("img").attr("src");
  const descripcion = $("div.intro").find("p").first().text();
  const nombre = $("h1.titulo").text();

  pushOnArray(info, $);

  const pet = {
    nombre: nombre,
    descripcion: descripcion,
    clasificacionFCI: clasificacionFCI,
    origen: origen,
    caracteristicas: caracteristicas,
    caracter: caracter,
    idealPara: idealPara,
    pelo: pelo,
    img: img,
  };
  //
  return pet;
}

export { searchByInputUserDao, findAllByFirstLetterDao, detailsByIdDao }