module.exports = {
  quote: function(req, res) {
    const fendeSidesArray = req.body;
    let quote = 0;
    const sidesQuotes = [];
    fendeSidesArray.map(side => {
      let quoteBySide =
        side.woodType === "Cedar" ? side.length * 23 : side.length * 21;
      side.gates.map(gate => {
        switch (true) {
          case gate.size <= 4:
            quoteBySide += 250;
            break;
          case gate.size <= 6:
            quoteBySide += 300;
            break;
          case gate.size <= 8:
            quoteBySide += 500;
            break;

          default:
            quoteBySide += 650;
            break;
        }
      });
      sidesQuotes.push(quoteBySide);
      quote += quoteBySide;
    });

    res.json({ totalQuote: quote, sidesQuotes });
  }
};
