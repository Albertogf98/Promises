const ajax =  user  => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange =  () => {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200 && user.success) {
                user.success(user.parse ? JSON.parse(xmlhttp.responseText) : xmlhttp.responseText);
            }
            else {
                const other = (user, error, text) => console.error('ajaxSM: Error on ajax call to'  + user.url + ' ' + error + ' - ' + text);

                if (user.error) 
                user.error.other = user.error.other || other;
                else 
                user.error = {other: other};

                //(user.error[xmlhttp.status] || user.error.other)(xmlhttp.status, xmlhttp.statusText);
            }
        }
    };
    let sent = null;
    if (user.data) {
        const p = [];
        for (let f in user.data)p.push(f + "=" + user.data[f]);
        user.type === 'GET' ? user.url += "?" + p.join('&') : sent = p.join('&');
    }
    xmlhttp.open(user.type, user.url, user.async === undefined || user.async);
    if (sent) xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(sent);
};
