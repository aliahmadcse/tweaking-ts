import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let manUnitedWon = 0;

for (let match of matchReader.matches) {
  if (
    (match[1] == "Man United" && match[5] == MatchResult.HomeWin) ||
    (match[2] == "Man United" && match[5] == MatchResult.AwayWin)
  ) {
    manUnitedWon++;
  }
}

console.log(`Man united has won ${manUnitedWon} games`);
