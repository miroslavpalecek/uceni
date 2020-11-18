const http = require ('http')
const port = 8000 

const server = http.createServer(function(req,res) {
    res.write('Bavlníkové pole')
    res.end()

    })

    server.listen(port, function(error) {
        if (error) {
            console.log('Na světě ja až moc Negru', error)
            }else{
                console.log('Server is listening on port' + port)
        }
    })