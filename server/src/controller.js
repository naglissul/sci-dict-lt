const dictService = require("./service");

async function getAllWords(req, res) {
  try {
    const data = await dictService.fetchAllWords();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createWord(req, res) {
  const { lt, en, comments } = req.body;
  if (!comments) {
    res.status(400).json({ error: "Comments field is required" });
  }

  try {
    const id = await dictService.createNewWord(req.body);

    res.status(201).json({ id: id[0].id, ...req.body });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateWord(req, res) {
  const { id, name, title, content } = req.body;
  if (!id || !content) {
    res.status(400).json({ error: "ID and content fields are required" });
  }

  try {
    const resultId = await dictService.updateExistingWord(req.body);

    if (resultId.length === 0) {
      res.status(400).json({ error: `Word with id=${id} does not exist` });
    } else {
      res.status(200).json(req.body);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteWord(req, res) {
  const id = req.params.id;
  if (id < 1) {
    res.status(400).json({ error: "ID must be positive" });
  }

  try {
    const resultId = await dictService.deleteExistingWord(id);

    if (resultId.length === 0) {
      res.status(400).json({ error: `Word with id=${id} does not exist` });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function initDict(req, res) {
  try {
    await dictService.initDictTable();
    res.status(200);
  } catch (error) {
    console.error("Error while creating table:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}


module.exports = {
  getAllWords,
  createWord,
  updateWord,
  deleteWord,
  initDict
};