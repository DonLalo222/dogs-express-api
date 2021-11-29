import fetch from 'node-fetch';
import cheerio from "cheerio";
import { data } from "../data/dogs.js";


    function searchByInputUser(input){
        let coincidencias = [];
        //
        data.map(element => {
            if(element.name.toLowerCase().indexOf(input) !== -1){
                coincidencias.push(element);
            }
        });
        //
        return coincidencias;
    };
    
    async function detailsByUrl(url) {
    
        const response = await fetch(url);
    
        const body = await response.text();
    
        const $ = cheerio.load(body);
    
        const origen = [];
        const clasificacionFCI = [];
        const caracteristicas = [];
        const caracter = [];
        const idealPara = [];
        const pelo = [];
    
        const info = $('div.elemento.el--generic').toArray();
        const img = $('div.imagen.lupa').find('img').attr('src');
        const descripcion = $('div.intro').find('p').first().text();
        const nombre = $('h1.titulo').text();
    
        info.map(i => {
            let titulo = $(i).find('div.titulo').text().trim();
            //
            if (titulo === 'Origen') {
                $(i).find('li').toArray().map(x => {
                    origen.push($(x).text().trim());
                })
            }
            if (titulo === 'Clasificación FCI') {
                $(i).find('li').toArray().map(x => {
                    clasificacionFCI.push($(x).text().trim());
                })
            }
            if (titulo === 'Características físicas') {
                $(i).find('li').toArray().map(x => {
                    caracteristicas.push($(x).text().trim());
                })
            }
            if (titulo === 'Carácter') {
                $(i).find('li').toArray().map(x => {
                    caracter.push($(x).text().trim());
                })
            }
            if (titulo === 'Ideal para') {
                $(i).find('li').toArray().map(x => {
                    idealPara.push($(x).text().trim());
                })
            }
            if (titulo === 'Tipo de pelo') {
                $(i).find('li').toArray().map(x => {
                    pelo.push($(x).text().trim());
                })
            }
        })
    
        const dog = ({
            nombre: nombre,
            descripcion: descripcion,
            clasificacionFCI: clasificacionFCI,
            origen: origen,
            caracteristicas: caracteristicas,
            caracter: caracter,
            idealPara: idealPara,
            pelo: pelo,
            img: img
        });
        //
        return dog;
    
    };

export {
    searchByInputUser,
    detailsByUrl
}