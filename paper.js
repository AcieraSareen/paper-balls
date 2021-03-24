class Paper{
	constructor(x,y,r){
		
	this.image=loadImage("paper.png");
	var options={
        'isStatic':false,
		'restitution' :0.3,
		'friction':0,
		'density' :1.2
	}
    // assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
	}
	
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			strokeWeight(4);
			image(this.image,0,0,this.r,this.r);
			pop()
	}

}