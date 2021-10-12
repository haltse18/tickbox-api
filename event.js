class Event {
    constructor(EventID, EventName, GroupID, Location, ApprovalState, ImageUrl, IsDeleted, TimeOccur, IsExpired, CreateDate, ModifyDate) {
        this.EventID = EventID;
        this.EventName = EventName;
        this.GroupID = GroupID;
        this.Location = Location;
        this.ApprovalState = ApprovalState;
        this.ImageUrl = ImageUrl;
        this.IsDeleted = IsDeleted;
        this.TimeOccur = TimeOccur;
        this.IsExpired = IsExpired;
        this.CreateDate = CreateDate;
        this.ModifyDate = ModifyDate;
    }
}
module.exports = Event;