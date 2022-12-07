// function town(input){
//
//    let arr = input.join(' | ').split(' | ')
//    let obj = {};
//
//    for (let index = 0; index < arr.length; index++) {
//
//        obj.town = arr[index];
//        index++;
//
//        obj.latitude = Number(arr[index]).toFixed(2);
//        index++;
//
//        obj.longitude = Number(arr[index]).toFixed(2);
//        
//        console.log(obj);
//        obj = {};
//    }
//}
//town(['Sofia | 42.696552 | 23.32601',
//'Beijing | 39.913818 | 116.363625']
//)

function town(input) {

    let array = [];
    let [town, latitude, longitude] = input.join(' | ').split(' | ');

    array.push({ town });
    let data = array.find(el => el.town === town);
    if (data) {
        data.latitude = latitude
    }
    let data1 = array.find(el => el.town === town);
    if (data1) {
        data1.longitude = longitude
    }
    array.forEach(data1 => {
        console.log(data1);
    });

}
town(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)