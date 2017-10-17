export function success(msg)
{
    $.smallBox({
        title : "Success",
        content : msg,
        color : "#659265",
        iconSmall : "fa fa-check fa-2x fadeInRight animated",
        timeout : 4000
    });
}

export function warning(msg)
{
    $.smallBox({
        title : "Warning",
        content : msg,
        color : "#c4c336",
        iconSmall : "fa fa-exclamation-triangle fa-2x fadeInRight animated",
        timeout : 4000
    });
}

export function canceled()
{
    $.smallBox({
        title : "Canceled",
        content : " Your action has been canceled. No changes were made!",
        color : "#00a5c4",
        iconSmall : "fa fa-info fa-2x fadeInRight animated",
        timeout : 4000
    });
}


export function error(msg)
{
    $.smallBox({
        title : "Error",
        content : msg,
        color : "#C46A69",
        iconSmall : "fa fa-times fa-2x fadeInRight animated",
        timeout : 4000
    });
}

export function critical(msg)
{
    $.bigBox({
        title: '!Critical!',
        content: msg,
        color: '#C46A69',
        icon: 'fa fa-exclamation shake animated',
        number: Math.floor(Math.random()*(15-1+1)+1),
        timeout: 6000
    });

}

export function whisper(from, msg)
{
    $.bigBox({
        title: `${from} has sent you a whisper :)`,
        content: msg,
        color: '#007B7F',
        icon: 'fa fa-comment shake animated',
        number: Math.floor(Math.random()*(15-1+1)+1),
        //timeout: 10000
    });

}