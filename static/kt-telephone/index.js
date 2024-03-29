var parent2,number,callId,callStatus='off',duration=0,timer,pid=1,userWid,callRecordUrl,recordFileUrl,heartBeatUrl;

Notification.requestPermission(function (permission) {
    debugger;
});
$('#delete').css('height','100%')
$('#clear').hide()
$('#call,#barCall').show()
$('#hangOff,#barHangOff').hide()

if(window.parent!==window){
    var iframes = window.parent.document.getElementsByTagName('iframe')
    for (const i in iframes) {
        if(iframes[i].contentWindow===window){
            parent2=iframes[i]
            break;
        }
    }
}

if(parent2){
    var innerBorder = getDomAttribute(parent2,'inner-border',0)
    if(innerBorder != 1){
        $('#app').css('border','none')
    }
}

function getDomAttribute(dom,name,defaultValue){
    if(!dom)
        return;
    var value;
    var attribute = dom.attributes[name];
    if(attribute)
        value=attribute.value
    if(defaultValue==null||defaultValue==undefined||defaultValue=='')
        defaultValue=null
    if(value==null||value==undefined||value=='')
        value=defaultValue
    return value
}

reactTelephoneUnlinked()
wsInit()
setInterval(()=>{
    if(ws && ws.readyState ==3)
        wsInit()
    else {
        ws.send('{"cmd":"LINK"}');
    }
},1000)


function showMsgNotification(title, msg) {
    var Notification = window.Notification || window.mozNotification || window.webkitNotification;

    if(Notification) {//支持桌面通知
        if(Notification.permission == "granted") {//已经允许通知
            if(Notification.instance)
                Notification.instance.close()
            Notification.instance = new Notification(title, {
                body: msg,
                icon: "images/reload.png",
                renotify:true,
                tag:'linkStatus',
            });
        }else {//第一次询问或已经禁止通知(如果用户之前已经禁止显示通知，那么浏览器不会再次询问用户的意见，Notification.requestPermission()方法无效)
            Notification.requestPermission(function(status) {
                if (status === "granted") {//用户允许
                    var instance = new Notification(title, {
                        body: msg,
                        icon: "images/reload.png"
                    });

                    instance.onclick = function() {
                        // Something to do
                    };
                    instance.onerror = function() {
                        // Something to do
                    };
                    instance.onshow = function() {
                        // Something to do
                    };
                    instance.onclose = function() {
                        // Something to do
                    };
                }else {//用户禁止
                    return false
                }
            });
        }
    }else {//不支持(IE等)
        var index = 0;    

        clearInterval(timer);
        timer = setInterval(function() {
            if(index%2) {
                $('title').text('【　　　】'+ title);//这里是中文全角空格，其他不行
            }else {
                $('title').text('【新消息】'+ title);
            }
            index++;

            if(index > 20) {
                clearInterval(timer);
            }
        }, 500);
    }
}


function reactTelephoneFailedLink(message){
    $('#bar').hide()
    $('#failedLink').show()
    $('#pad').hide()
    if(message)
        $('#failedLink #failedLinkMessage').text(message)
    parentReact({height:'50px'},['display'])

    showMsgNotification(message)
    // if(window.parent!==window){
    //     var iframes = window.parent.document.getElementsByTagName('iframe')
    //     for (const i in iframes) {
    //         if(iframes[i].contentWindow===window && parseInt(iframes[i].attributes['is-react'])){
    //             if(!iframes[i].initialHeight)
    //                 iframes[i].initialHeight = iframes[i].style['height']||'initial'
    //             if(!iframes[i].initialDisplay)
    //                 iframes[i].initialDisplay = iframes[i].style['display']||'initial'
    //             var initialHeight = iframes[i].initialHeight;
    //             var initialDisplay = iframes[i].initialDisplay;
    //             iframes[i].style['height'] = '50px'
    //             iframes[i].style['display'] = initialDisplay
    //             break;
    //         }
    //     }
    // }
}

function reactTelephoneUnlinked(){
    $('#bar').hide()
    $('#failedLink').hide()
    $('#pad').hide()
    parentReact({display:'none'})
    // if(window.parent!==window){
    //     var iframes = window.parent.document.getElementsByTagName('iframe')
    //     for (const i in iframes) {
    //         if(iframes[i].contentWindow===window && parseInt(iframes[i].attributes['is-react'].value)){
    //             if(!iframes[i].initialHeight)
    //                 iframes[i].initialHeight = iframes[i].style['height']||'initial'
    //             if(!iframes[i].initialDisplay)
    //                 iframes[i].initialDisplay = iframes[i].style['display']||'initial'
    //             iframes[i].style['display'] = 'none'
    //             break;
    //         }
    //     }
    // }
}



function showPad(){
    $('#bar').hide()
    $('#failedLink').hide()
    $('#pad').show()
    parentReact({},['height','display'])
    // if(window.parent!==window){
    //     var iframes = window.parent.document.getElementsByTagName('iframe')
    //     for (const i in iframes) {
    //         if(iframes[i].contentWindow===window && parseInt(iframes[i].attributes['is-react'].value)){
    //             if(!iframes[i].initialHeight)
    //                 iframes[i].initialHeight = iframes[i].style['height']||'initial'
    //             if(!iframes[i].initialDisplay)
    //                 iframes[i].initialDisplay = iframes[i].style['display']||'initial'
    //             var initialHeight = iframes[i].initialHeight;
    //             var initialDisplay = iframes[i].initialDisplay;
    //             iframes[i].style['height'] = initialHeight
    //             iframes[i].style['display'] = initialDisplay
    //             break;
    //         }
    //     }
    // }
}
function showBar(){
    $('#bar').show()
    $('#failedLink').hide()
    $('#pad').hide()
    debugger
    parentReact({height:'50px'},['display'])
    // if(window.parent!==window){
    //     var iframes = window.parent.document.getElementsByTagName('iframe')
    //     for (const i in iframes) {
    //         if(iframes[i].contentWindow===window && parseInt(iframes[i].attributes['is-react'].value)){
    //             if(!iframes[i].initialHeight)
    //                 iframes[i].initialHeight = iframes[i].style['height']||'initial'
    //             if(!iframes[i].initialDisplay)
    //                 iframes[i].initialDisplay = iframes[i].style['display']||'initial'
    //             var initialHeight = iframes[i].initialHeight;
    //             var initialDisplay = iframes[i].initialDisplay;
    //             iframes[i].style['height'] = '50px'
    //             iframes[i].style['display'] = initialDisplay
    //             break;
    //         }
    //     }
    // }
}

function barNumberInput(){
    number=$('#barNumber').val()
    $('.number').text(number)
    isNumberOverflow()
    canClear()
}

function call(number_){
    if(callStatus!='off')
        return
    if(number_){
        number=number_
        // $('.number').text(number_)
        // $('#barNumber').val(number_)
        // callStatus='on'
        // $('#call,#barCall').hide()
        // $('#hangOff,#barHangOff').show()
        ws.send('{"cmd":"autorecord","value":"1"}')
        ws.send('{"cmd":"ATD","number":"'+(number_||'')+'","callid":"'+(callId||'')+'"}')
    }
}

function setCallbackUrl(pid,userWid,callRecordUrl,recordFileUrl,heartBeatUrl){
    ws.send(
        `{
            "cmd": "setCallrecord","pid": ${pid},"userWid":${userWid},
            "callrecordUrl":"${callRecordUrl}",
            "recordFileUrl":"${recordFileUrl}",
            "heartbeatUrl":"${heartBeatUrl}"
        }`
    )
}

function hangOff(){
    // callStatus='off'
    // $('#call,#barCall').show()
    // $('#hangOff,#barHangOff,#barDuration').hide()
    // number='';
    // $('.number').text(number)
    // $('#barNumber').val(number)
    // canClear()
    // duration=0
    // $('#duration,#barDuration').text('')
    ws.send('{"cmd":"ATH"}')
}

function dial(key){
    number=number==null||number==undefined?'':number;
    number=''+number+key
    $('.number').text(number)
    $('#barNumber').val(number)
    $('.number').scrollLeft($('.number')[0].scrollWidth)
    isNumberOverflow()
    canClear()
}

function delete_(key){
    number = number.substr(0,number.length-1)
    $('.number').text(number)
    $('#barNumber').val(number)
    isNumberOverflow()
    canClear()
}

function clear_(){
    number=''
    $('.number').text(number)
    $('#barNumber').val(number)
    $('.number').attr('title',number)

    canClear()
}

function canClear(){
    if(number.length>0){
        $('#delete').css('height','70%')
        $('#clear').show().css('height','30%')
    }else{
        $('#delete').css('height','100%')
        $('#clear').hide()
    }
}

function isNumberOverflow(){
    if($('.number')[0].scrollWidth > $('.number')[0].clientWidth)
        $('.number').attr('title',$('.number').text())
    else
        $('.number').attr('title','')
}



function parentReact(style,initialize){
    if(!parent2)
        return;
    style=!style?{}:style
    initialize=!initialize?[]:initialize
    if(parent){
        var reactabble = getDomAttribute(parent2,'reactabble',1) 
        if(reactabble == 0)
            return
        if(!parent2.initialStyle)
            parent2.initialStyle={}
        if(!parent2.initialStyle['height'])
            parent2.initialStyle['height'] = parent2.style['height']||'initial'
        if(!parent2.initialStyle['display'])
            parent2.initialStyle['display'] = parent2.style['display']||'initial'
        if(style['height'])
            parent2.style['height'] = style['height']
        if(style['display'])
            parent2.style['display'] = style['display']

        if(initialize.indexOf('height')>-1 && parent2.initialStyle['height'])
            parent2.style['height'] = parent2.initialStyle['height']

        if(initialize.indexOf('display')>-1 && parent2.initialStyle['display'])
            parent2.style['display'] = parent2.initialStyle['display']
    }
}