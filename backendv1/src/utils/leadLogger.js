const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "..", "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, "[]", "utf-8");
  }
}

function saveLead(lead) {
  ensureDataFile();
  const existing = JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));
  existing.push({ ...lead, receivedAt: new Date().toISOString() });
  fs.writeFileSync(LEADS_FILE, JSON.stringify(existing, null, 2), "utf-8");
}

module.exports = { saveLead };
