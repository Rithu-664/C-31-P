class Plinko{
    constructor(x,y,r){
        var prop={
            isStatic: true
        }

        this.plinko = Bodies.circle(x,y,r,prop);
        this.r=r;
        World.add(world,this.plinko);
    }
    display(){
        var pos = this.plinko.position;
        ellipse(pos.x,pos.y,this.r*2,this.r*2);
    }

}