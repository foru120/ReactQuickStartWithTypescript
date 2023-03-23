function arrayConcat2<T>(items1 : T[], items2 : T[]) : T[] {
    return items1.concat(items2);
}

let arr2 = arrayConcat2<number>([10,20,30],[40,50]);
// arr2.push("hello");