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
        activity: false
    }
});