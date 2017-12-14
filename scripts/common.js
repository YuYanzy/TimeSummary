function getDateStr() {
    var dateStr = "";
    var d = new Date();
    dateStr += d.getFullYear();
    dateStr += (d.getMonth() + 1) >= 10 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
    dateStr += d.getDate();
    return dateStr;
}
//��ȡ��ǰʱ��
function getTimeStr() {
    var myDate = new Date();
    var h = myDate.getHours();       //��ȡ��ǰСʱ��(0-23)
    var m = myDate.getMinutes();     //��ȡ��ǰ������(0-59)
    var s = myDate.getSeconds();
    return (h > 10 ? h : "0" + h) + ":" + (m > 10 ? m : "0" + m) + ":" + (s > 10 ? s : "0" + s);
}

//json����
function jsonSort(array, field, reverse) {
    //���鳤��С��2 �� û��ָ�������ֶ� �� ����json��ʽ����
    if (array.length < 2 || !field || typeof array[0] !== "object") return array;
    //������������
    if (typeof array[0][field] === "number") {
        array.sort(function (x, y) { return x[field] - y[field] });
    }
    //�ַ�����������
    if (typeof array[0][field] === "string") {
        array.sort(function (x, y) { return x[field].localeCompare(y[field]) });
    }
    //����
    if (reverse) {
        array.reverse();
    }
    return array;
}
//����������ȡ��վ��
function getSiteName(sitedomain) {
    var sitename = "";
    var csnTemp = localStorage.getItem("timesummaryCSN");
    jsonCustomerSiteName = csnTemp == null || csnTemp == "" ? {} : JSON.parse(csnTemp);
    if (jsonCustomerSiteName.hasOwnProperty(sitedomain) && jsonCustomerSiteName[sitedomain].sitename != "") {   //�����������������ʾ������
        sitename = jsonCustomerSiteName[sitedomain].sitename;
    } else if (localStorage.getItem("showdefaultname") != "0") {        //��ʾ�ṩ��Ĭ����վ��
        if (sitejson[sitedomain] != undefined) {        //���sitejson�а����˸���ַ������ʾsitejson�е�����
            sitename = sitejson[sitedomain];
        } else {
            var isHadReapeatSite = false;
            for (var j = 0; j < repeatSiteUrl.length; j++) {
                if (sitedomain.indexOf(repeatSiteUrl[j]) >= 0) {
                    sitename = repeatSiteUrl[j];
                    isHadReapeatSite = true;
                    break;
                }
            }
            if (!isHadReapeatSite) {
                return sitedomain;
            }
        }
    } else {
        return sitedomain;
    }
    return sitename;
}
//����ת��Ϊ��Ӧ�����ʱ
function secondToCommonTime(s) {
    if (s < 60) {
        return s + "s";
    } else if (s / 60 < 60) {
        return Math.ceil(s / 60) + "min";
    } else {
        return Math.ceil(s / 3600) + "h";
    }
}