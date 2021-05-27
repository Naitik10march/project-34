class Monster{
    constructor(x,y,width,heigth){
        var options = {
            isStatic: true,
            restitution:0.5,
            friction:1.0
        }
        this.body = Bodies.rectangle(x,y,width,heigth,options);
        this.width = width;
        this.heigth = heigth;
        this.image = loadImage("images/Monster-01.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.heigth);
        pop(); 
    }
}