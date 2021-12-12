
import { 
    detailsByIdDao,
    findAllByFirstLetterDao,
    searchByInputUserDao
   } from "../dao/dao.js";
  
   const where = 'cats';
  
  function search(req, res) {
    let input = req.query.q.trim();
    res.setHeader("Content-Type", "application/json");
    try {
      let result = searchByInputUserDao(input, where);
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
  
  async function detailsById(req, res) {
    let id = req.params.id.trim();
    res.setHeader("Content-Type", "application/json");
    try {
      let result = await detailsByIdDao(Number.parseInt(id), where);
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
  
  function findAllByFirstLetter(req, res) {
    let input = req.params.letter.trim();
    res.setHeader("Content-Type", "application/json");
    try {
      let result = findAllByFirstLetterDao(input, where);
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
  
  export { search, detailsById, findAllByFirstLetter };
  