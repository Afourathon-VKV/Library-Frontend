import axios from "axios";

const BookLendingAppUrl="http://52.66.255.140:80"

const axiosInstance = axios.create({
    withCredentials: true,
 })


 export const addStudent= async(Student, setMessage)=>{
    try{
        const response=await axiosInstance.post(BookLendingAppUrl + "/api/booklending/students",Student, {headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }})
        setMessage("Student Added Successfully")
    }
    catch(error){
        console.log(error);
        setMessage("Could not add student as a student with that code already exists/null fields in request.")
    }
}

export const deleteStudent=async(rollNo)=>{
    try{
        const response=await axiosInstance.delete(BookLendingAppUrl+`/api/booklending/students/RollNo/${rollNo}`, {headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }})
    }
    catch(error){
        console.log(error);

    }
}

export const updateStudent=async(Student)=>{
    try{
        const response = await axiosInstance.put(BookLendingAppUrl+"/api/booklending/students",Student, {headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }});
    }
    catch(error){
        console.log(error);
    }
}

export const fetchStudents=async(setStudents)=>{
    try{
        const response = await axiosInstance.get(BookLendingAppUrl+'/api/booklending/students', {headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }})
        .then(response=>{
            setStudents(response.data);
        });
    }
    catch(error){
        console.log("Error getting student: "+ error)
    }
}

export const fetchStudentDetails=async(setStudent,rollNo)=>{
    try{
        const response=axiosInstance.get(BookLendingAppUrl + `/api/booklending/students/rollNo/${rollNo}`,{headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }}).then(res=>{
            setStudent(res.data);
        })
        
    }
    catch(error){
        console.log('Error fetching student details', error);
    }
}

export const Login=async(Login)=>{
    try{
        const response=await axiosInstance.post(BookLendingAppUrl+"/api/users/login",Login, {headers: {
            'Authorization': "Bearer "+ localStorage.getItem("jwt")
        }});
        localStorage.setItem("jwt", response.data)
        return response.status==200?true:false
    }
    catch(error){
        console.log(error)
    }
}

export const Logout=async()=>{
    try{
        const response = await axiosInstance.post(BookLendingAppUrl+"/api/user/logout",null);
        localStorage.removeItem("jwt");
    }
    catch(error){
        console.log(error);
    }
}
