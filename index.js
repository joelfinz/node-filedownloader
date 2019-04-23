var downloader = require('filedownloader');
var ProgressBar = require('progress');
const argv = require('yargs').argv;
// console.log(yargs.argv);



var dl = new downloader({
    url: argv.url
}).on("progress", function (progress) {
    var len = parseInt(progress.filesize);
    var cur = parseInt(progress.dataWritten);
    // console.log('Downloaded: ' + progress.progress + '%'); 
    var bar = new ProgressBar('  downloading [:bar] :rate :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        curr: cur,
        total: len,
        clear:true
    });
    bar.tick({
        'percent': parseInt(progress.progress),
        // 'rate': parseInt(progress.speed)
    })

});
// dl.on("start", function(){
//     console.log("Download started") 
//  });
dl.on("error", function(err){
    console.log('Some error occurred:' + err); 
});
dl.on("end", function(){
    console.log('Download finished'); 
 });
