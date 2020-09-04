let Ball = function (x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.checkImpact = function () {
        if (this.x - this.radius < 0 || this.x + this.radius >= canvas.width) {
            this.dx = -this.dx;
        } else {
            if (this.y - this.radius < 0) {
                this.dy = -this.dy;
            } else {
                if (this.y + this.radius == bar.y) {
                    if (this.x + this.radius > bar.x && this.x < (bar.x + bar.width)) {
                        score++;
                        this.dy = -this.dy;

                    }
                }
            }
        }
    }
    this.checkWin = function () {
        if ((ball.y + ball.radius) >= canvas.height) {
            alert("GAME OVER !!!");
            document.location.reload();
            cancelAnimationFrame(draw);

        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        if (score == 10) {
            alert("YOU WIN!!!");
            document.location.reload();
            cancelAnimationFrame(draw);
        }
    }

}



