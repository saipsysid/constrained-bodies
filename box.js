class Box{

   constructor(x,y,width,height) {
      var options={
          restitution:1
      } 
    
    this.body=Bodies.rectangle(x,y,width,height);
    World.add(world,this.body);


   
    }

    display(){


    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    var width=this.body.width
    var height=this.body.height
    rectMode(CENTER);
    fill(255)
    rect(pos.x,pos.y,width,height)
    pop();
    }
    
     }
