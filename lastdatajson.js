const fs = require("fs").promises;

async function getLastRecord() {
  try {
    const data = await fs.readFile("tasks.json", "utf-8");
    const jsonData = JSON.parse(data);
    const lastRecord = jsonData[jsonData.length - 1]?.id;

    console.log("Last record:", lastRecord);
  } catch (err) {
    console.error("Error reading file:", err);
  }
  return lastRecord
}

module.exports = getLastRecord();
