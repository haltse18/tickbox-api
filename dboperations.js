var config = require('./dbconfig');
const sql = require('mssql');


async function getEvents() {
    try {
        let pool = await sql.connect(config);
        let events = await pool.request().query("SELECT * from Event");
        return events.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function getEvent(EventID) {
    try {
        let pool = await sql.connect(config);
        let events = await pool.request()
            .input('input_parameter', sql.Int, EventID)
            .query("SELECT * from Event where EventID = @input_parameter");
        return events.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function addEvent(event) {
    try {
        let pool = await sql.connect(config);
        let insertEvents = await pool.request()
            // .input('EventID', sql.Int, event.EventID)
            .input('EventName', sql.NVarChar, event.EventName)
            .input('GroupID', sql.Int, event.GroupID)
            .input('Location', sql.NVarChar, event.Location)
            .input('ApprovalState', sql.Int, event.ApprovalState)
            .input('ImageUrl', sql.NVarChar, event.ImageUrl)
            .input('IsDeleted', sql.Bit, event.IsDeleted)
            .input('TimeOccur', sql.DateTime, event.TimeOccur)
            .input('IsExpired', sql.Bit, event.IsExpired)
            .input('CreateDate', sql.DateTime, event.CreateDate)
            .input('ModifyDate', sql.DateTime, event.ModifyDate)
            .query('Insert into Event(EventName, GroupID, Location, ' + 
            'ApprovalState, ImageUrl, IsDeleted, TimeOccur, IsExpired, CreateDate, ModifyDate)' + 
            ' values (@EventName, @GroupID, @Location, @ApprovalState, @ImageUrl, @IsDeleted, @TimeOccur, @IsExpired, @CreateDate, @ModifyDate)');
        return insertEvents.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getEvents: getEvents,
    getEvent : getEvent,
    addEvent: addEvent
}