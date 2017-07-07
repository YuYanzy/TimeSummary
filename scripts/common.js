function getDateStr() {
    var dateStr = "";
    var d = new Date();
    dateStr += d.getFullYear();
    dateStr += (d.getMonth() + 1) >= 10 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
    dateStr += d.getDate();
    return dateStr;
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