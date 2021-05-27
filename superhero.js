class superhero{
    constructor(x,y,width,heigth){
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,heigth,options);
        this.width = width;
        this.heigth = heigth;
        this.image = loadImage("images/Superhero-01.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.heigth);
        pop(); 
    }
}