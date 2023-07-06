import axios from "axios";

const BookLendingAppUrl="http://localhost:8080"

const axiosInstance = axios.create({
    withCredentials: true,
 })


 export const addStudent= async(Student, setMessage)=>{
    try{
        const response=await axiosInstance.post(BookLendingAppUrl + "/api/booklending/students",Student)
        setMessage("Student Added Successfully")
    }
    catch(error){
        console.log(error);
        setMessage(error.message)
    }
}

export const deleteStudent=async(rollNo)=>{
    try{
        const response=await axiosInstance.delete(BookLendingAppUrl+`/api/booklending/students/RollNo/${rollNo}`)
    }
    catch(error){
        console.log(error);

    }
}

export const updateStudent=async(Student)=>{
    try{
        const response = await axiosInstance.put(BookLendingAppUrl+"/api/booklending/students",Student);
    }
    catch(error){
        console.log(error);
    }
}

export const fetchStudents=async(setStudents)=>{
    try{
        const response = await axiosInstance.get(BookLendingAppUrl+'/api/booklending/students')
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
        const response=axiosInstance.get(BookLendingAppUrl + `/api/booklending/students/rollNo/${rollNo}`).then(res=>{
            setStudent(res.data);
        })
        
    }
    catch(error){
        console.log('Error fetching student details', error);
    }
}

export const Login=async(Login)=>{
    try{
    
        const response=await axiosInstance.post(BookLendingAppUrl+"/api/users/login",Login);
        localStorage.setItem("jwt",response.data);        
    }
    catch(error){
        console.log(error)
    }
}
