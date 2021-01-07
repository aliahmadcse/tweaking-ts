import fs from "fs";

const matches = fs
    .readFileSync("./football.csv", {
        encoding: "utf-8",
    })
    .split("\n")
    .map((row: string): string[] => row.split(","));

let manUnitedWon = 0;

enum MatchResult {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D",
}

for (let match of matches) {
    if (
        (match[1] == "Man United" && match[5] == MatchResult.HomeWin) ||
        (match[2] == "Man United" && match[5] == MatchResult.AwayWin)
    ) {
        manUnitedWon++;
    }
}


console.log(manUnitedWon);
