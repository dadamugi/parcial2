const path = require('path');
module.exports={
    entry:{
        proyectoreact: path.resolve(__dirname,'src/js/index.js')
    },
    output:{
       path:path.resolve(__dirname,'dist'),
       filename:'js/[name].js' 
    },
    devServer:{
       contentBase:path.join(__dirname,'dist'),
       compress:true,
       port:9000
    },
    mode:'development',
    module:{
       rules:[
           {
               test:/\.(js|jsx)$/,
               exclude:/(node_modules)/,
               use:{
                   loader:'babel-loader',
                   options:{
                       presets:['es2015','react','stage-2']
                   }
               }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
            test:/\.(jpg|png|gif|svg)$/,
            use:{
                loader : 'url-loader',
                options:{
                    limit:1000,
                    fallback:"file-loader",
                    name:'img/[name].[ext]'
                }
            }
            }
       ] 
    }
}