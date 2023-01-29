require("dotenv").config();
const PORT = process.env.port;

app.use('/api', router);


mongoose.set('strictQuery', false);
mongoose.connect(process.env.mongoUrl).then(()=> {
    app.listen(PORT, (err) => {
        err ? console.log(err) : console.log(`server running on ${PORT}`)
    })
}).catch((err) => {console.log(err)})