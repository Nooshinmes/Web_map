function popup(mylink, windowname, width, height) {
    if (! window.focus)return true;
    var href;
    if (typeof(mylink) == 'string')
       href=mylink;
    else
       href=mylink.href;
       window.open(href, windowname,"type=fullWindow,scrollbars=yes");
    return false;}
  