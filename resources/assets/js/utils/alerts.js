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

export function canceled()
{
    $.smallBox({
        title : "Canceled",
        content : " Your action has been canceled. No changes were made!",
        color : "#C46A69",
        iconSmall : "fa fa-times fa-2x fadeInRight animated",
        timeout : 4000
    });
}

export function error(msg)
{
    $.bigBox({
        title: '!ERROR!',
        content: msg,
        color: '#C46A69',
        icon: 'fa fa-warning shake animated',
        number: Math.floor(Math.random()*(15-1+1)+1),
        timeout: 6000
    });

}

export function whisper(msg)
{
    $.bigBox({
        title: '!ERROR!',
        content: msg,
        color: '#C46A69',
        icon: 'fa fa-comment shake animated',
        number: Math.floor(Math.random()*(15-1+1)+1),
        timeout: 10000
    });

}