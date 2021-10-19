const { PythonShell } = require("python-shell");
let options = {
  args: ["value1", "value2", "value3","value4", "value5", "value6", "value7"]
  //python script에 넘겨줄 인자 목록
};

PythonShell.run("server/app.py", options, function(err, data) {
  if (err) throw err;
  console.log(data);
});
//콜백: 파이썬 파일 경로, args 전달
// print 값이 콜백함수의 log의 data로 전달

