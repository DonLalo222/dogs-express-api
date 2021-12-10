import {
  detailsByUrl,
  searchByInputUser,
  findAllByFirstLetter,
} from "../dao/dog-dao.js";

function search(req, res) {
  let input = req.params.inputString.trim();
  res.setHeader("Content-Type", "application/json");
  try {
    let result = searchByInputUser(input);
    //
    if (result.length > 0) {
      res.status(200).json({
        count: result.length,
        result: result,
      });
    } else {
      res.status(404).json({
        message: "not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal error",
    });
  }
}

async function details(req, res) {
  let url = req.query.url.trim();
  res.setHeader("Content-Type", "application/json");
  try {
    let result = await detailsByUrl(url);
    res.status(200).json({
      result: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal error",
    });
  }
}

function letter(req, res) {
  let input = req.params.inputString.trim();
  res.setHeader("Content-Type", "application/json");
  try {
    let result = findAllByFirstLetter(input.toLocaleUpperCase());
    res.status(200).json({
      count: result.length,
      result: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal error",
    });
  }
}

export { search, details, letter };
