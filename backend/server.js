const cors = require('cors');
const dotenvParseVariables = require('dotenv-parse-variables');
const vehicleRoutes = require('./routes/vehicleRoutes');
const env = dotenvParseVariables(process.env);
const portNumber = env.PORT || 3000;

// biome-ignore lint/style/useSingleVarDeclarator: <explanation>
const express = require('express'),
    app = express(),
    port = portNumber,
    bodyParser = require('body-parser');

app.use(cors())
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({limit: '50mb'}));
app.use('/api/vehicles', vehicleRoutes);
app.listen(portNumber, () => {
    console.log(`Servidor rodando em http://localhost:${portNumber}`);
});
