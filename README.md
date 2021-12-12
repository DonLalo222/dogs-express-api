# pets-express-api
 
 Api de mascotas que contiene información de perros y gatos, información obtenida mediante técnicas de web scraping usando tecnologías como node, librería cheerio (manipulación del Dom), escrito en javascript con expressjs.


## Rutas

**Root**: 	https://donlalo-api-dogs.herokuapp.com/api

## Búsqueda

/dogs/search?q={**input**}  
/cats/search?q={**input**}  

  *Devuelve un objeto basado en las coincidencias de* {**input**}
  
  **Ejemplo:** /dogs/search?q=labrador

**Result**:
```
    {
	    "count": 1,
		    "result": [
			    {
                    "id": 45,
				    "name": "Labrador Retriever",
				    "url": "https://www.expertoanimal.com/razas-de-perros/labrador-retriever.html",
				    "img": "https://t2.ea.ltmcdn.com/es/razas/0/0/1/img_100_labrador-retriever_0_300_square.jpg"
			    }
		    ]
    }
```
## Búsqueda por Abecedario

/dogs/letter/{**letra**}

/cats/letter/{**letra**}

  *Devuelve un objeto donde* **Result** *contiene un array de elementos que empiezan con* **letra**
  
  **Ejemplo:** /dogs/letter/a

**Result**:
```
    {
	    "count": 13,
		    "result": [
				{
					"name": "Alano español",
					"url": "https://www.expertoanimal.com/razas-de-perros/alano-espanol.html",
					"img": "https://t2.ea.ltmcdn.com/es/razas/0/4/1/img_140_alano-espanol_0_300_square.jpg"
				}, ... 
		    ]
    }
```
## Obtener Detalles 

/dogs/details/{**id**}

/cats/details/{**id**}

Devuelve un objeto con los detalles de la mascota en base a la propiedad **id**
  
  **Ejemplo:** /dogs/details/45

**Result**:
```
    {
	    "result":
		    {
			    "nombre":"Alano español",
			    "descripcion":"Pese a su apariencia e historia, el alano español es un perro que puede ser un gran compañero de vida incluso en pequeños pisos. Eso sí, se debe mantener activo física y mentalmente, y debe recibir una correcta socialización y educación desde sus primeras semanas de vida para controlar ciertos temperamentos de su carácter natural. Es una raza muy antigua que casi se extinguió, pero que a día de hoy sigue vigente y es respetada y valorada por sus dotes e historia. Son perros medianos, de hocico corto y equilibrados, con mucha fortaleza y valentía, pero muy leales a su cuidador.",
			    "clasificacionFCI":["Grupo II"],
			    "origen":["Europa","España"],
			    "caracteristicas":["Rústico","Musculoso","Proporcionado","Orejas cortas"],
			    "caracter":["Equilibrado","Fuerte","Muy fiel","Activo","Tranquilo","Dominante"],
			    "idealPara":["Pisos","Casas","Senderismo","Caza","Deporte"],
			    "pelo":["Corto","Grueso"],
			    "img":"https://t1.ea.ltmcdn.com/es/razas/0/4/1/img_140_alano-espanol_0_600.jpg"
		    }
    }
```


