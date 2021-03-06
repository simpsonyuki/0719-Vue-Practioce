console.log("I'm JS~");

// 1. 定義渲染區域
// 官方文檔: https://vuejs.org/v2/guide/
// Vue和JS、JQuery最大的不同在於：Vue可以指定作用於特定元素，其他兩者皆為搜尋整個Document文件
// 寫法: var 變數名稱 = new Vue(); → 表示: 我要新增一個 Vue 物件
// var 變數名稱 = new Vue({ el: "CSS選取器", data: {自定義的資料內容, ...} });

var vue1 = new Vue({
    el: "#vue1",     // 指定元素來定義渲染區域，使用雙引號或單引號都可以(el是element的縮寫), 在此區域外則不會有任何作用
    data: {
        text: "Hello~ I'm new Vue~",   // 自定義資料名稱: "資料內容", 此處的資料名稱需搭配html中的{{資料名稱}}同時使用
        a: 3,       //數字
        b: 90,      //數字
        c: "90"     //文字字串
    }

});


// 2. 將自定義data資料寫在屬性內
// 官方文檔: https://vuejs.org/v2/guide/
// 在要加入的元素前加上"v-bind:"後面才寫上原本的元素名稱, 並把vue定義之資料名稱不用大括號, 直接替代數性值
// 搭html寫法: v-bind:元素屬性="資料名稱"
var vue2 = new Vue({
    el: "#vue2",
    data: {
        alignment: "center",
        yahoo: "https://tw.yahoo.com/"
    }
});


// 3. 判斷式
// 官方文檔: https://vuejs.org/v2/guide/#Conditionals-and-Loops
// 搭html寫法: v-if="資料名稱"
var vue3 = new Vue({
    el: "#vue3",
    data: {
        // 此處資料為布林值, true為顯示, false為隱藏
        test: true,
        activity: false,
    }
});

// 4. 迴圈
// 官方文檔: https://vuejs.org/v2/guide/#Conditionals-and-Loops
var vue4 = new Vue({
    el: "#vue4",
    data: {
        //資料名稱: [陣列]
        products: [
            { name: "紅茶", price: 30 },
            { name: "奶茶", price: 50 },
            { name: "咖啡", price: 70 },
            { name: "牛奶", price: 80 },
        ]
    }
});

// 5. 使用者事件
// 官方文檔: https://vuejs.org/v2/guide/#Handling-User-Input
var vue5 = new Vue({
    el: "#vue5",
    // 定義資料
    data: {
        test: "",
        count: 0
    },
    // 定義函式
    // methods: { 函式名稱: function(){ 函式內容 } };
    methods: {
        click: function () {
            this.test = "點到了~"
        },
        add: function () {
            this.count++;     //++遞增
        },
        minus: function () {
            this.count--;     //--遞減
        }
    }
});


// 6. 儲存使用者輸入之資訊
// 官方文檔: https://vuejs.org/v2/guide/#Handling-User-Input
var vue6 = new Vue({
    el: "#vue6",
    // 資料{ 資料名稱 }
    // 搭配html的v-model="資料名稱", 即可將使用者輸入的資料儲存於此
    data: {
        name: ""
    }

});

// 7. 定義元件(組件)
// 官方文檔: https://vuejs.org/v2/guide/#Composing-with-Components
// 寫法: Vue.component("元件名稱", { template: "樣板內容"});
Vue.component("test-a", {
    template: "<h2>我是測試元件</h2>"
});

// new Vue 可以不再前加入變數直接使用, 前面加"var 變數名稱=~" 的好處是可以把資料儲存在變數內, 之後使用比較方便
new Vue({
    el: "#vue7"
});

// 定義多行樣板元件
// '' ""  單/雙引號: 單行html
// ` ` 數字1的波浪點點: 多行html
// 使用多行樣板時, 須有一個父元素將內容包起來
Vue.component("test-b", {
    template: `
    <div>
        <h3>我是標題3</h3>
        <p>來點什麼內容<p>
        <ul>
        <li>項目1</li>
        <li>項目2</li>
        </ul>
    </div>
    `
});

new Vue({
    el: "#vue8"
});


// 多行樣板實際應用(放在html最上面)
// 適合用在有重複區塊的多頁網頁-如: 導覽列、頁尾區塊等等
Vue.component("navbar", {
    template: `
    <nav>
        <a href="./about.html">關於我</a>
        <a href="#">實際案例</a>
        <a href="./index.html">回首頁LOGO</a>
        <a href="#">型錄下載</a>
        <a href="#">聯絡我</a>
    <nav>
    `
});

new Vue({
    el: "#navbar"
});