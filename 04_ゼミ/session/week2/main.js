const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const logValue = function (e) {
  console.log(e.target.value)
}
//保存ボタンをクリックする
addButton.onclick = function () {
  //表示されるはず．．．
  memoInput.onchange = logValue
}
//memoInput.onchange = logValue //惜しい
//memoInput.oninput = logValue //失敗 表示されすぎる
//保存ボタンをクリックしたら表示される？
//addButton.onclick = logValue //失敗
//保存ボタンを変更したら表示される？
//addButton.oninput = logValue //失敗

console.dir

