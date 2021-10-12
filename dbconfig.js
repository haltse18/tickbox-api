const config = {
    server: 'DESKTOP-CBKKQ6S\\SQLEXPRESS',
    port: 57889,
    database: 'DB_TicketBox',
    user: 'sa',
    password: '123456',
    // authentication: {
    //     type: 'default',
    //     options: {
    //         userName: 'sa',
    //         password: '123456'
    //     }
    // },
    options:{
        trustedconnection: true,
        // enableArithPort: true,
        instanceName: 'SQLEXPRESS',
        validateBulkLoadParameters:true,
        encrypt: false
    }
}

module.exports = config;