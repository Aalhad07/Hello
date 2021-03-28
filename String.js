class String{
    constructor(body1,point2){
        var options = {
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.05,
        }
        this.pointB = point2
        this.string = Constraint.create(options)
        World.add(world,this.string)
    }

    fly(){
        this.string.bodyA = null
    }

    display (){

        if(this.string.bodyA)
        {
        var pt1 = this.string.bodyA.position;
        var pt2 = this.pointB;
        line(pt1.x,pt1.y,pt2.x,pt2.y)
    }
    }
    
}