  // グローバル変数
  let device;
  let DevInfoShowFlg = false;

  var row;
  var cell;
  var cellText;
  var body;
  var tbl;
  var tblBody;
    
  // 接続時処理
  function connectFunction() {
    console.log('Connect Event.');
  }
  // 抜去時処理
  function disconnectFunction() {
    console.log('Disconnect Event.');
  }
  
  // 接続イベントの登録
  navigator.usb.onconnect    = connectFunction
  
  // 抜去イベントの登録
  navigator.usb.ondisconnect = disconnectFunction
