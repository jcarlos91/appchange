import React from 'react';
import ApiBase from "./apiBase";
import endpoints from "./apiEndpoints";
import OAuthManager from "./oauthManager";


class Api extends ApiBase {
    static login(username, password,callback) {
        OAuthManager.auth(username,password,callback, false,false);
    }

    static addEvent(firstName, lastName, lastName2, cellphone, email, address, cp, state, municipality, company, callback){
        this._post(endpoints.addNewEvent, {
            firstName: firstName,
            lastName: lastName,
            lastName2: lastName2,
            cellphone: cellphone,
            address: address,
            cp: cp,
            state: state,
            municipality: municipality,
            company: company,
            email: email,
        },callback,true);
    }

    static myEvents(callback){
        this._get(endpoints.getMyEvents,[],callback,true);
    }

    static profileInfo(callback){
        this._get(endpoints.profileInfo,[],callback,true);
    }

    static registerInvited(eventName, invitedName, email, date, description, cellphone, callback){
        this._post(endpoints.invitedRegister,{
            eventName: eventName,
            invitedName:invitedName,
            email:email,
            date: date,
            description: description,
            cellphone:  cellphone
        },callback,true,false);

    }

    static eventsDownload(dateStart, dateEnd, callback){
        this._postBlob(endpoints.eventsDownload,{
            start_date: dateStart,
            end_date: dateEnd,
        }, callback,true);
    }

    static eventDelete(eventId, callback){
        this._post(endpoints.eventDelete,{
            eventId: eventId
        }, callback, true);
    }

    static eventsMassive(events, callback){
        this._post(endpoints.eventsMassive,{
            events: events
        }, callback, true);
    }
}
export default Api;
