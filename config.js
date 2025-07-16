require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : ['@'],

    NUMBER: process.env.YOUR_NUMBER || '254742063632',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'FLASH-MD',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AR: process.env.AUTO_REACTION || 'off',

    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV05wTTRFRUVUZlhYTTNoVWIvKzErSUpBWUM4cWNmWTZQWHZxcWpLMnpuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZytTaHpTY1ZtZzNFdW1qRWZrcGhGTHB1Mk0wYmNIL3o0TzgwWkpJWTNYOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UC9JVHlGQzMzL2ZjY2VDUUhwUUo4TzhyOWJGSGZqRXNINUxabXlEM24wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUdEF2bENpNXhkaGVFNWVJbTdYVGluM0U1SXhvNk5xclNKQnlmakJjc0VvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBOG83MWJEdXA1Mk90dFdyNTRaYTZsSEpib0hSV1JqcjdRcHR2NkhrblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9hTUd0eGpxMEo1ZStVZXZNWnhGa1p2Zy95MTlJd0RYWHRHNHNHLzdKbTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS095UVYza2hXN1FhRjI4Vnp0Wk5OeHNFVVRLcGxoeHByRXJ2aUhibXhWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkN6NUdEVy9FRDRld0RVMUMvQUtDbW5xa1VNQTR1Z3k3SGFoSEF1RnZrbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZFeVNHaVdOUERBamUrMGxYcjdyd3ZjYXF5ZmhWb3pnejBlcXZnQjVlY1F4L1pCZ2JGMU9rbG5QcGtObFU5aFV3QUpsSTI4ejVENnIwVlludk9aQUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJXR1pxY01rZTU3am94YlNiM1ZxR3U2Q25JbXAxeGJKRDhLZm1WNFhuYkNvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTMyODE4OTI0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ5RUU2MzZEREE0QzgxQTA3RDRENzg3MkQ4RTBBM0JDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTI2Nzk4MDF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkVXWVAxU1hGIiwibWUiOnsiaWQiOiI1MDkzMjgxODkyNDo4NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCDICAgICAgICAg8J2QgCAgICAgICAgIPCdkJEgICAgICAgICAg8J2QiiAgICAgICAgICDwnZCSICAgICAgICAgIPCdkIQgICAgICAgICAg8J2QiCAgICAgICAgIPCdkIMiLCJsaWQiOiIxNTYwMjM2OTY0NDU0NjI6ODZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKQ2k0SWNHRU5DSzM4TUdHQThnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2L053RDRJNkJaY213QXdON1k2cXN4b1hGcFdLaHdpMUo3TXBJU3lqT0dFPSIsImFjY291bnRTaWduYXR1cmUiOiJHQ3JYZkluR3ViNE5pNnE3TmhrT2ZQUGprejh1UkE5RDcwM3R0WmFDSjdxZDgrWVBvaWMreW1KNzR1cnVkVm9PRy8zUFREYWxuMkhKM2dsbVdiYk5DZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMjBWRkwyY1pOOFVlVitCdEI0UTVUMk9wNUN0MmI1ZzJQWHZ0V0Q3NWhrRmZwZGZxT2plNWQxenZqQ1ZNbGFvaUlyckFUYWo4aENWcnJUOWdjMUl4Qnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzMjgxODkyNDo4NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJldnpjQStDT2dXWEpzQU1EZTJPcXJNYUZ4YVZpb2NJdFNlektTRXNvemhoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTI2Nzk3NzMsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGVFEifQ==',
    timezone: 'Africa/Nairobi',

    USER_LID: process.env.YOUR_LID || null,

    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
