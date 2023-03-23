function arrayConcat(items1: any[], items2: any[]) : any[] {
    return items1.concat(items2);
}
let arr1 = arrayConcat([10,20,30],['a','b',40]);
arr1.push(true);