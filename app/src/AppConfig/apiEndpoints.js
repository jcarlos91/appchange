const endpoints = {
    uriBase : 'http://change.pcwalp.com',
    clientId : '4_4bdhpwwyuq0wcoc0wk800gcsk48088ss4o04osocoskkko40kw',
    clientSecret : '1xjiyp8qejy88os440kg88ksgw0sggws00w088kk844wcwg8k8',
    grantType : 'password',
    anonymousGrantType: 'client_credentials',
    refreshGrantType: 'refresh_token',
    tokenEndpoint : '/oauth/v2/token',
    invitedRegister: '/api/invited/new/register',
    getMyEvents: '/api/get/events',
    addNewEvent: '/api/register/new/event',
    profileInfo: '/api/profile/info',
    eventsDownload: '/api/events/download/events.xls',
    eventDelete: '/api/event/delete',
    eventsMassive: '/api/events/save'
};

export default endpoints;
