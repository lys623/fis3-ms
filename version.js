module.exports = function(){
    var content = [
        '        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW         ',
        '        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM         ',
        '        MMMMMMMMMMMMMMMMMMMMNXXXXXXXXWMMMMMMMMMMMMMMMMMMMM         ',
        '        MMMMMMMMMMMMMMMMXKXXXXNWX0NNXXXXKXMMMMMMMMMMMMMMMM         ',
        '        MMMMMMMMMMMMMMMM0NMMMNXXkoKXXWMMN0MMMMMMMMMMMMMMMM         ',
        '        MMMMMMMMMMMMMMMW0MMMMXkkdlkk0WMMM0WMMMMMMMMMMMMMMM         ',
        '        MMMMMMMMMMMMMMMN0MMMMMMM0xWMMMMMM0NMMMMMMMMMMMMMMM         ',
        '        MMMMMMMMMMMMMMMK0MMMMWWWNNWWMMMMM0KMMMMMMMMMMMMMMM         ',
        '        MMMMMMMMMMMMMMMOkXXXXXXXXXXXXXXXXkOMMMMMMMMMMMMMMM         ',
        '        MMMMMMMMMMMMMMM0dNMMMMMMMMMMMMMMNd0MMMMMMMMMMMMMMM         ',
        '        MMMMMMMMMMMMMMMWxdXMMMMMMMMMMMMXddWMMMMMMMMMMMMMMM         ',
        '        MMMMMMMMMMMMMMMMXdo0NMMMMMMMMN0odXMMMMMMMMMMMMMMMM         ',
        '        MMMMMMMMMMMMMMW0xkdlxOOO00OOOkldkxOWMMMMMMMMMMMMMM         ',
        '        MMMMMMMMMMMMW0xONMWxOWN0kOONWOdNMW0x0WMMMMMMMMMMMM         ',
        '        MMMMMMMMMMMKdxNMMMMNd0NOWM00KdXMMMMNkd0MMMMMMMMMMM         ',
        '        MMMMMMMMMMKd0WMMMMMMKd00KNO0dKMMMMMMWKd0MMMMMMMMMM         ',
        '        MMMMMMMMMNd0MMMMMMMMMOlO0OklkMMMMMMMMMKoXMMMMMMMMM         ',
        '        MMMMMMMMM0dWMMMMMMMMMWOd0OdxNMMMMMMMMMWxOMMMMMMMMM         ',
        '        MMMMMMMMMkkMMMMMMMMMMMWOddkWMMMMMMMMMMMOxMMMMMMMMM         ',
        '        MMMMMMMMMOxOOOOOOOOOOOOkookOOOOOOOOOOOOxkMMMMMMMMM         ',
        '        MMMMMMMMMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWMMMMMMMMM         ',
        '        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM         '
    ]
    var colorsAry = [
        [ [14,'yellow.bold'] ],
        [ [4,'yellow.bold'] , [1,'red.bold'] , [2,'yellow.bold'], [2,'red.bold'], [1,'yellow.bold'], [5, 'red.bold'], [3, 'yellow.bold'] ],
        [ [1,'white.bold'], [13, 'yellow.bold'], [3, 'red.bold'], [2,'yellow.bold'], [1, 'white.bold'] ],
        [ [1, 'white.bold'], [24,'blue.bold'], [1, 'white.bold'] ],
        [ [1, 'white.bold'], [2, 'blue.bold'],[21, 'white.bold'], [4, 'blue.bold'] ],
        [ [3,'blue.bold'], [24, 'white.bold'], [3, 'blue.bold']],
        [ [3,'blue.bold'], [26, 'white.bold'], [3, 'blue.bold']],
        [ [1,'white.bold'], [8, 'blue.bold'], [26, 'white.bold'],[8, 'blue.bold'],[1, 'white.bold']],
        [ [1,'white.bold'], [42, 'blue.bold'], [1, 'white.bold']],
        [ [2,'white.bold'], [36, 'blue.bold'], [2, 'white.bold']],
        [ [3,'yellow.bold'], [1, 'white.bold'], [1, 'blue.bold'],[2, 'white.bold'],[26, 'blue.bold'],[2, 'white.bold'],[1, 'blue.bold'],[1, 'white.bold'], [3, 'yellow.bold']],
        [ [3,'yellow.bold'], [6, 'white.bold'], [22, 'blue.bold'],[6, 'white.bold'],[3, 'red.bold'] ],
        [ [4,'yellow.bold'], [4, 'white.bold'], [2, 'yellow.bold'],[2, 'blue.bold'],[16, 'white.bold'],[2, 'blue.bold'],[2, 'yellow.bold'],[4, 'white.bold'], [1, 'yellow.bold'], [3, 'red.bold']],
        [ [11, 'yellow.bold'], [18, 'red.bold'],[7, 'yellow.bold'], [3, 'red.bold'] , [1, 'yellow.bold'] ],
        [ [1,'white.bold'], [11, 'yellow.bold'], [16, 'red.bold'], [7,'yellow.bold'], [4, 'red.bold'], [1, 'white.bold'] ],
        [ [15, 'yellow.bold'], [8, 'red.bold'],[11, 'yellow.bold'], [3, 'red.bold'],[1, 'yellow.bold'] ],
        [ [14,'white.bold'], [8, 'yellow.bold'], [14, 'white.bold']],
        [ [8,'white.bold'],  [8, 'white.bold']]
    ];
    //colorsAry.forEach(function(lineColor, index){
    //    var startIndex = 0;
    //    var color;
    //    var lineColorContent = content[index].split('');
    //    while( color = lineColor.shift() ){
    //
    //        while(content[index][startIndex] == ' '){
    //            startIndex++;
    //        }
    //        var beginIndex = startIndex;
    //        var colorTextAry = lineColorContent.slice(beginIndex, startIndex += color[0]);
    //        var colorProperty = color[1].split('.');
    //        var colorText = colorTextAry.join('');
    //        var property;
    //        while(property = colorProperty.shift()){
    //            colorText = colorText[property];
    //        }
    //        colorTextAry.shift();
    //        colorTextAry.forEach(function(val,index){
    //            colorTextAry[index] = '';
    //        });
    //        lineColorContent.splice.apply(lineColorContent, [beginIndex, color[0], colorText].concat(colorTextAry) );
    //    }
    //    content[index] =  lineColorContent.join('');
    //});

    content[content.length] = '                           v' + fis.cli.info.version;
    content[content.length] = '';
    content.unshift('');
    content.unshift('');

    content = content.join('\n');

    console.log(content);
};

