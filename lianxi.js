function a() {
    for (var i = 3, j = 1; i >= 0; i--, j++) {
        for (var a = i; a >= 1; a--) {

            document.write("-");

        }
        for (var b = 1; b <= 2 * j - 1; b++) {
            document.write("*");
        }
        document.write("<br/>");


    }
    for (var i = 1, j = 3; i <= 3; i++, j--) {
        for (var a = 1; a <= i; a++) {

            document.write("-");

        }
        for (var b = 1; b <= 2 * j - 1; b++) {
            document.write("*");
        }
        document.write("<br/>");
    }

}

function wa() {
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= i; j++) {
            document.write(i + "*" + j + "=" + i * j);
            if (i * j < 10) {
                document.write("&nbsp&nbsp");
            } else {
                document.write("&nbsp");
            }
        }
        document.write("<br/>");
    }
}

a();
document.write("<br/><br/><br/>");
wa();