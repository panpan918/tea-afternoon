module.exports = () => ({
    plugins:[
        require('autoprefixer')(
            // {
            //     browsers:[
            //         'Android >= 4.0',
            //         'iOS >= 7'
            //     ]
            // }
        ),
        //require('postcss-px2rem')({remUnit:75})
        require('postcss-pxtorem')({
            rootValue:37.5,
            propList:['*']
        })
    ]
});