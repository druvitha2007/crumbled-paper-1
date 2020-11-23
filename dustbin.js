class dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
         }
    this.dustbinObject = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

    World.add(world,this.dustbinObject);
}
display(){
    fill("pink")
    noStroke();
    rectMode(CENTER);
    rect(this.dustbinObject.position.x,this.dustbinObject.position.y,this.width,this.height);
}
}