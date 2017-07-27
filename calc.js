var Calculate = (function () {
    function Calculate() {
    }
    Calculate.prototype.calculate = function (buttonobj, dispobj, current) {
        var value = buttonobj.value;
        if (value == '=') {
            current = eval(current);
        }
        else if (value == 'C') {
            current = '0';
        }
        else {
            if (current == '0') {
                current = value;
            }
            else {
                current += value;
            }
        }
        //alert(current);
        dispobj.displayResult(current);
        return current;
    };
    return Calculate;
}());
var Buttons = (function () {
    function Buttons() {
    }
    Buttons.prototype.create = function (dispobj, current) {
        //var buttonThis = this;
        var button_values = ['7', '8', '9', '*',
            '4', '5', '6', '-',
            '1', '2', '3', '+',
            '=', '0', 'C', '/'];
        var calcobj = new Calculate();
        var table = document.createElement('table');
        var i = 0, j = 0, count = 0;
        for (i = 0; i < 4; i++) {
            count = 0;
            var tr = document.createElement('tr');
            while (count < 4) {
                count++;
                var td = document.createElement('td');
                var button = document.createElement('input');
                button.type = 'button';
                button.value = button_values[j];
                button.addEventListener("click", function () {
                    current = calcobj.calculate(this, dispobj, current);
                });
                td.appendChild(button);
                tr.appendChild(td);
                j++;
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    };
    return Buttons;
}());
var TextField = (function () {
    function TextField() {
        var text = document.createElement('input');
        text.type = "text";
        text.id = "textfield";
        text.value = "0";
        this.text_field = text;
        document.body.appendChild(text);
    }
    TextField.prototype.displayResult = function (val) {
        //alert(val);
        this.text_field.value = val;
    };
    return TextField;
}());
var Calculator = (function () {
    function Calculator() {
        var current = '0';
        var displayobj = new TextField();
        var btnobj = new Buttons();
        btnobj.create(displayobj, current);
    }
    return Calculator;
}());
new Calculator();
new Calculator();
