export function calculatePoints() {
    let allPoints = 0;
    let questions = 0;
    for (let c = 0; c < localStorage.length; c++) {
        const key = localStorage.key(c);
        if (key && key.startsWith("patient")) {
            const value = localStorage.getItem(key);
            if (value) {
                questions++;
                allPoints = allPoints + +value;
            }
        }
    }
    return {
        allPoints,
        questions
    }
}