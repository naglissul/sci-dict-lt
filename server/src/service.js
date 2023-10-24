const pool = require("./database");
const fs = require('fs');

async function fetchAllWords() {
  let client;
  try {
    client = await pool.connect();

    const result = await client.query("SELECT * FROM dict;");

    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
}

async function createNewWord(newWord) {
  let client;
  const { lt, en, comments } = newWord;
  try {
    client = await pool.connect();

    const result = await client.query(
      "INSERT INTO dict(lt, en, comments) VALUES ($1, $2, $3) RETURNING id;",
      [lt, en, comments]
    );

    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
}

async function updateExistingWord(updatedWord) {
  let client;
  const { id, lt, en, comments} = updatedWord;

  try {
    client = await pool.connect();

    const result = await client.query(
      "UPDATE dict SET id=$1, lt=$2, en=$3, comments=$4 WHERE id=$1 RETURNING id;",
      [id, lt, en, comments]
    );

    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
}

async function deleteExistingWord(id) {
  let client;
  try {
    client = await pool.connect();

    const result = await client.query(
      "DELETE FROM dict WHERE id=$1 RETURNING id;",
      [id]
    );

    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
}

async function initDictTable() {
  let client;
  try {
    client = await pool.connect();

    const sqlQuery = fs.readFileSync("dictInit.sql", "utf8");

    const result = await client.query(sqlQuery);
    
    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
}

module.exports = {
  fetchAllWords,
  createNewWord,
  updateExistingWord,
  deleteExistingWord,
  initDictTable
};