var w;

function Cell(x, y, r) {
    // initial x,y variables - get updated in each cycle via the move() function
    this.x = x;
    this.y = y;

    // origin x, y variables - stored so each cell "remembers" where it started
    this.origin_x = x;
    this.origin_y = y;

    // radius of each new cell
    this.r = r;

    // orbit radius for each new cell
    this.orbit_r = 200;

    // speed set for each cell as it moves around the canvas
    this.speedx = random(-1, 1);
    this.speedy = random(-1, 1);

    this.show = function() {

        stroke(255);
        line(this.x, this.y, this.origin_x, this.origin_y);

        // How to display the cell for each run
        // stroke(255);
        noStroke();
        fill(26, 229, 209, 50)
        ellipse(this.x, this.y, this.r * 2);

        // Boundary around the origin
        fill(125, 5);
        ellipse(this.origin_x, this.origin_y, this.orbit_r);
        // rect(this.origin_x-100, this.origin_y-50, 200, 100);\

        textSize(24);
        fill(255);
        text("Distance between cell and origin:", 10, 90);
        text(str(dist(this.x, this.y, this.origin_x, this.origin_y)), 10, 120);
    }

    this.clickedcell = function(x, y) {
        var d = dist(this.x, this.y, x, y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }

    this.clickedcanvas = function(x, y) {
        var d = dist(this.x, this.y, x, y);
        if (d > this.r) {
            return true;
        } else {
            return false;
        }
    }

    this.split = function() {
        var cell = new Cell(random(width), random(height), this.r * 0.5);
        return cell;
    }

    // Move function to define how each individual cell moves in the canvas
    this.move = function() {
        this.x = this.x + this.speedx;
        this.y = this.y + this.speedy;

        // this.x = constrain(this.x + this.speedx, 100, 100);
        // this.y = constrain(this.y + this.speedy, 100, 100);
        // fill(76);
        // rect(100, 100, 100, 100);

    }

    this.bounce = function() {
      // Bounce off edges of canvas window by reversing speed
        // if (this.x > width || this.x < 0) {
        //     this.speedx = -this.speedx;
        // }
        // if (this.y > height || this.y < 0) {
        //     this.speedy = -this.speedy;
        // }

      // Bounce off edges of rectangle
      // if (this.x > this.origin_x + 100 || this.x < this.origin_x - 100) {
      //     this.speedx = -this.speedx;
      // }
      // Bounce off edges of circle
      if (dist(this.x, this.y, this.origin_x, this.origin_y) > this.orbit_r/2) {
          this.speedy = -this.speedy;
      }

    }


    this.eats = function(other) {
        var d = dist(this.x, this.y, other.x, other.y);
        if (d < this.r + other.r) {
            this.r += other.r * 0.6;
            return true;
        } else {
            return false;
        }
    }

}

var cells = [];

function setup() {
    createCanvas(600, 600);
    // Initialize "cell" array.
    // Number of cells doubles with each click. For example:
    // Start with 1 cell. First mouse click, 2 cells. Next mouse click, 4 cells.
    // Then 8 cells, Then 16, and so on.
    // cells.length function is y = 2x; where y = number of cells after Then
    // mouse click, x is current number of cells
    var init_num_cells = 1;
    for (var i = 0; i < init_num_cells; i++) {
        cells[i] = new Cell(random(width), random(height), 10);
    }
}

// Split arrays of cells when a cell is clicked
// this function doesn't work yet, needs fixing
// refer to documentation here: https://p5js.org/reference/#/p5.Element/mousePressed
// function mousePressed() {
//     for (var i = 0; i < cells.length; i++) {
//         if (cells[i].clickedcell(mouseX, mouseY)) {
//             cells.push(cells[i].split());
//             cells.push(cells[i].split());
//             cells.splice(i, 1);
//         }
//     }
// }

// Create new cells when mouse is pressed on canvas
function mousePressed() {
    cell_radius = random(1,10);
    for (var i = 0; i < cells.length; i++) { // create the number of new cells that are currently in the system
        if (cells[i].clickedcanvas(mouseX, mouseY)) {
            cells.push(new Cell(mouseX, mouseY, cell_radius));
        }
    }
    // fill(255);
    // cells.push(ellipse(mouseX, mouseY, 100, 100));
}


function draw() {
    background(51);
    for (var i = cells.length - 1; i >= 0; i--) {
        cells[i].show();
        cells[i].move();
        cells[i].bounce();

        // for (var j = cells.length - 1; j >= 0; j--) {
        //     if (j != i && cells[i] && cells[i].eats(cells[j])) {
        //         cells.splice(j, 1);
        //     }
        // }
    }
    textSize(24);
    fill(255);
    text("# of Cells in System:", 10, 30);
    text(str(cells.length), 10, 60);

}


// References
// https://forum.processing.org/one/topic/create-new-object-with-mouse-click.html
// https://forum.processing.org/two/discussion/24872/#Comment_109265
