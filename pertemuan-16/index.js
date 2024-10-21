// Asinchronous JS

// Asinchronous JS -> single thread -> blocking
console.log("Proses 1");
console.log("Proses 2");
console.log("Proses 3");
console.log("Proses 4");

// Asinchronous JS -> multi thread -> non-blocking
// 1.Parallel
setTimeout(() => {
    console.log("Proses 1");
}, 5000);
console.log("Proses 2");
setTimeout(() => {
    console.log("Proses 3");
}, 3000);
console.log("Proses 4");

// 2.Concurren
setTimeout(() => {
    console.log("Proses 1");
    setTimeout(() => {
        console.log("Proses 2");
        setTimeout(() => {
            console.log("Proses 3")
            setTimeout(() => {
                console.log("Proses 4");
            }, 3000);
        }, 3000);
    }, 3000);
}, 3000);

// 3. Promise
