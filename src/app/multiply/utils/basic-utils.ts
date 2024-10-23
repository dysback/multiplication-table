export function randomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

export class Callback{
    interval: number = 200;
    function!: any;
    params: Array<any> = [];
    stop: number = 0;

    constructor(fn:any, interval:number=200, params:Array<any>=[]) {
      this.function = fn;
      this.interval = interval;
      this.params = params;
    }
  }


export async function PromiseCallAfter(fn:Callback, animate:Callback) {

    const iPromise = new Promise((resolve, reject) => {
        if (fn.interval > 0 && !fn.stop) {
            animate.function(...animate.params);
            setTimeout(() => resolve('OK'), animate.interval);
        } else if (fn.stop) {
            resolve('end');
        } else {
            fn.function(...fn.params);
            resolve('end');
        }
    });

    await iPromise.then(async status => {
        if (status == 'OK') {
            fn.interval = fn.interval - animate.interval;
            await PromiseCallAfter(fn, animate);
        }

    })
}





//-------------------------------------
export async function __PromiseCallAfter(mSec: number, callFn: any, args: Array<any> = [],
    intervalMs: number = 1000, intervalFn: any = null, intervalArgs: Array<any> = []) {

    console.log(mSec);

    const iPromise = new Promise((resolve, reject) => {
        if (mSec > 0) {
            intervalFn(...intervalArgs);
            setTimeout(() => resolve('OK'), intervalMs);
        } else {
            callFn(...args);
            resolve('end');
        }
    });

    await iPromise.then(async status => {
        if (status == 'OK') {
            await __PromiseCallAfter(mSec - intervalMs, callFn, args, intervalMs, intervalFn, intervalArgs);
        }

    })
}

export function __callAfter(mSec: number, callFn: any, args: Array<any> = [],
    intervalMs: number = 1000, intervalFn: any = null, intervalArgs: Array<any> = []) {
    if (mSec > 0) {
        console.log(mSec);
        setTimeout(intervalFn, 0, ...intervalArgs);
        setTimeout(__callAfter, intervalMs, mSec - intervalMs, callFn, args, intervalMs, intervalFn, intervalArgs);
        return;
    }
    setTimeout(callFn, 1000, ...args);

}
