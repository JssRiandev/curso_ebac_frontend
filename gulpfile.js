const gulp = require('gulp'); // importando o plugin do gulp
const saas = require('gulp-sass')(require('sass')); //importando o plugin do gulp-sass e do sass
const uglify = require('gulp-uglify'); // importando o plugin responsável por comprimir o código JS
const imagemin = require('gulp-imagemin'); //importando o plugin responsável por comprimir as imagens

//OBS: Lembrando que antes de importar os plugins, é necessário instalá-los. Para isso, basta digitar no terminal : npm install --save-dev(nome do plugin)

function comprime_JS() {
    return gulp.src('./source/scripts/*.js') //indicando para o gulp a localização das pastas de entrada
    .pipe(uglify()) //o pipe é responsável por encadear as funções(sem ele, não seria possível escrever uma função depois da primeira)
    .pipe(gulp.dest('./build/scripts')) //indicando para o gulp a localização das pastas de saída
}

function comprime_img() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"))
}

function executa_sass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(saas({
        outputStyle: 'compressed' //comprimindo as linhas do arquivo css
    }))
    .pipe(gulp.dest('./build/styles'))
}

exports.default = function() { //executando todas as automações feitas
    //fazendo o gulp observar as alteraçãoes nesses arquivos/tarefas e salvá-las automaticamente
    gulp.watch('./source/styles/*.scss', {ignoreInitial:false}, gulp.series(executa_sass)); 
    gulp.watch('./source/scripts/*.js', {ignoreInitial:false}, gulp.series(comprime_JS));
    gulp.watch('./source/images/*', {ignoreInitial:false}, gulp.series(comprime_img));
}


