console.log("I'm JS~");

// 定義渲染區域
// Vue和JS、JQuery最大的不同在於：Vue可以指定作用於特定元素，其他兩者皆為搜尋整個Document文件
// 寫法: var 變數名稱 = new Vue(); → 表示: 我要新增一個 Vue 物件
var vue1 = new Vue({
    el : '#vue1',     // el : 'CSS選取器' → 指定元素，使用雙引號或單引號都可以(el是element的縮寫)
    

})