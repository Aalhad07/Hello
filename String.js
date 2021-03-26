class String{
    constructor(body1,body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            length:10,
            stiffness:0.05,
        }
        this.string = Constraint.create(options)
        World.add(world,this.string)
    }
    display (){
        var pt1 = this.string.bodyA.position;
        var pt2 = this.string.bodyB.position;
        line(pt1.x,pt1.y,pt2.x,pt2.y)
    }
}