let arr=[10,20,30,40,50];

let left:number=0;
let right:number=arr.length-1;

while(left<=right){
    if(left==right){
        console.log(arr[left])
    }
    else{
        console.log(arr[left])
    console.log(arr[right]);
    }
 
    left++
    right--
}