class Polygon{
    constructor() {
        var options = {
            restitution:1,
            friction:0.2,
            density:0.2
            
        }
        this.body = Bodies.circle(350,40,50,options);
        this.image = loadImage("polygon.js");
        this.radius = 50;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        
        ellipseMode(CENTER);
       ellipse(0,0,this.radius,this.radius);
        pop();
      }
}