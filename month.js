


const monthName = [
    "Jan", "Feb", "Mar"
    ]

function getMonthName(mo) {
    mo--;
    
    if (monthName[mo]) {
        return monthName[mo]
    } else {
        throw new Error("Invalid Month Name")
    }
}

try {
    monthName = getMonthName(myMonth);
} catch (e) {
    monthName = "unknown";
    logMyErrors(e);
}

let text = "Hello World";
text.length;