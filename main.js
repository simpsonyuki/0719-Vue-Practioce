console.log("I'm JS~");

// 定義渲染區域
// Vue和JS、JQuery最大的不同在於：Vue可以指定作用於特定元素，其他兩者皆為搜尋整個Document文件
// 寫法: var 變數名稱 = new Vue(); → 表示: 我要新增一個 Vue 物件
// var 變數名稱 = new Vue({ el: "CSS選取器", data: {自定義的資料內容} });

var vue1 = new Vue({
    el: "#vue1",     // 指定元素來定義渲染區域，使用雙引號或單引號都可以(el是element的縮寫), 在此區域外則不會有任何作用
    data: {
        text: "Hello~ I'm new Vue~"   // 自定義資料名稱: "資料內容", 此處的資料名稱需搭配html{{資料名稱}}同時使用
    }

})