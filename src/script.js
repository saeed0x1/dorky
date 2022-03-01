dork = (search) => {
  var target = document.getElementById("target").value;
  var queryURL = "https://www.google.com/search?q=";

  if (target.includes("://")) {
    let finaltarget = target.replace(/[a-zA-Z0-9]+:\/\//g, "");
    url = `${queryURL}site:${finaltarget} `;
  } 
  else 
    url = `${queryURL}site:${target} `;

  switch (search) {
    case 1:
      url += "inurl:api_key";
      break;
    case 2:
      url +=
        "+ext:xml+|+ext:conf+|+ext:cnf+|+ext:reg+|+ext:inf+|+ext:rdp+|+ext:cfg+|+ext:txt+|+ext:ora+|+ext:ini";
      break;
    case 3:
      url += "+ext:sql+|+ext:dbf+|+ext:mdb";
      break;
    case 4:
      url += "+ext:log";
      break;
    case 5:
      url += "+ext:bkf+|+ext:bkp+|+ext:bak+|+ext:old+|+ext:backup";
      break;
    case 6:
      url += "+inurl:login";
      break;
    case 7:
      url +=
        '+intext:"sql+syntax+near"+|+intext:"syntax+error+has+occurred"+|+intext:"incorrect+syntax+near"+|+intext:"unexpected+end+of+SQL+command"+|+intext:"Warning:+mysql_connect()"+|+intext:"Warning:+mysql_query()"+|+intext:"Warning:+pg_connect()"';
      break;
    case 8:
      url +=
        "+ext:doc+|+ext:docx+|+ext:odt+|+ext:pdf+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv";
      break;
    case 9:
      url += '+ext:php+intitle:phpinfo+"published+by+the+PHP+Group"';
      break;
    case 10:
      url +=
        "+inurl:wp-+|+inurl:wp-content+|+inurl:plugins+|+inurl:uploads+|+inurl:themes+|+inurl:download";
      break;
    case 11:
      url +=
        "+inurl:shell+|+inurl:backdoor+|+inurl:wso+|+inurl:cmd+|+shadow+|+passwd+|+boot.ini+|+inurl:backdoor";
      break;
    case 12:
      url +=
        "+inurl:readme+|+inurl:license+|+inurl:install+|+inurl:setup+|+inurl:config";
      break;
    case 13:
      url +=
        "+inurl:redir+|+inurl:url+|+inurl:redirect+|+inurl:return+|+inurl:src=http+|+inurl:r=http";
      break;
    case 14:
      url += "+ext:action+|+ext:struts+|+ext:do";
      break;
    case 15:
      url = "https://www.google.com/search?q=site:pastebin.com+" + target;
      break;
    case 16:
      url =
        "https://www.google.com/search?q=site:linkedin.com+employees+" + target;
      break;
    case 17:
      url +=
        '+inurl:"/phpinfo.php"+|+inurl:".htaccess"+|+inurl:"/.git"+' +
        target +
        " -github";
      break;
    case 18:
      url = "https://www.google.com/search?q=site:*." + target;
      break;
    case 19:
      url = "https://www.google.com/search?q=site:*.*." + target;
      break;
    case 20:
      url += "+inurl:wp-content+|+inurl:wp-includes";
      break;
    case 21:
      url = 'https://github.com/search?q="*.' + target + '"&type=host';
      break;
    case 22:
      url = "http://" + target + "/crossdomain.xml";
      break;
    case 23:
      url = "http://threatcrowd.org/domain.php?domain=" + target;
      break;
    case 24:
      url = "https://www.google.com/search?q=+inurl:" + target + "+ext:swf";
      break;
    case 25:
      url = "https://yandex.com/search/?text=site:" + target + "%20mime:swf";
      break;
    case 26:
      url =
        "https://web.archive.org/cdx/search?url=" +
        target +
        "/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=urlkey:.*swf&limit=100000&_=1507209148310";
      break;
    case 27:
      url =
        "https://web.archive.org/cdx/search?url=" +
        target +
        "/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=mimetype:application/x-shockwave-flash&limit=100000&_=1507209148310";
      break;
    case 28:
      url = "https://web.archive.org/web/*/(." + target + ")";
    case 29:
      url = "https://web.archive.org/web/*/" + target + "/*";
      break;
    case 30:
      url = "https://crt.sh/?q=%25." + target;
      break;
    case 31:
      url =
        "https://www.openbugbounty.org/search/?search=" + target + "&type=host";
      break;
    case 32:
      url = "https://www.reddit.com/search/?q=" + target + "&source=recent";
      break;
    case 33:
      url =
        "http://wwwb-dedup.us.archive.org:8083/cdx/search?url=" +
        target +
        "/&matchType=domain&collapse=digest&output=text&fl=original,timestamp&filter=urlkey:.*wp[-].*&limit=1000000&xx=";
      break;
    case 34:
      url = "https://censys.io/ipv4?q=" + target;
      break;
    case 35:
      url = "https://censys.io/domain?q=" + target;
      break;
    case 36:
      url = "https://censys.io/certificates?q=" + target;
      break;
    case 37:
      url = "https://www.shodan.io/search?query=" + target;
      break;
    case 38:
      url += "+intitle:index.of";
      break;
    case 39:
      url += "inurl:email";
      break;
    case 40:
      url += "inurl:/wwwboard/passwd.txt";
      break;
    case 41:
      url += `"intitle:index of" "/etc/mysql/"`;
      break;
    case 42:
      url += "database.yml";
      break;
    case 43:
      url += "inurl:admin inurl:userlist";
      break;
    case 44:
      url += "inurl:admin filetype:asp inurl:userlist - lists username";
      break;
    case 45:
      url += `"inurl:/wp-content/uploads/ ext:txt "username" | "user name” | "uname" | "user" | "userid" | "user id" AND "password" | "pass word" | "pwd" | "pw"`;
      break;
    //more dorks to be added
  }
  window.open(url);
};
