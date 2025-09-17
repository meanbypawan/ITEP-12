console.log("At the start....."); // V8
setImmediate(()=>{ // 4
    console.log("Set Immediate Executed...");
})
setTimeout(()=>{ // 3
    console.log("Timeout Executed...");
},0);

process.nextTick(()=>{  // 1
    console.log("Tick Executed....");
});

Promise.resolve().then(()=>{ // 2
    console.log("Promise is executed...");
})
console.log("At the end...."); // V8
