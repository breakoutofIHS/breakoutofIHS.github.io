var solutions = ['lock', 'openInventorFirst', 'instructions'];
var part1 = 2;
var part2 = 1;

var map_md5 = new Map();
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a 9(){0.1("b","c.2");0.1("8","e.6");0.1("3","4.2");0.1("7","5.d");0.1("r","n.2");0.1("f","o.p");0.1("q","m.l");0.1("h","g.i");0.1("j","k.2")}',28,28,'map_md5|set|txt|66bf128103cc222074bf678a047ee203|8f6e3acbf137f474d126786670727d93|a07b385368b3c69355f1326463cf6709|psd|e8be4affa13021c0975878f20fbb36a8|b3188adab3f07e66582bbac456dcd212|set_maps|function|0a5a6e76ecc3f6f7ec70be67c86f000f|f68111e3b81c7812f7806594914fb322|png|36fffb128797e0cec81f746f6c91d798|46f78a953f42ae659b642b6687cfb5e3|4dc81af5454daf6bd31f56b772bbad8c|5dddf3d443676b05da6a681c7e0304b2|pptx|dc5366cdafcb8fdc535e9ab4d1677dd9|a4be18b9dffbd7631192de639642e6d6|mp3|130037a4e3cf7779bafe73fdc6030c4b|680fd6209906618e9ad75053b8e8ce5c|c212e1489b1a0fb92889557e9808d03b|pdf|857c762a4f80e26f1b2a4026e847640c|7f8029381c705cb6188b6a680564e8c6'.split('|'),0,{}))

set_maps ();
function updateAnswers1()
{
    var solution = document.getElementById("codeEntry1").value.trim();
    var hashed = md5(solution);
    if (solution !== 'e0d9f' && openUrl(hashed))
    {
        document.getElementById('code' + part1 + 'box').classList.add('fade');
        part1++;
        solutions.push(hashed);
    }
    return true;
}

function updateAnswers2()
{
    var solution = document.getElementById("codeEntry2").value.trim();
    var hashed = md5(solution);
    if (openUrl(hashed))
    {
        document.getElementById('code' + (part2 + 5) + 'box').classList.add('fade');
        part2++;
        solutions.push(hashed);
    }
    return true;
}

function openUrl(url)
{
    if (solutions.includes(url))
        return false;

    var filename = map_md5.get(url);
    if (filename == undefined)
        return false;

    window.open('files/' + filename);
    return true;
}