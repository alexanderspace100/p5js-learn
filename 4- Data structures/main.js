var nums = [100, 25, 46, 72, 100, 35, 56, 12]

function setup() {
  createCanvas(1020, 600);
}

function draw() {
  background(0);

  for (var i=0; i<nums.length; i++){
    stroke(255);
    fill(65, 25, 195);
    ellipse(i*100+200, 200, nums[i], nums[i]);
  }
}
