import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTER } from "./utils/router";
import ProfilePage from "./pages/users/profilePage";
import MasterLayout from "./pages/users/them/masterLayout";

const renderUserRouter = ()=>{
 const userRouters =[// tạo 1 oject để truyền đến trang 
    {
        path:ROUTER.USER.HOME,
        Component:<HomePage/>
    },
    {
        path:ROUTER.USER.PROFILE,
        Component:<ProfilePage/>
    }
 ];

 return(
    <MasterLayout>    
        <Routes>
        {
          userRouters.map((item, key) =>(// đưa vào gán cho map để tránh việc phải lặp lại nhiều lần vì map duyệt qua từng phần tử 
            <Route key={key} path={item.path} element={item.Component}/>
            ))  
        }
    </Routes>
    </MasterLayout>

 )
};

const RouterCustom = ()=>{

return renderUserRouter();
};
export default RouterCustom;