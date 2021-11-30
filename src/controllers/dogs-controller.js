import { detailsByUrl, searchByInputUser, findAllByFirstLetter } from "../dao/dog-dao.js";

function search(req, res){
    let input = req.params.inputString.trim();
    let result = searchByInputUser(input);

    res.status(200).json({
        count: result.length,
        result: result
    });
};

async function details(req, res){
    let url = req.query.url.trim();
    let result = await detailsByUrl(url);

    res.status(200).json({
        result: result
    });

};

function letter(req, res){
    let input = req.params.inputString.trim();
    let result = findAllByFirstLetter(input.toLocaleUpperCase());

    res.status(200).json({
        count: result.length,
        result: result
    });
}

export {
    search,
    details,
    letter
}