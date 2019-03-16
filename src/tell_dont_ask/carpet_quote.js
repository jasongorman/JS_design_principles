function area(room) {
    return room.length * room.width;
}

function priceForRoom(roomArea, carpet) {
    let sqrMetres = roomArea;
    if(carpet.roundUp){
        sqrMetres = Math.ceil(sqrMetres);
    }
    return sqrMetres * carpet.pricePerSqrMetre;
}

function quote(room, carpet) {
    return priceForRoom(area(room), carpet);
}

module.exports = quote;