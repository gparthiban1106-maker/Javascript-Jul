function insertionSort(arr) {
    let n=arr.length;    
    
    for (let i = 1; i < n; i++) {
            let key=arr[i]; //key=arr[1] => key=5
            let j=i-1; //j=1-1 =>  j=0
            
            while (j>=0 && arr[j]>key) { //
                arr[j+1]=arr[j];
                console.log(`Shift ${arr[j]} →`, arr);
                j--;
            }
            arr[j+1]=key;
              console.log(`Insert ${key} →`, arr);
    }
    return arr;
}

let arr=[2,5,4,8,1]
let val=insertionSort(arr)
console.log(val);

