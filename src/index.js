module.exports = function toReadable(number) {
    let res1 = "",
        res2 = "";
    const units1 = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",];
    const tens1 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];
    const dozens1 = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",];
    
    let hun = Math.floor(number / 100);
    let doz = number % 100;
    let te = Math.floor(doz / 10);
    let un = doz % 10;
  
       if (number === 0) {return "zero";}
       if (doz < 10) res2 = units1[un];
       if (doz >= 10 && doz < 20) res2 = tens1[un];
       else if (doz >= 20 && un != 0) res2 = dozens1[te] + " " + units1[un];
       else if (doz >= 20 && un === 0) res2 = dozens1[te];
       if (hun > 0 && doz != 0) res1 = units1[hun] + " hundred ";
       else if (hun > 0 && doz === 0) res1 = units1[hun] + " hundred";
  
    let result = res1 + res2;
    return result;
  };