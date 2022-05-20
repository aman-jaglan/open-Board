 let product=[
   { n: "A",p: 25},
    {n: "B",P: 125},
    {n: "c",P: 150},
    {n: "d",P : 17 }


 ];

 let sqr=[5,83,24,67,71,12,24,7];

 let aSqr=sqr.filter(v=>v*v<1000);

 console.log(aSqr);


let ans=product.map(function(v,i,oarr){
    if(v.P>100){
        return v.n.toUpperCase();
    }
    else{
        return v.n.toLowerCase();
    }
})

console.log(ans);

//  let arr=product.filter(v=> v.P>=100).map(v=> v.n.toUpperCase());


//  let parr=product.filter(function(v,i,oarr){
//      if(v.P>=100){
//         return true;
//      }
//      else{
//          return false;
//      }
//  }).map(function(v,i,oarr){
//      return v.n.toUpperCase();
//  })
//  console.log(parr);

 