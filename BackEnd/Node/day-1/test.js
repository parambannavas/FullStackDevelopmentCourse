function candys(n, k, candy) {
    candy.sort(function (a, b) { return b - a; });
    let i = 0;
    const dest = candy[k - 1];
    var temp;
    while (i < k) {
        temp = candy[i] - dest;
        candy[i] -= temp;
        i++;
    }
    return candy;
}
//console.log(candys(5,3,[20,10,30,15,35]));


function compare(a, b) {
    return a.x - b.x;
}

function street(l, range) {
    //console.log(range);
    var diff = 0;
    lights = range.sort(compare);

    for (i of lights) {
        diff += (i.y - i.x);
    }
    for (var i = 0; i < l - 1; i++) {

        if (lights[i].y > lights[i + 1].x) {
            diff -= (lights[i].y - lights[i + 1].x)
        }
    }
    console.log(lights);
    return diff;

}


//a=console.log(street(3,[{x:1,y:4},{x:4,y:6},{x:3,y:5}]));


function marathon(n,k,l){
    var sum=0;
    l.sort((a,b)=>{
        return b-a;});
    for(var i=0;i<k;i++){
        sum+=l[i];
    }
    return sum;
}

console.log(marathon(4,2,[4,1,2,5]));
console.log(marathon(4,3,[4,3,6,1]));

