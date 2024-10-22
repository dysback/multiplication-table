export function randomInt(max: number) : number {
    return Math.floor(Math.random() * max);
}


export function callAfter(mSec: number,  callFn: any, args: Array<any>=[],
                            intervalMs: number=1000, intervalFn: any = null, intervalArgs : Array<any>=[]) {
    if(mSec > 0) {
        console.log(mSec);
        setTimeout(intervalFn, 0, ...intervalArgs);
        setTimeout(callAfter, intervalMs, mSec - intervalMs, callFn, args, intervalMs, intervalFn, intervalArgs);
        return;
    }
    setTimeout(callFn, 1000, ...args);

}

export function PromiseCallAfter(mSec: number,  callFn: any, args: Array<any>=[],
    intervalMs: number=1000, intervalFn: any = null, intervalArgs : Array<any>=[]) {
if(mSec > 0) {
console.log(mSec);

const waiti = (ms:number) => new  Promise(resolve => setTimeout(resolve, ms));
waiti(0).then(() => {
    const wait = (ms:number) => new  Promise(promiseCallAfter => setTimeout(promiseCallAfter, ms));
    //setTimeout(callAfter, intervalMs, mSec - intervalMs, callFn, args, intervalMs, intervalFn, intervalArgs);
})


//setTimeout(intervalFn, 0, ...intervalArgs);
return;
}
setTimeout(callFn, 1000, ...args);

}


