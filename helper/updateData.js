function checkIfTimeIsOut(data) {
    console.log(data);
    data.forEach(function (item) {
        if(Date.now()>item.maxDate){
            data.shift();
        }
    })
}

module.exports=checkIfTimeIsOut;