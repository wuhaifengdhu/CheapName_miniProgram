function getName(gender, month, day){
  // gender: 0：未知、1：男、2：女 
  var firstNames = [
    ["长", "栓", "狗", "来", "大", "守", "傻", "福", "龟", "二", "胖", "臭"], 
    ["长", "栓", "狗", "来", "大", "守", "傻", "福", "龟", "二", "胖", "臭"],
    ["长", "小", "阿", "来", "大", "守", "傻", "福", "美", "二", "胖", "臭"]
  ]
  var secondNames = [
    ["芳", "妮", "剩", "娣", "球", "坑", "根", "岁", "娃", "毛", "歪", "姑", "英", "妹", "肥", "霞", "狗", "虎", "花", "凤", "腚", "村", "蛋", "妞", "木", "翠", "爱", "财", "头", "胖", "发"],
    ["牛", "羊", "剩", "猴", "球", "坑", "根", "岁", "娃", "毛", "歪", "狮", "英", "鼠", "肥", "狗", "虎", "猫", "鸟", "腚", "村", "蛋", "军", "木", "马", "熊", "财", "头", "胖", "发"],
    ["芳", "妮", "乔", "娣", "茶", "坑", "兔", "岁", "娃", "夕", "雯", "姑", "英", "妹", "肥", "霞", "娇", "花", "凤", "腚", "村", "玲", "妞", "木", "翠", "爱", "宝", "云", "胖", "发"]
  ]
  return firstNames[gender][month] + secondNames[gender][day]
}

function getImg(month){
  var img_list = ["0.jpg", "1.jpeg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpeg", "10.jpeg", "11.jpg"]
  console.log("month = " + month)
  return "../image/" + img_list[month]
}

module.exports = {
  getName: getName,
  getImg: getImg
}
