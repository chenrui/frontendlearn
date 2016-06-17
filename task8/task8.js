/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = $("#aqi-city-input").val().trim();
    var aqi = parseInt($("#aqi-value-input").val().trim());
    if (!city.match(/^[A-Za-z]+$/)) {
        alert("城市名必须为英文字符!");
        return;
    }
    if (isNaN(aqi)) {
        alert("必须为数字!");
        return;
    }
    aqiData[city] = aqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table = $("#aqi-table");
    table.html("");
    for (var city in aqiData) {
        if (table.children().length === 0) {
            table.html("<tr> <td>城市</td> <td>空气质量</td> <td>操作</td> </tr>");
        }
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = city;
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        td2.innerHTML = aqiData[city];
        tr.appendChild(td2);
        var td3 = document.createElement("td");
        td3.innerHTML = "<button>删除</button>";
        tr.appendChild(td3);
        table.append(tr);
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(target) {
    // do sth.
    var tr = target.parentElement.parentElement;
    var city = tr.children[0].innerHTML;
    delete aqiData[city];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    $("#add-btn").click(addBtnHandle);

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    document.getElementById("aqi-table").addEventListener("click", function (event) {
        if (event.target.nodeName.toLowerCase() === "button") {
            delBtnHandle(event.target)
        } 
    });
}

$(document).ready(init);
