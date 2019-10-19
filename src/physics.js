var calcVelocity = function(dist, time) { 
    var velocity = dist / time
    return velocity
}
var calcPressure = function(g,h,d) {
    var Pressure=d*g*h
    return pressure
}
var calcCapacity = function(Q,U){
    var capacity = Q/U
    return capacity
}

var phy={
    calcCapacity:calcVelocity,
    calcPressure:calcPressure,
    calcVelocity:calcVelocity


}
module.exports = phy

