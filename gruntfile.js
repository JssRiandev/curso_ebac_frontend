module.exports = function (grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

        less:{ //configurando o plugin do less
            development:{ //área de desenvolvimento
                files:{
                    'dev/styles/main.css':'src/styles/main.less' //definindo o destino e origem dos arquivos
                }
            },
            production:{ //área de produção
                options:{
                    compress:true, //comprimindo o css
                },
                files:{
                    'dist/styles/main.min.css': 'src/styles/main.less' //definindo o destino e a origem dos arquivos
                }
            }
        },
        watch:{ //configurando o watch no less
            less:{
                files: ['src/styles/**/*.less'], //os arquivos que serão observados
                tasks: ['less:development'] //as tarefas que serão executadas quando houver alteração nos arquivos acima
            },

        },
        uglify:{ //configurando o plugin de comprimir css
            target: {
                files: {
                    'dist/scripts/main.min.js':'src/scripts/main.js' //destino e origem, respectivamente, dos arquivos
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less'); //importando o plugin do less
    grunt.loadNpmTasks('grunt-contrib-watch'); //importando o plugin do watch
    grunt.loadNpmTasks('grunt-contrib-uglify'); //importando o plugin de comprimir JS


    grunt.registerTask('default', ['watch']); //definindo, que, ao digitar "npm run grunt" no terminal, as configurações de watch serão executadas
    grunt.registerTask('build', ['less:production','uglify']); //definindo, que, ao digitar "npm run grunt build" no terminal, as configurações de less:productio e uglify serão executadas


}