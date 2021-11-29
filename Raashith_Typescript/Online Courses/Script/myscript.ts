


let UserIdAutoIncrement = 1001;
let CourseIdAutoIncrement = 100;

class User{
    username:string;
    userage:number;
    usermobile : number;
    userid:number;

    constructor(paraname:string,parage:number,paramobile:number){
        this.userid = UserIdAutoIncrement++;
        this.username = paraname;
        this.userage = parage;
        this.usermobile = paramobile;

    }
}

let user1 = new User("Raashith", 21, 8976543123);
let user2 = new User("Rohit", 21, 9986000123 );

let UserArrayList : Array<User> = new Array<User>();

class Course{
    userid: number;
    courseid : number;
    coursename : string;
    requireday : number;

    constructor(paracoursename:string,paraday:number){
        this.userid = UserIdAutoIncrement++;
        this.courseid = CourseIdAutoIncrement++;
        this.coursename = paracoursename;
        this.requireday = paraday;

    }


}

let CourseArrayList : Array<Course> = new Array<Course>();























function NewUser(){
    let  MainDiv= (document.getElementById("maindiv") as HTMLDivElement);
    let NewUser = (document.getElementById("newuser") as HTMLDivElement);

    MainDiv.style.display = 'none';
    NewUser.style.display = 'block';
    
    

}

function ExistingUser(){

    let  MainDiv= (document.getElementById("maindiv") as HTMLDivElement);
    let ExistUser = (document.getElementById("login") as HTMLDivElement);

    MainDiv.style.display = 'none';
    ExistUser.style.display = 'block';
  

}


function AddUser(){
    let UserName  = (document.getElementById("username") as HTMLInputElement).value;
    let UserAge  = (document.getElementById("userage") as HTMLInputElement).value;
    let UserMobile  = (document.getElementById("usermobileno") as HTMLInputElement).value;

    let user = new User(UserName, +UserAge, +UserMobile );
    UserArrayList.push(user);
    alert('You are registration successful');

   

    alert("Your user id is" +UserIdAutoIncrement);

    let  MainDiv= (document.getElementById("maindiv") as HTMLDivElement);
    let NewUser = (document.getElementById("newuser") as HTMLDivElement);

    MainDiv.style.display = 'block';
    NewUser.style.display = 'none';

    
}

function Checklogin(){
    let Userid = (document.getElementById("userid1") as HTMLInputElement);

    let LogIn = (document.getElementById('login') as HTMLDivElement);

    let Option = (document.getElementById('option') as HTMLDivElement);

    let flag : number;
    
    let i : number ;

    let ExistUser1 = (document.getElementById('existuser1') as HTMLLabelElement);
    let ExistUser2 = (document.getElementById('existuser2') as HTMLLabelElement);

     ExistUser1.innerHTML = 'ALready Existing users are ' +user1.userid.toString() +'|' + user1.username +' |'+user1.userage.toString() +'|' +user1.usermobile.toString(); 
     ExistUser2.innerHTML = 'ALready Existing users are ' +user2.userid.toString() +'|' +user2.username +'|'+ user2.userage.toString() + '|' + user2.usermobile.toString();
    for( i=0;i<UserArrayList.length;i++){
        if(UserArrayList[i].userid ==   parseInt(Userid.value)){
             LogIn.style.display = "none";
             Option.style.display = "block";
        }

    
    }
    LogIn.style.display = "none";
    Option.style.display = "block";
}

function CoursesAvailable(){

    let Option = (document.getElementById('option') as HTMLDivElement);

    let Availcourses = (document.getElementById('availcourses') as HTMLDivElement);

    Availcourses.style.display = 'block';
    Option.style.display = 'none';

}

function Enroll(){

    let coursenroll = (document.getElementById('courses') as HTMLSelectElement);

    let course = [coursenroll.selectedIndex].toString();

    let day = (document.getElementById('daycourse') as HTMLInputElement).value;

    CourseArrayList.push(new Course(course , + parseInt(day) ));

    let Option = (document.getElementById('option') as HTMLDivElement);

    let Availcourses = (document.getElementById('availcourses') as HTMLDivElement);

    Availcourses.style.display = 'none';
    Option.style.display = 'block';
    
}

function EnrolledCourses(CourseArrayList){
    
    let coursename = CourseArrayList.coursename;

    let days = CourseArrayList.requireday;


    (document.getElementById('cname') as HTMLLabelElement).innerHTML = 'Your courses are' +coursename;
    (document.getElementById('dayz') as HTMLLabelElement).innerHTML = 'Number of days required' +days +'days';

    let Option = (document.getElementById('option') as HTMLDivElement);

    let Enrolled = (document.getElementById('enrolled') as HTMLDivElement);


    Option.style.display = 'none';

    Enrolled.style.display = 'block';



}