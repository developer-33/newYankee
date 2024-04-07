class Yankeeplayers {
    constructor(name, number, postion, games, atBat, runs, hits, doubles, triples, homeRuns, rBI, walksBB, strikeouts, stolenBases, caughtStealing, battingAverage, onBasePercentage, sluggingPercentage, onBasePlusSluggingPercentage) {
        this.name = name;
        this.number = number;
        this.postion = postion;
        this.games = games;
        this.atBat = atBat;
        this.runs = runs;
        this.hits = hits;
        this.doubles = doubles;
        this.triples = triples;
        this.homeRuns = homeRuns;
        this.rBI = rBI;
        this.walksBB = walksBB;
        this.strikeouts = strikeouts;
        this.stolenBases = stolenBases;
        this.caughtStealing = caughtStealing;
        this.battingAverage = battingAverage;
        this.onBasePercentage = onBasePercentage;
        this.sluggingPercentage = sluggingPercentage;
        this.onBasePlusSluggingPercentage = onBasePlusSluggingPercentage;
    }
    toHTML() {
        return `
        <tr>
        <br>
            <td>
           ${this.name}
           </td>
            <br>
            <br>

            <td>
            Number: ${this.number}
            </td>

            <br>
            <td>
            Postion: ${this.postion}
            </td>
            <br>

            <td>
            Number Of Games: ${this.games}
            </td>
            <br>

            <td data-label="AtBat">
            Number Of AtBats: ${this.atBat}
            </td>
            <br>

            <td>Number Of Runs: ${this.runs}</td>
            <br>
            <td>Number Of Hits: ${this.hits}</td>
            <br>
            <td>Number Of Doubles: ${this.doubles}</td>
            <br>
            <td>Number Of Triples: ${this.triples}</td>
            <br>
            <td>Number Of HomeRuns: ${this.homeRuns}</td>
            <br>
            <td>Number Of RBI: ${this.rBI}</td>
            <br>
            <td>Number Of Walks: ${this.walksBB}</td>
            <br>
            <td>Number Of Strikeouts: ${this.strikeouts}</td>
            <br>
            <td>Number Of Stolen Bases: ${this.stolenBases}</td>
            <br>
            <td>Caught Stealing: ${this.caughtStealing}</td>
            <br>
            <td>Batting Average: ${this.battingAverage}</td>
            <br>
            <td>On Base Percentage: ${this.onBasePercentage}</td>
            <br>
            <td>Slugging Percentage: ${this.sluggingPercentage}</td>
            <br>
            <td>On Base Pkus Slugging Percentage: ${this.onBasePlusSluggingPercentage}</td>
            <br>
            </tr>`;

    }
}

export default Yankeeplayers;