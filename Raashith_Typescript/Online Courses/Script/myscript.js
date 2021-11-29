var UserIdAutoIncrement = 1001;
var CourseIdAutoIncrement = 100;
var User = /** @class */ (function () {
    function User(paraname, parage, paramobile) {
        this.userid = UserIdAutoIncrement++;
        this.username = paraname;
        this.userage = parage;
        this.usermobile = paramobile;
    }
    return User;
}());
var user1 = new User("Raashith", 21, 8976543123);
var user2 = new User("Rohit", 21, 9986000123);
var UserArrayList = new Array();
var Course = /** @class */ (function () {
    function Course(paracoursename, paraday) {
        this.userid = UserIdAutoIncrement++;
        this.courseid = CourseIdAutoIncrement++;
        this.coursename = paracoursename;
        this.requireday = paraday;
    }
    return Course;
}());
var CourseArrayList = new Array();
function NewUser() {
    var MainDiv = document.getElementById("maindiv");
    var NewUser = document.getElementById("newuser");
    MainDiv.style.display = 'none';
    NewUser.style.display = 'block';
}
function ExistingUser() {
    var MainDiv = document.getElementById("maindiv");
    var ExistUser = document.getElementById("login");
    MainDiv.style.display = 'none';
    ExistUser.style.display = 'block';
}
function AddUser() {
    var UserName = document.getElementById("username").value;
    var UserAge = document.getElementById("userage").value;
    var UserMobile = document.getElementById("usermobileno").value;
    var user = new User(UserName, +UserAge, +UserMobile);
    UserArrayList.push(user);
    alert('You are registration successful');
    alert("Your user id is" + UserIdAutoIncrement);
    var MainDiv = document.getElementById("maindiv");
    var NewUser = document.getElementById("newuser");
    MainDiv.style.display = 'block';
    NewUser.style.display = 'none';
}
function Checklogin() {
    var Userid = document.getElementById("userid1");
    var LogIn = document.getElementById('login');
    var Option = document.getElementById('option');
    var flag;
    var i;
    var ExistUser1 = document.getElementById('existuser1');
    var ExistUser2 = document.getElementById('existuser2');
    ExistUser1.innerHTML = 'ALready Existing users are ' + user1.userid.toString() + '|' + user1.username + ' |' + user1.userage.toString() + '|' + user1.usermobile.toString();
    ExistUser2.innerHTML = 'ALready Existing users are ' + user2.userid.toString() + '|' + user2.username + '|' + user2.userage.toString() + '|' + user2.usermobile.toString();
    for (i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].userid == parseInt(Userid.value)) {
            LogIn.style.display = "none";
            Option.style.display = "block";
        }
    }
    LogIn.style.display = "none";
    Option.style.display = "block";
}
function CoursesAvailable() {
    var Option = document.getElementById('option');
    var Availcourses = document.getElementById('availcourses');
    Availcourses.style.display = 'block';
    Option.style.display = 'none';
}
function Enroll() {
    var coursenroll = document.getElementById('courses');
    var course = [coursenroll.selectedIndex].toString();
    var day = document.getElementById('daycourse').value;
    CourseArrayList.push(new Course(course, +parseInt(day)));
    var Option = document.getElementById('option');
    var Availcourses = document.getElementById('availcourses');
    Availcourses.style.display = 'none';
    Option.style.display = 'block';
}
function EnrolledCourses(CourseArrayList) {
    var coursename = CourseArrayList.coursename;
    var days = CourseArrayList.requireday;
    document.getElementById('cname').innerHTML = 'Your courses are' + coursename;
    document.getElementById('dayz').innerHTML = 'Number of days required' + days + 'days';
    var Option = document.getElementById('option');
    var Enrolled = document.getElementById('enrolled');
    Option.style.display = 'none';
    Enrolled.style.display = 'block';
}
