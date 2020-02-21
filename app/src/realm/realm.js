import Realm from 'realm';

class OauthData extends Realm.Object {}
OauthData.schema = {
    name: 'OauthData',
    primaryKey: 'access_token',
    properties: {
        access_token: 'string',
        refresh_token: 'string',
        expires_in: 'int',
        token_type: 'string',
        date: 'string',
        user: 'string?'
    }
};

class Event extends Realm.Object{}
Event.schema = {
    name: 'Event',
    properties: {
        id: 'int',
        name: 'string',
        lastName: 'string',
        lastName2: 'string',
        cellphone: 'string',
        address: 'string',
        cp: 'string',
        state: 'string',
        municipality: 'string',
        company: 'string',
        date: 'string',
        email: 'string',
        synchronized: 'bool'
    }
};

class FlashMessage extends Realm.Object{}
FlashMessage.schema = {
    name: 'FlashMessage',
    properties:{
        title: 'string',
        message: 'string',
        dateTime: 'string',
        iconCircleColor: 'string',
        iconName: 'string',
        iconColor: 'string'
    }
};

class Notification extends Realm.Object{}
Notification.schema = {
    name: 'Notification',
    properties: {
        id: 'int',
        notification: 'string',
        checked: 'bool'
    }
};

class Config extends Realm.Object{}
Config.schema = {
    name: 'Config',
    properties: {
        isUser: 'bool'
    }
};

class Invited extends Realm.Object{}
Invited.schema = {
    name: 'Invited',
    properties: {
        nameEvent: 'string',
        nameInvited: 'string',
        email: 'string',
        date: 'string',
        description: 'string',
        cellphone: 'string'
    }
};

class Profile extends Realm.Object{}
Profile.schema = {
    name: 'Profile',
    properties: {
        name: 'string',
        lastName: 'string',
        lastName2: 'string',
        email: 'string',
        cellphone: 'string',
        birthday: 'string',
    }
};

export default new Realm({
    schema: [Event, FlashMessage, OauthData, Notification, Config, Invited, Profile],
});
